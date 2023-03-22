# Files - Data Server

## Getting start

_These instructions let get a copy of project for testing and developing._

## Requirements

_Clone the project in your PC:_

- Clone the [FilesDataServer](https://github.com/leoerickp/FilesDataServer.git).

## Config

_Into the project folder, it must create de file .env and add the following information:_

```javascript
URI_EXTERNAL_API_BASE=https://echo-xxxxxxxxxxxxxx
TOKEN_EXTERNAL_API=aSxxxxxxxxxxxxxxxxxxxxxx
PORT = 3000
```

---

## Run

_Into the project folder:_

- Execute the following command:

```console
yarn install
```

```console
node src/app.js
```

- if you prefer execute using docker compose you can execute the following command:

```console
docker-compose -f docker-compose.yml up --build
```

- To see API documentation you can execute:
  **http://localhost:3000/docs**

## Frontend FilesDataFrontend

_The Frontend code repository is available in:_ [FilesDataFrontend](https://github.com/leoerickp/FilesDataFrontend.gits).

## Author

- [Leo Erick Pereyra Rodriguez](https://leoerickp.cf/).
