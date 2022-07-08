from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__( self, data):
        self.id = data['id']
        self.first_name = data['Fname']
        self.last_name = data['Lname']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['Dojos_id']

    @classmethod
    def create_ninja( cls, data ):
        query = "INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id) VALUES (%(Fname)s, %(Lname)s, %(Age)s, NOW(), NOW(), %(Dojos_id)s);"

        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

        return results


    @classmethod
    def get_one_dojo(cls, data):
        query = "SELECT * FROM ninjas JOIN dojos ON ninjas.dojo_id = dojos.id WHERE dojo_id = %(id)s;"

        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return results

    @classmethod
    def get_dojo(cls, data):
        query = "SELECT * FROM dojos WHERE id = %(id)s;"

        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return results