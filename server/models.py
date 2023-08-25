from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy import ForeignKey, Table, Column, Integer, String, ForeignKeyConstraint
from config import db

# Define the joint table
user_bathrooms = db.Table(
    'user_bathrooms',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('bathroom_id', db.Integer, db.ForeignKey('bathrooms.id')),
    db.PrimaryKeyConstraint('user_id', 'bathroom_id')
)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)

    reviews = db.relationship('Review', backref='user')
    bathrooms = db.relationship('Bathroom', secondary=user_bathrooms, back_populates='users')

    serialize_rules = ('-reviews.user', '-bathrooms.users')

    def __repr__(self):
        return f'<User {self.id} {self.first_name} {self.last_name}>'

class Bathroom(db.Model, SerializerMixin):
    __tablename__ = 'bathrooms'

    id = db.Column(db.Integer, primary_key=True)
    bathroom_name = db.Column(db.String)
    street_num = db.Column(db.Integer)
    street_name = db.Column(db.String)
    city = db.Column(db.String)
    zip_code = db.Column(db.Integer)

    reviews = db.relationship('Review', backref='bathroom')
    users = db.relationship('User', secondary=user_bathrooms, back_populates='bathrooms')

    serialize_rules = ('-reviews.bathroom', '-users.bathrooms')

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    bathroom_id = db.Column(db.Integer, db.ForeignKey('bathrooms.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    serialize_rules = ('-user.reviews', '-bathroom.reviews')