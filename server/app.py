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

@app.route('/reviews', methods=['GET']) #master list of reviews
def get_reviews():
    all_reviews = Review.query.all()
    return [review.to_dict() for review in all_reviews]


@app.route('/reviews/<int:review_id>', methods=['PUT'])  # update a review
def update_review(review_id):
    review = Review.query.get(review_id)
    if not review:
        return make_response({'message': 'Review not found'}, 404)

    request_json = request.get_json()
    new_content = request_json.get('content')

    review.content = new_content
    db.session.commit()

    return make_response({'message': 'Review updated successfully'}, 200)

@app.route('/reviews/<int:review_id>', methods=['DELETE'])  # delete a review
def delete_review(review_id):
    review = Review.query.get(review_id)
    if not review:
        return make_response({'message': 'Review not found'}, 404)

    db.session.delete(review)
    db.session.commit()

    return make_response({'message': 'Review deleted successfully'}, 200)


#function is used to associate your resource classes with specific URLs.
api.add_resource(Users, '/users')
api.add_resource(Bathrooms, '/bathrooms')
api.add_resource(Reviews, '/reviews')


if __name__ == '__main__':
    app.run(port=5555, debug=True)