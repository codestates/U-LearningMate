require('dotenv').config();
const { User } = require('../../models');
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
  console.log(token);
  const ticket = await client.verifyIdToken({
    idToken: token, // 잘못된 값이 들어왔을 경우를 대비한 예외처리코드 작성하기(20220407)
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  console.log(ticket);
  const payload = ticket.getPayload(); // 데이터 핸들러
  const email = payload['email']; // 데이터 핸들러
  if (!payload) {
    res.status(400).send('no token');
  }

  const [find, created] = await User.findOrCreate({
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

// http://ec2-13-125-238-251.ap-northeast-2.compute.amazonaws.com:8080
