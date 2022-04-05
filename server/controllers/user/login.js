const { user } = require('../../models');

module.exports = {
  post: (req, res) => {
    res.status(200).send('login');
  }
}