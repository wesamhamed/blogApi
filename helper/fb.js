async function connect(id) {
  return new Promise((resolve, reject) => {
    if (id == 1) {
      resolve("connect");
    } else {
      reject("not connect");
    }
  });
}

module.exports = connect;
