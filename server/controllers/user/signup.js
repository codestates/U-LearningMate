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
    //res.status(200).send('signup');
  }
}
// 1. req 에서 데이터 받아오기 v
// 2. 받아온 데이터에 나머지 데이터 채워넣어서 (oauth) v
// 3. sequelize 통해서 DB에 입력하기 v
// *. email, nickname 중복 확인 엔드포인트 필요 >
// * 비밀번호 암호화에 대해서 고민해보기 >
// !. Users 테이블에 oauth 컬럼 추가 (integer) v
    // 0: 자체 , 1: google, 2: daum
// !. score 컬럼 자동 생성으로 변경 v
// 클라이언트에서 토큰확인 후 닉네임 넣어서 오는 방법 고민  >
// ! 주석처리 한 부분으로 바꿔도 작동하는지 확인