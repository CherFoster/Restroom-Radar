from flask import Flask, make_response, request, jsonify
from flask_restful import Resource
from flask_migrate import Migrate

from config import app, db, api
from models import User, Bathroom, Review


class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)
    

class Signup(Resource):
    def post(self):
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        user = User(
            username=username, 
            _password_hash=password
            )
        
        db.session.add(user)
        db.session.commit()

        return user.to_dic(), 201

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
        reviews = [review.to_dict() for review in Review.query.all()]
        return make_response(reviews, 200)

    def post(self):
        request_json = request.get_json()

        content = request_json.get('content')
        user_id = request_json.get('user_id')
        bathroom_id = request_json.get('bathroom_id')

        review = Review(
            content=content,
            user_id=user_id,
            bathroom_id=bathroom_id
        )

        db.session.add(review)
        db.session.commit()

        return make_response({'message': 'Review created successfully'}, 201)

    def put(self, review_id):
        request_json = request.get_json()

        review = Review.query.get(review_id)
        if not review:
            return make_response({'message': 'Review not found'}, 404)

        # Update the review attributes based on the request JSON
        review.content = request_json.get('content')

        db.session.commit()

        return make_response({'message': 'Review updated successfully'}, 200)

    def delete(self, review_id):
        review = Review.query.get(review_id)
        if not review:
            return make_response({'message': 'Review not found'}, 404)

        db.session.delete(review)
        db.session.commit()

        return make_response({'message': 'Review deleted successfully'}, 200)


#function is used to associate your resource classes with specific URLs.
api.add_resource(Users, '/users')
api.add_resource(Signup, '/signup')
api.add_resource(Bathrooms, '/bathrooms')
api.add_resource(Reviews, '/reviews')


if __name__ == '__main__':
    app.run(port=5555, debug=True)