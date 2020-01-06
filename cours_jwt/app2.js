const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json())
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
        name: 'Tata, Taratata'
    },
]

app.post('/api/signin', (req, res) => {
    const user = users.find(u => u.email === req.body.email)
    if (!user)
        res.sendStatus(400)
    else {
        jwt.sign(
            { user },
            require('./conf').modules.secret,
            (err, token) => {
                if (err) return res.sendStatus(500)
                else {
                    res.json(token)
                }
            }
        )
    }
})

function verifyToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(
        token,
        require('./conf').modules.secret,
        (err, payload) => {
            if (err) res.sendStatus(500)
            else {
                req.user = payload.user
                next()
            }
        })
}
app.use(verifyToken)

app.get('/api/profiles/me', (req, res) => {
    console.log('gg', req.user)
    const profile = profiles.find(p => p.userid === req.user.id)
    res.json({ profile })
})


app.listen(5000, () => console.log('run on 5000'))