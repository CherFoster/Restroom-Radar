from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)


    def __repr__(self):
        return f'''
            First Name: {self.first_name}
            Last Name: {self.last_name}
        '''

class Bathroom(db.Model):
    __tablename__ = 'bathrooms'

    id = db.Column(db.Integer, primary_key=True)
    neighborhood = db.Column(db.String)
    reviews = db.Column(db.String) #shoud come from Review table

    def __repr__(self):
        return f''' 
            Neighborhood: {self.neighborhood}
        '''


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String) #come from User First_name
    bathroom = db.Column(db.String) #come from Bathroom_Id
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, update=db.func.now())

    def __repr__(self):
        return f'''
            User Name: {self.user_name}
        '''