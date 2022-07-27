# MEVN Stack Twitter Clone

#### A twitter clone made with MongoDB, Express, Vue.js, Node.js.  
---
## Tech & Tools
- Node.js
- Mongoose
- Express 
- Vue.js, Vuex, Vue Router 
- Axios 
- Passport.js 
- Pug
- PostCSS

<img src="https://user-images.githubusercontent.com/10329339/181353619-53a3f2f2-cecd-4e5e-b426-630a28733cce.jpg"  width="900" />
<img src="https://user-images.githubusercontent.com/10329339/181353631-eb6b560f-27a8-40eb-8539-3c7749f7c214.jpg"  width="900" />

---
## Running with Docker Compose
```
docker-compose up
```
---
## Running the Project

### Backend

```
cd backend
npm install
npm run watch 
npm run start #(for running without nodemon)
```

### Frontend

```
cd frontend
npm install
npm run serve
```
---
### API Endpoints
```

POST http://localhost:3000/users/register HTTP/1.1
content-type: application/json

{"name": "Dogukan Batal", "email": "hi@dogu.dev", "password":"123456", "confirmPassword":"123456", "handle":"dogudev" }

###

# authenticate a user
POST http://localhost:3000/users/login HTTP/1.1
content-type: application/json

{ "email": "hi@dogu.dev", "password":"123456"}

###

# logout a user
GET http://localhost:3000/users/logout HTTP/1.1

###

# check logged in 
GET http://localhost:3000/users/login HTTP/1.1

###

# follow a user
GET http://localhost:3000/users/62d19fa8cedf1f8122207de1/follow HTTP/1.1

###

# unfollow a user
GET http://localhost:3000/users/62cd5ff064c58db028b1d160/unfollow HTTP/1.1


###############################################

# get all tweets
GET http://localhost:3000/tweets HTTP/1.1

###

# get a tweet
GET http://localhost:3000/tweets/62cc944a4155c1c28a9df1a5 HTTP/1.1

###

# create a new tweet
POST http://localhost:3000/tweets/new HTTP/1.1
content-type: application/json

{"content": "It is a test tweet."}

###

# remove a tweet
DELETE http://localhost:3000/tweets/62cc652975266e7236b64eda HTTP/1.1

###

# like a tweet
PATCH http://localhost:3000/tweets/62d1dc4517e02d5ebc285c1d/like HTTP/1.1


###

# unlike a tweet
PATCH http://localhost:3000/tweets/62d19f67cedf1f8122207dd0/unlike HTTP/1.1
   
###

# retweet
PATCH http://localhost:3000/tweets/62dfcd50f09e59c39ecc8249/retweet HTTP/1.1
content-type: application/json

{"content":"It is a test retweet."}

###

# unretweet
PATCH http://localhost:3000/tweets/62dfcd50f09e59c39ecc8249/unretweet HTTP/1.1
```
---

<img src="https://user-images.githubusercontent.com/10329339/181353644-67e32df7-3a09-403f-9d83-b3dafa4b1d28.jpg"  width="450" />
<img src="https://user-images.githubusercontent.com/10329339/181353645-1f24171a-2818-4b26-95ea-4310be9043f2.jpg"  width="450" />



## LICENCE
MIT License

Copyright (c) 2022 Dogukan Batal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.























