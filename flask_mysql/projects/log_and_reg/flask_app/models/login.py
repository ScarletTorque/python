import re
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# # which is made by invoking the function Bcrypt with our app as an argument


# create a regular expression object that we'll use later
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class Login:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_register(login):
        is_valid = True
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(login['email']):
            flash("Email is not valid")
            is_valid = False
        if Login.get_login(login):
            flash("Email already in use! please register new email or login!")
            is_valid = False

        if len(login['first_name']) < 3:
            flash("First name must be at least 3 characters.")
            is_valid = False

        if len(login['last_name']) < 3:
            flash("Last name must be at least 3 characters.")
            is_valid = False

        if len(login['password']) < 3:
            flash("Password must be at least 8 characters")
            is_valid = False

        if (login['conf_pass']) != (login['password']):
            flash("Please match password.")
            is_valid = False
            return is_valid

        return is_valid

    @staticmethod
    def validate_login(data):
        is_valid = True


        login_in_db = Login.get_login(data)
        if not login_in_db:
            flash("Invalid Email/Password")
            is_valid = False
        elif not bcrypt.check_password_hash(login_in_db.password, data["password"]):
            flash("Invalid Email/Password")
            is_valid = False



        return is_valid


    @classmethod
    def get_login(cls,data):
        query = "SELECT * FROM logins WHERE email = %(email)s;"
        result = connectToMySQL("log_and_reg_schema").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM logins WHERE id = %(login_id)s;"
        result = connectToMySQL("log_and_reg_schema").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])




    @classmethod
    def create_login(cls, data):
        query = "INSERT INTO logins (first_name, last_name, email, password, created_at, updated_at ) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW() );"

        results = connectToMySQL('log_and_reg_schema').query_db(query, data)

        return results
