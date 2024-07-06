const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
app.use(express.json())

const posts = [
    {
        username: 'Om',
        title: 'Post1'
    },
    {
        username: 'Piyush',
        title: 'Post2'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/login', (req, res) => {
    // Authenticate User
})

app.listen(3000)