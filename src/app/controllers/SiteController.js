const Course = require('../models/Course');

class SiteController{
    home(req, res){
        // res.send('hello word');
        Course.find({}, function (err, courses){
            if(!err){
                res.json(courses);
                
            }else{
                res.status(400).json({ error: 'ERROR!!!'});
            }
        });
    }

    search(req, res){
        res.send('search');
    }
}

module.exports = new SiteController;