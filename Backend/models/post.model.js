const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
    {
        name: String,
        content: String
    },
    {
        timestamp: true
    }
)

const Post = mongoose.model('Post', PostSchema)
module.exports = Post