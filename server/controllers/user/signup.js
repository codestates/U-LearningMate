const { User } = require('../../models');

module.exports = {
  post: async (req, res) => {
    try {
        const {email, password, nickname } = req.body;
        if (!email || !password || !nickname) 
            return res.status(422).send('누락된 데이터가 있습니다');
        
        const oauth = 0; // 0: 자체 관리 회원
        // const result = await user.findOrCreate({            
        const [result, created] = await User.findOrCreate({            
          where: { email },
          defaults: { password, nickname, oauth }
        })
        // if(!!result) return res.status(409).send('이미 가입한 메일주소 입니다');
        if(!created) return res.status(409).send('이미 가입한 메일주소 입니다');
        else return res.status(201).send('회원가입 성공');
    } catch (err) {
        console.log(err);
        res.status(500).send();
      }        
  }
}
// *. email, nickname 중복 확인 엔드포인트 필요 >
// * 비밀번호 암호화에 대해서 고민해보기 >
// !. Users 테이블에 oauth 컬럼 추가 (integer) v
    // 0: 자체 , 1: google, 2: daum
// 클라이언트에서 토큰확인 후 닉네임 넣어서 오는 방법 고민  >
// ! 주석처리 한 부분으로 바꿔도 작동하는지 확인
