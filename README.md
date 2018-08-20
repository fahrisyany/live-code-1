# StickerGram

List of routes user:

| **Route** | **HTTP** | **Description** | **Parameters**     |
| --------- | -------- | --------------- | ------------------ |
| /register | POST     | Signup new user | username, password |
| /login    | POST     | Signin user     | username, password |

List of routes sticker:

| **Route**    | **HTTP** | **Description** | **Parameters**                         |
| ------------ | -------- | --------------- | -------------------------------------- |
| /listItems   | GET      | Get all item    |                                        |
| /createItems | POST     | Add new item    | title,price, quantitiy, image,category |
