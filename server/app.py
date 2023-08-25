from flask import Flask, make_response, request, jsonify
from flask_restful import Resource
from flask_migrate import Migrate

from config import app, db, api
from models import User, Bathroom, Review


class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)
    

class Bathrooms(Resource):
    def get(self):
        bathroom = [bathroom.to_dict() for bathroom in Bathroom.query.all()]
        return make_response(bathroom, 200)
    
    def post(self):
        request_json = request.get_json()

        bathroom_name = request_json.get('bathroom_name')
        street_num = request_json.get('street_num')
        street_name = request_json.get('street_name')
        city = request_json.get('city')
        zip_code = request_json.get('zip_code')

        bathroom = Bathroom(
            bathroom_name=bathroom_name,
            street_num=street_num,
            street_name=street_name,
            city=city,
            zip_code=zip_code
        )

        db.session.add(bathroom)
        db.session.commit()

        return make_response({'message': 'Bathroom created successfully'}, 201)
    

class Reviews(Resource):
    def get(self):
        review = [review.to_dict() for review in Review.query.all()]
        return make_response(review, 200)

        

@app.route('/') #home route to RR site
def index():
    return '<h1> Welcome to Restroom Radar NYC </h1>'

@app.route('/bathrooms', methods=['GET']) #master list of bathrooms
def get_bathrooms():
    all_bathrooms = Bathroom.query.all()
    return [ bathroom.to_dict() for bathroom in all_bathrooms]

@app.route('/bathrooms/<int:zip_code>', methods=['GET']) # List of bathrooms based on a single zip code
def get_bathrooms_by_zip_code(zip_code):
    bathrooms = Bathroom.query.filter_by(zip_code=zip_code).all()
    return [bathroom.to_dict() for bathroom in bathrooms]

@app.route('/reiews', methods=['GET']) #master list of reviews
def get_reviews():
    all_reviews = Review.query.all()
    return [review.to_dict() for review in all_reviews]

# @app.route('/bathroom') 
# api.add_resource(Users, '/users', endpoint ='users')
# api.add_resource(Bathroom, '/bathroom', endpoint='bahtroom')


#need route to create & read,possibly update user
#need route to create & read a bathroom
#need route to create, read, update, delete review


if __name__ == '__main__':
    app.run(port=5555, debug=True)


# GET /games would give back all of the games, index (READ)
# POST /games would create one game, CREATE
# GET /games/<int:id> gives us one game READ
# PATCH /games/<int:id> updating a game
# DELETE /games/<int:id> destroying a game