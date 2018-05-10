# Puppers 🐶

This app is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [JSON Server](https://github.com/typicode/json-server)

## Getting Started

```
git clone https://github.com/jeanpaulsio/puppers-starter.git
cd puppers-starter
npm install
npm start
```

Running `npm start` will spin up a React server as well as a fake api

When the server starts up, you should see this:

![Front End](https://github.com/jeanpaulsio/puppers-starter/blob/master/screenshot1.png)

Navigate to `http://localhost:4000/dogs` and you should see this:

![Back End](https://github.com/jeanpaulsio/puppers-starter/blob/master/screenshot2.png)

## Front End

The front end runs on port `3000`

```
http://localhost:3000/
```

## Axios Examples

Fetching a resource:

```javascript
const { data } = await axios.get("http://localhost:4000/dogs")
```

Posting a resource:

```javascript
const { data } = await axios.post("http://localhost:4000/dogs", {
  name: this.state.newDog
})
```

## API Endpoints

The app comes with one resource - `dogs`

Feel free to create your own

Request:

```
GET http://localhost:4000/dogs
```

Response:

```
[
  {
    "id": 1,
    "name": "Benny"
  },
  {
    "id": 2,
    "name": "Borgo"
  },
  {
    "id": 3,
    "name": "Dewey"
  },
  {
    "id": 4,
    "name": "Percy"
  },
  {
    "id": 5,
    "name": "Peter"
  },
  {
    "id": 6,
    "name": "Pudge"
  },
  {
    "id": 7,
    "name": "Riggins"
  },
  {
    "id": 8,
    "name": "Doge"
  }
]
```

Request:

```
GET http://localhost:4000/dogs/1
```

Response:

```
{
  "id": 1,
  "name": "Benny"
}
```
