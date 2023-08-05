from flask import Flask, make_response, request, jsonify
from flask_restful import Resource
from flask_migrate import Mirgrate

from config import app, db, api
from models import User, Bathroom, Review


# Views go here!

@app.route('/') #home route to RR site
@app.route('/bathrooms') #master list of bathrooms
def index():
    return '<h1> Welcome to Restroom Radar NYC </h1>'


#need route to create a bathroom
#need route to create review


if __name__ == '__main__':
    app.run(port=5555, debug=True)

