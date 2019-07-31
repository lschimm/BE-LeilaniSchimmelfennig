# BE-LeilaniSchimmelfennig

Table of API Endpoints in the Making

## TYPE | ENDPOINTS | DESCRIPTION | ACCESS

---

POST | /api/login | Logs in | Public

POST | /api/register | Registers | Public

GET | /api/users | Get the Users | Private

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
