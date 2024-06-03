require('dotenv').config()
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors')
const Person = require('./models/person')
const mongoose = require ('mongoose')

app.use(cors())
app.use(express.json());
app.use(express.static('dist'))
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
      response.json(persons.map(person => person.toJSON()))
      })
})

app.get("/info", (request, response) => {
  const entries = persons.length;
  const currentTime = new Date().toLocaleString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  response.send(
    `
    <div>
      
      <p>Phonebook has info for ${entries} people. </p>
      <p>
        ${currentTime} (${timeZone})
      </p>
    </div>`
  );
});

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});


app.post('/api/persons', (request, response) => {
  const body = request.body

  const personName = body.name
  const personNumber = body.number

  if (!body.name || !body.number) {
    return response.status(400).json({error: 'content missing'})
  }

  const person = new Person ({
    name : personName,
    number : personNumber,
  })
  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
