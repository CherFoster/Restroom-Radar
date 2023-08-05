
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import User, Bathroom, Review

with app.app_context():
    User.query.delete()
    Bathroom.query.delete()
    Review.query.delete()

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
