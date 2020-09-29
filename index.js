const express = require('express')
const morgan = require('morgan')
morgan.token('body', (req, res) => {
    if (req.method==='POST') {
        const body = JSON.stringify(req.body);
        return body;
    }
});
const app = express()
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "re",
        "number": "44",
        "id": 5
    },
    {
        "name": "f",
        "number": "4",
        "id": 6
    },
    {
        "name": "ffffff",
        "number": "3333",
        "id": 7
    }
];

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(p => p.id === id);
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
    response.json(person);
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const existingPerson = persons.find(p => p.name === body.name);
    if (existingPerson) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)

    response.json(person)
})

app.get('/api/info', (request, response) => {
    const receivedDate = new Date();
    const infoMessage = `Phonebook has info for ${persons.length} people \n \n ${receivedDate}`;
    response.send(infoMessage);
})

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(1000000));
}

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


