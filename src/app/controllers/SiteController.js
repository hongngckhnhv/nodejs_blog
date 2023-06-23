const Course = require('../models/Course')

class SiteController {
    //[GET] /
    index(req, res) {
        Course.find({ }) .then(doc =>{ res.json(doc) 
        console.log(doc) }) .catch(err=>{ res.status(400).json({error:'Bị lỗi'}) 
        console.log(err) })
        // res.render('home');
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
