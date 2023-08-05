from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)


class Bathroom(db.Model):
    __tablename__ = 'bathrooms'

    id = db.Column(db.Integer, primary_key=True)
    bathroom_name = db.Column(db.String)
    reviews = db.Column(db.String, db.ForeignKey('reviews.id')) 
    street_num = db.Column(db.Integer)
    street_name = db.Column(db.String)
    city = db.Column(db.String)
    zip_code = db.Column(db.Integer)



class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String, db.ForeignKey('users.id')) 
    bathroom_id = db.Column(db.String, db.ForeignKey('bathrooms.id')) 
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, update=db.func.now())

  