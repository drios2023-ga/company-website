const staffmembers = require('../models/staffmember');

module.exports={

    seeAllStaffMembers
}

function seeAllStaffMembers(req, res){
    res.render('pages/staff');
}

function seeAllStaffMembers(req, res){
    res.render('pages/staffmembers', {
        title: 'Staff Members',
        staffmembers: staffmembers.getAllStaffMembers()
    });
}