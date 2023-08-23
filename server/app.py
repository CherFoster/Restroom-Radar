from flask import Flask, make_response, request, jsonify
from flask_restful import Resource
from flask_migrate import Migrate

from config import app, db, api
from models import User, Bathroom, Review


class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)
    

class Bathroom(Resource):
    def get(self):
        bathroom = [bathroom.to_dict() for artist in Bathroom.query.all()]
        return make_response(bathroom, 200)
    
    def post(self):
        request_json = request.get_json()

        bathroom_name = request_json.get('bathroom_name')
        street_num= request_json.get('street_num')
        street_name = request_json.get('street_name')
        city = request_json.get('city')
        zip_code = request_json.get('genres')

        bathroom = Bathroom(
            bathroom_name=bathroom_name,
            street_num=street_num,
            street_name=street_name,
            city=city,
            zip_code=zip_code
        )

@app.route('/') #home route to RR site
def index():
    return '<h1> Welcome to Restroom Radar NYC </h1>'


# @app.route('/bathroom') #master list of bathrooms
api.add_resource(Users, '/users', endpoint ='users')
api.add_resource(Bathroom, '/bathroom', endpoint='bahtroom')


#need route to create & read,possibly update user
#need route to create & read a bathroom
#need route to create, read, update, delete review


if __name__ == '__main__':
    app.run(port=5555, debug=True)


