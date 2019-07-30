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
