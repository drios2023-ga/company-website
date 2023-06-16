const pastproject = require('../models/pastproject');

module.exports={

    seeAllPastProjects
}

function seeAllPastProjects(req, res){
    res.render('pages/pastprojects',{
        pastprojects: pastproject.getPastProjects()
    });
}