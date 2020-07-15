var bkfd2Password = require("pbkdf2-password");

var hasher = bkfd2Password();

async function hashPassword(password) {
  return new Promise((resolve, reject) => {
    hasher({ password: password, salt: "blogApi" }, (err, pass, slat, hash) => {
      resolve(hash);
    });
  });
}

module.exports = hashPassword;
