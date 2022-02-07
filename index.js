const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 4000;
const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`method: "${req.method}"\nurl: "${req.baseUrl + req.url}"`)
    next()
    const delta = Date.now() - start;
    console.log(`${delta}ms`)
    // actions go here...
})

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

//routes use
app.get('/', (req, res) => {
    res.render('index', {
        title: 'look at me',
        caption: 'follow me'
    })
    // res.sendFile(path.join(__dirname, 'views', 'index.hbs'))
})
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)


app.listen(PORT, () => {
    console.log(`listening ${PORT}`)
})