from random import randint, choice as rc

# Remote library imports
# from faker import Faker

# Local imports
from config import app, db
from models import User, Bathroom, Review

# fake = Faker()

with app.app_context():
    Review.query.delete()
    db.session.commit()
    
    Bathroom.query.delete()
    db.session.commit()
    
    User.query.delete()
    db.session.commit()

    # Seed users
    users = []

    user1 = User(username='Ami', _password_hash='testprettytest')
    users.append(user1)

    user2 = User(username='Amyy', _password_hash='tetest')
    users.append(user2)

    # Seed bathrooms ------------- I need to know how to have the image locked in whenever someone creates a bathroom
    bathrooms = []

    b1 = Bathroom(bathroom_name='M&M New York' , street_num=1600, street_name='Broadway', city='New York', zip_code=10019, image= 'https://images2.minutemediacdn.com/image/upload/c_crop,w_2121,h_1193,x_0,y_77/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images%2FvoltaxMediaLibrary%2Fmmsport%2Fmentalfloss%2F01g4kfw8ppqvd45pjfaa.jpg' )
    bathrooms.append(b1)

    b2 = Bathroom(bathroom_name='Reniassance New York Times Square Hotel' , street_num=714, street_name='7th Avenue', city='New York', zip_code=10036 )
    bathrooms.append(b2)

    b3 = Bathroom(bathroom_name='Hard Rock Cafe' , street_num=1501, street_name='Broadway', city='New York', zip_code=10036 )
    bathrooms.append(b3)

    b4 = Bathroom(bathroom_name='Five Guys' , street_num=253, street_name='West 42nd Street', city='New York', zip_code=10036 )
    bathrooms.append(b4)

    b5 = Bathroom(bathroom_name='Nordstram Rack' , street_num=60, street_name='East 14th Street', city='New York', zip_code=10003 )
    bathrooms.append(b5)

    b6 = Bathroom(bathroom_name='Barnes & Nobel Union Square' , street_num=33, street_name='East 14th Street', city='New York', zip_code=10003 )
    bathrooms.append(b6)

    b7 = Bathroom(bathroom_name='Bloomingdales Soho' , street_num=504, street_name='Broadway', city='New York', zip_code=10012 )
    bathrooms.append(b7)

    b8 = Bathroom(bathroom_name='Crate and Barrel Soho' , street_num=611, street_name='Broadway', city='New York', zip_code=10012 )
    bathrooms.append(b8)

    b9 = Bathroom(bathroom_name='Apple Store Soho' , street_num=103, street_name='Prince Street', city='New York', zip_code=10012 )
    bathrooms.append(b9)

    b10 = Bathroom(bathroom_name='Barnes and Nobel Brooklyn' , street_num=194, street_name='Atlantic Avenue', city='Brooklyn', zip_code=11201 )
    bathrooms.append(b10)

    b11 = Bathroom(bathroom_name='Apple Store Downtown Brooklyn' , street_num=123, street_name='Flatbush Avenue', city='Brooklyn', zip_code=11217 )
    bathrooms.append(b11)

    b12 = Bathroom(bathroom_name='Starbucks Reserve - Williamsburg' , street_num=154, street_name='N 7th Street', city='Brooklyn', zip_code=11249 )
    bathrooms.append(b12)

    b13 = Bathroom(bathroom_name='Kos Kaffee' , street_num=251, street_name='5th Avenue', city='Brooklyn', zip_code=10019 )
    bathrooms.append(b13)

    db.session.add_all(bathrooms)
    db.session.commit()



    # Seed reviews
    reviews = []

    review1 = Review(content='Clean and spacious bathroom', user_id=user1.id, bathroom_id=b1.id)
    reviews.append(review1)

    review2 = Review(content='Very clean. Employees helpful with finding bathroom', user_id=user2.id, bathroom_id=b1.id)
    reviews.append(review2)

    review3 = Review(content='Clean and spacious bathroom', user_id=user1.id, bathroom_id=b3.id)
    reviews.append(review3)

    review4 = Review(content='Clean and spacious bathroom', user_id=user1.id, bathroom_id=b9.id)
    reviews.append(review4)

    review5 = Review(content='Clean and spacious bathroom', user_id=user1.id, bathroom_id=b11.id)
    reviews.append(review5)

    review6 = Review(content='Clean and spacious bathroom', user_id=user2.id, bathroom_id=b13.id)
    reviews.append(review6)

    

    db.session.add_all(reviews)
    db.session.commit()

# if __name__ == '__main__':
#     with app.app_context():
#         print("Starting seed...")
#         # Seed code goes here!