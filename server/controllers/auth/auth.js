require('dotenv').config();
const { user } = require('../../models');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECERET,
  process.env.GOOGLE_REDIRECT_URI
);

module.exports = async (req, res) => {
  // res.status(200).send('hi!');
  // console.log('auth 되냐?');
  const token = req.body.id_token;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload(); // 데이터 핸들러
  const email = payload['email']; // 데이터 핸들러

  const [find, created] = await user.findOrCreate({
    where: {
      email: email,
    },
    defaults: {
      password: 'password',
      nickname: 'null',
      score: 0,
    },
  });
  if (created) {
    const data = created;
    // console.log(data);
    delete data.dataValues.password;
    // console.log(data.dataValues);
    // console.log(created);
    res.status(200).json({ userInfo: data.dataValues });
  }
  const data = find;
  delete data.dataValues.password;
  res.status(200).json({ userInfo: data.dataValues });
};
