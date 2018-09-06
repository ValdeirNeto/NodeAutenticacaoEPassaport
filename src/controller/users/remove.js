const User = require('./../../model/user')
module.exports = (req, res) => {
    User
        .findByIdAndRemove()
        .then(() => res.redirect('/users'))
        .catch(error => console.log(error ))
        

}