const path = require('path');
const fs = require('fs');


const mainController = {
    index: (req,res) => {
        
        return res.render('home');
    }

}

module.exports = mainController;
