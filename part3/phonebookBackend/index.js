const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors')

app.use(cors())
app.use(express.json());
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

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

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

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  //   console.log(id)
  const person = persons.find((person) => person.id === id);

  //   console.log(person.id, id, typeof person.id, typeof id)
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const generateId = () => {
  const randomId = Math.floor(Math.random() * 4000);
  return randomId;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  const existingName = persons.find((person) => person.name === body.name);
  if (!body.name) {
    return response.status(400).json({
      error: "Name is missing",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "Number is missing",
    });
  } else if (!body.name && !body.number) {
    return response.status(400).json({
      error: "Name and number are missing",
    });
  } else if (existingName) {
    return response.status(400).json({
      error: "Name must be unique",
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
