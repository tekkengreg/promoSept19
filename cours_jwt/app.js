const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()


const users = [
    {
        id: 56,
        email: 'toto@gmail.com'
    },
    {
        id: 93,
        email: 'tata@gmail.com'
    },
]
const profiles = [
    {
        id: 1,
        userid: 56,
        name: 'Toto Torototo'
    },
    {
        id: 2,
        userid: 93,
        name: 'Tata, Tatatata'
    },
]

app.use(express.json())

app.post('/api/login', (req, res) => {
    const user = users.find(u => u.email === req.body.email)
    if (!user)
        return res.status(400).send('email incorrect')

    jwt.sign(
        { user },
        'that_is_my_little_secret',
        (err, token) => {
            res.json({ token })
        })
})

function verifyToken(req, res, next) {
    console.log(req.headers.authorization)
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token,
        'that_is_my_little_secret',
        (err, payload) => {
            if (err){
                console.log(err)
                res.sendStatus(401)
            }else {
                req.user = payload.user
                console.log(req.user , payload.user)
                next()
            }
        })
}

app.get('/api/profiles/me', verifyToken, (req, res) => {
    console.log(req.user.id)
    const profile = profiles.find(p => p.userid === req.user.id)
    res.json(profile)
})

app.listen(5000, () => console.log('run on 5000'))