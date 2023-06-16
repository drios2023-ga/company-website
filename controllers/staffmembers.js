const staffmembers = require('../models/staffmember');

module.exports={

    seeAllStaffMembers
}

function seeAllStaffMembers(req, res){
    res.render('pages/staff');
}

function seeAllStaffMembers(req, res){
    res.render('pages/staffmembers',{
        staffmembers: staffmembers.getAllStaffMembers()
    });
}