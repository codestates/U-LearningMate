const { User } = require('../../models');

const { generateAccessToken, sendAccessToken } = require('../../utils/tokenFunctions.js');
//const { generateAccessToken, sendAccessToken } = require('../../utils/tokenFunctions');

module.exports = {
  post: async (req, res) => {
    console.log("로그인 요청")  
    try {
      // req에서 email, pw 가져오기
      const { email, password } = req.body;
      // 가져온 데이터로 DB 검색
      //let str_email = String.toString(email);
      //console.log(email, password);
      const result = await User.findOne ({
        where : { email: email, password: password }
      })
      //console.log('findOne result: ', result);
      // 데이터 일치 >> 'ok' 메세지와 상태코드 200 반환 + 토큰발행 해서 쿠키로 전송
      // 불일치 >> 'invalid user' 메세지와 상타코드 404 반환
      if (result) { 
        console.log('로그인 성공');
        const {id, email} = result.dataValues;
        const tokenData = { id, email }; // 토큰이 갖게 될 데이터 : 사용자의 email 주소,  DB Users 테이블의 인덱스// 검색을 위해        
        const accessToken = generateAccessToken(tokenData);
        sendAccessToken(res, accessToken); // 쿠키로 토큰 전송
        res.status(200).json({ message: 'ok', accessToken});
      } else {
        console.log('로그인 실패, 인증정보 불일치');
        res.status(404).send('invalid user');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('');
    }
  }  
};
