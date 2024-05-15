const express = require('express')
const path = require('path')
const router = express.Router()
const blogs=require('../data/blogs')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html')) // we get out of dir becoz it was finding that file in routes
                    // __dirname is the path of blog.js // there we used ../ to get one step out
    res.render('home');               
})

router.get('/blog',(req,res)=>{
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
    // res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
    res.render('blogHome',{
        blogs:blogs
    })
})

router.get('/blogpost/:slug',(req,res)=>{
    // console.log(req.params.slug)
    myBlog=blogs.filter((e)=>{
        return e.slug==req.params.slug;
    })
    // console.log(myBlog)
    // res.sendFile(path.join(__dirname,'../templates/blogPage.html'))
    res.render('blogPage',{
        title: myBlog[0].title, // becaues myBlog is an array
        content: myBlog[0].content
    })
})



module.exports=router