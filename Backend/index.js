const express = require('express')
const cor = require('cors')
const mongoose = require('mongoose')
const Post = require('./models/post.model.js')

const app = express()
app.use(express.json())
app.use(cor())

// homepage
app.get('/', async(req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ meassage: error.meassage })
    }
})

// create post
app.post('/post', async (req, res) => {
    try {
        const post = await Post.create(req.body.data)
        res.status(200).json({ post: post, postSuccess: true })
    } catch (error) {
        res.status(500).json({ meassage: error.meassage, postSuccess: true })
    }
})

// edit post
app.get('/post/:id', async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ meassage: error.meassage })
    }
})

// update post
app.put('/post/:id', async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findByIdAndUpdate(id, req.body.data)
        if (!post) {
            res.status(404).json({ meassage: "Post is not found!" })
        }
        
        const updatePost = await Post.findById(id)
        res.status(200).json({ updatePost: updatePost, updateSuccess: true })
    } catch (error) {
        res.status(500).json({ meassage: error.meassage, updateSuccess: false })
    }
})

app.delete('/post/:id', async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findByIdAndDelete(id)
        if (!post) {
            return res.status(404).json({ meassage: 'Post not found' })
        }
        res.status(200).json({ meassage: 'Post delete', deleteSuccess: true })
    } catch (error) {
        res.status(500).json({ meassage: error.meassage, deleteSuccess: false })
    }
})

app.listen(3000, () => {
    console.log('server running');

    // connect mongodb
    mongoose.connect('mongodb+srv://admin:plgYRoKhgSxWzuuM@cluster0.uki5ged.mongodb.net/Post-APP?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('connect mongodb');
    }) .catch(error => {
        console.log('Fall to connect mongodb', error);
    })
})