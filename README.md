# BE-LeilaniSchimmelfennig

Table of API Endpoints in the Making

## TYPE | ENDPOINTS | DESCRIPTION | ACCESS

---

POST    | /api/login    | Logs in | Public

POST    | /api/register | Registers | Public

GET     | /api/users    | Get the Users | Private

GET | /api/user | Get certain user | Private

GET | /api/user/:id | Get user by ID | Private

GET | /api/user/:id/items | Gets ALL items by user_id | Private

POST | /api/item/:id | post an item | Private

PUT | /api/item/:id | updates that item | Private

DELETE | /api/item/:id | deletes that item | Private

**Register-User**

Endpoint: https://bw-bucket-list.herokuapp.com/api/register

requires username and password

Will need:

    {
        "username": "placeholderUsername",
        "password": "password123"
    }

**Register 201 Response:**

    {
    "id": 25,
    "username": "dude12345",
    "password": "$2a$12\$guFuTI04FG7ammM/PFak1OZcqvXKmFFq.yn4epe2paPKobzQTwtPm"
    }

**Login Example:**

Endpoint: https://bw-bucket-list.herokuapp.com/api/login

requires username and password:

    {
        "username": "placeholderUsername",
        "password": "password123"
    }

Login User Response 200:
// message of "Welcome ----!" and gives a token

    {
        "message": "Welcome placeholderUsername!",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyNCwidXNlcm5hbWUiOiJkdWRlMTIzNCIsImlhdCI6MTU2NDUxNjIwMywiZXhwIjoxNTY0NTUyMjAzfQ.qWjVDu2Kc_JoM1Hvt197X4ieQ4UACbPNmsOw0UqZuyI"
    }


**GET All Users**
Endpoint: https://bw-bucket-list.herokuapp.com/api/users

- Requires Token (for Headers Authorization)
- Private Access via login first

**GET User By Id**
Endpoint: https://bw-bucket-list.herokuapp.com/api/users/:id

- Requires Token (for Headers Authorization)
- Private Access via login first

***Items***

- User must be logged in
- Headers Authorization Required

**GET Logged in User**
Endpoint: https://bw-bucket-list.herokuapp.com/api/users/me

**POST an Item**

Endpoint: https://bw-bucket-list.herokuapp.com/api/item

- Add an item
- POST request

Example: 

    {
        "user_id": 25,
        "id": 8,
        "goal": "walk across the room again",
        "complete" : false,
        "journalEntry" : "I did it",
        "photoUrl": "a url will go here"
    }


**PUT an Item**
Endpoint: https://bw-bucket-list.herokuapp.com/api/item

- Edits an item
- PUT request


**GET item by ID**
Endpoint: https://bw-bucket-list.herokuapp.com/api/item/:id

- 

**DELETE item by ID**

Endpoint: https://bw-bucket-list.herokuapp.com/api/item/:id

