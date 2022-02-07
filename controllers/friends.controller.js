const model = require('../models/friends.models')

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Name was not provided'
        })
    }
    const newFriend = {id: String(model.length), ...req.body}
    model.push(newFriend)
    res.json(newFriend)
}

function getFriends(req, res) {
    res.json(model)
}

function getFriend(req, res, next) {
    const {friendId} = req.params
    const friend = model[friendId];
    if (friend) {
        res.json(friend)
    } else {
        res.status(400).json({
            error: 'Friend does not exist'
        })
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
}