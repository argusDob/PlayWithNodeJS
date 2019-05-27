var express = require('express')
var app = express()
var ObjectId = require('mongodb').ObjectId
 
// SHOW LIST OF USERS
app.get('/', function(req, res, next) {    
    // fetch and sort users collection by id in descending order
    req.db.collection('users').find().sort({"_id": -1}).toArray(function(err, result) {
        //if (err) return console.log(err)
        if (err) {
            req.flash('error', err)
            res.render('user/list', {
                title: 'User List', 
                data: ''
            })
        } else {
            // render to views/user/list.ejs template file
            res.render('user/list', {
                title: 'User List', 
                data: result
            })
           
        }
    })
})
 
// SHOW ADD USER FORM
app.get('/add', function(req, res, next){    
    // render to views/user/add.ejs
    res.render('user/add', {
        title: 'Add New User',
        name: '',
        age: '',
        email: ''        
    })
})


module.exports = app
