const link = require('../models/link');

module.exports={

    seeAllLinks
}

function seeAllLinks(req, res){
    res.render('pages/links',{
        links: link.getAllLinks()
    });
}