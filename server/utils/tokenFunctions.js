require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    // AccessToken 생성    
    return sign(data, process.env.ACCESS_SECRET, {expiresIn: "3h"});
  },
  sendAccessToken: (res, accessToken) => {
    // AccessToken을 쿠키로 전달
    const cookieOptions = {
      maxAge: 1000 * 60 * 60 * 8, // 8h
      httpOnly: true 
    }
    res.cookie( 'accessToken', accessToken, cookieOptions);    
  },
  isAuthorized: (token) => {
    // JWT 토큰을 받아서 검증
    return verify(token, process.env.ACCESS_SECRET);    
  }
};
