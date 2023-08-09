from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from config import db

class User(db.Model):
    tablename = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)


class Bathroom(db.Model):
    tablename = 'bathrooms'

    id = db.Column(db.Integer, primary_key=True)
    bathroom_name = db.Column(db.String)
    street_num = db.Column(db.Integer)
    street_name = db.Column(db.String)
    city = db.Column(db.String)
    zip_code = db.Column(db.Integer)

    reviews = db.relationship('Review', backref='bathroom')


class Review(db.Model):
    tablename = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id')) 
    bathroom_id = db.Column(db.Integer, db.ForeignKey('bathrooms.id')) 
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    # updated_at = db.Column(db.DateTime, onupdate=db.func.now())