const express = require('express');
const app = express();
const port = 8000;
const { register, login, createEvent, updateStatus, updateLocation, requestFriend, acceptFriend, rejectFriend, setUserLocation } = require('../database/model/queryFunctions.js');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/userData', (req, res) => {
  res.send(data)
});

app.post('/register', register);

app.get('/login', login);

app.post('/setUserLocation', setUserLocation);

app.post('/createEvent', createEvent);

app.put('/updateStatus', updateStatus);

app.put('/updateLocation', updateLocation);

app.post('/requestFriend', requestFriend);

app.put('/acceptFriend', acceptFriend);

app.delete('/rejectFriend', rejectFriend);

app.listen(3000, () => {
  console.log(`Listening at http://localhost:${port}`);
});



var data = {
  friendsList: [
    {
      id: '1',
      title: 'Andy',
      coordinates: {latitude: 37.7779911, longitude: -122.392759},
      status: 'In class'
    },
    {
      id: '2',
      title: 'Jessica',
      coordinates: {latitude: 37.7679911, longitude: -122.399759},
      status: 'At work at work'
    },
    {
      id: '3',
      title: 'Carl',
      coordinates: {latitude: 37.7699911, longitude: -122.392759},
      status: 'Doing nothing'
    },
    {
      id: '4',
      title: 'Jasmine',
      coordinates: {latitude: 37.7579911, longitude: -122.392759},
      status: 'Currently out eating lunch'
    },
    {
      id: '5',
      title: 'Fred',
      coordinates: {latitude: 37.7079911, longitude: -122.392759},
      status: ''
    },
    {
      id: '6',
      title: 'Alex',
      coordinates: {latitude: 37.7891669, longitude: -122.4165994},
      status: 'Watching tv at home'
    },

  ],

  eventList: [
    {
      address: "Fisherman's Wharf, San Francisco, CA, USA",
      coordinates: {latitude: 37.8091669, longitude: -122.4165994},
      date: '2021-04-10T19:00:10.000Z',
      inviteList: {"2": "Jessica", "4": "Jasmine"},
      title: "Lets go hangout with seal"
    },

    {
      address: "The Pub, Ownes Stree, San Francisco, CA, USA",
      coordinates: {latitude: 37.7679911, longitude: -122.392759},
      date: '2021-04-10T19:00:10.000Z',
      inviteList: {"4": "Jasmine", "6": "Alex", "1": "Andy", "3": "Carl"},
      title: "Lets go hangout with seal"
    },

    {
      address: "Clinton Park, San Francisco, CA, USA",
      coordinates: {latitude: 37.769338, longitude: -122.4214935},
      date: '2021-04-18T17:00:56.000Z',
      inviteList: {"3": "Carl", "5": "Fred"},
      title: "Let’s picnic"
    },

    {"address": "Legion of Honor, 34th Avenue, San Francisco, CA, USA", "coordinates": {"latitude": 37.78455795, "longitude": -122.50095497618373}, "date": "2021-04-10T19:00:58.000Z",
    inviteList: {"3": "Carl", "5": "Fred"},
    "title": "Let’s checkout the museum"}
  ]
};
