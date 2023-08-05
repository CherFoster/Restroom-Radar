from flask import Flask, make_response, request, jsonify
from flask_restful import Resource
from flask_migrate import Mirgrate

from config import app, db, api
from models import User, Bathroom, Review


# Views go here!

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

