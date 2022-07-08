from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
# create a regular expression object that we'll use later   
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


class Email:
    def __init__(self, data ):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_email( cls, data ):
        query = "INSERT INTO emails ( email, created_at, updated_at ) VALUES (%(email)s, NOW(), NOW() );" 

        results = connectToMySQL('email_val_schema').query_db(query, data)

        return results

    @staticmethod
    def validate_email( email ):
        is_valid = True
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(email['email']): 
            flash("Email is not valid", 'email')
            is_valid = False
            return is_valid
        flash("The email address youu entered is a VALID email address! Thank you!")
        return is_valid

    @classmethod
    def get_all_emails( cls ):
        query = "SELECT * FROM emails;"

        results = connectToMySQL('email_val_schema').query_db(query)

        return results