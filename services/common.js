const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}


exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['jwt'];
    }
    //TODO : this is temporary token for testing without cookie
    // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTZhYjNjMWU5OTQ0Yzc0OTBhN2ZmNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIxNDUzNjExfQ.p9mqYZ_2vlxg4IU-V5hMmbQOwCYOP7lpJQ--w6jpL2w"
    return token;
  };