from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import login

class Show:
    def __init__( self, data):
        self.id = data['id']
        self.title = data['title']
        self.network = data['network']
        self.release_date = data['release_date']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.login_id = data["login_id"]

        self.login = {}

    @classmethod
    def create_show( cls, data ):
        query = "INSERT INTO shows (title, network, release_date, description, created_at, updated_at, login_id) VALUES (%(title)s, %(network)s, %(release_date)s, %(description)s, NOW(), NOW(), %(login_id)s);"

        results = connectToMySQL('tv_shows_schema').query_db(query, data)

        return results

    @staticmethod
    def validate_show(show):
        is_valid = True

        if len(show['title']) < 3:
            flash("Title must be at least 3 characters.")
            is_valid = False

        if len(show['network']) < 3:
            flash("Network must be at least 3 characters.")
            is_valid = False

        if (show['release_date']) == "":
            flash("Must include date")
            is_valid = False

        if len(show['description']) < 3:
            flash("Description must be at least 8 characters")
            is_valid = False

        return is_valid


    @classmethod
    def get_one_show(cls, data):
        query = "SELECT * FROM shows JOIN logins ON shows.login_id = logins.id WHERE shows.id = %(id)s;"

        results = connectToMySQL('tv_shows_schema').query_db(query, data)

        user = cls(results[0])

        login_data = {
            "id" : results[0]["logins.id"],
            "first_name" : results[0]["first_name"],
            "last_name" : results[0]["last_name"],
            "email" : results[0]["email"],
            "password" : results[0]["password"],
            "created_at" : results[0]["logins.created_at"],
            "updated_at" : results[0]["logins.updated_at"],
        }
        user.login = login.Login(login_data)
        return user

    @classmethod
    def get_show(cls):
        query = "SELECT * FROM shows;"

        results = connectToMySQL('tv_shows_schema').query_db(query)

        shows = []

        for show in results:
            shows.append(cls(show))

        return shows

    @classmethod
    def update_one(cls, data):
        query = "UPDATE shows SET title = %(title)s, network = %(network)s, release_date = %(release_date)s, description = %(description)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('tv_shows_schema').query_db(query, data)

    @classmethod
    def delete_one(cls, data):
        query = "DELETE FROM shows WHERE id = %(id)s;"
        return connectToMySQL('tv_shows_schema').query_db(query, data)