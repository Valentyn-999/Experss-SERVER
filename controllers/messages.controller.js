function getMessages(req, res) {
    res.render('messages', {
        caption: 'Hello fuckers',
        title: 'Messages to my friends',
        friend: 'Elon Mask'
    })
}
function postMessage(req, res) {
    console.log(`updating messages with new one: `, req)
}

module.exports = {
    getMessages,
    postMessage
}