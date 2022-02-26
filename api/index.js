//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const waitPort = require("wait-port");
const { PORT, DB_HOST } = process.env;
const { loadCountries } = require("./src/utils");

// Wait for the postgres service  is ready to go.
waitPort({ host: DB_HOST, port: 5432, timeout: 1000 * 20 })
  .then((open) => {
    return new Promise((resolve, reject) => {
      if (open) {
        // Syncing all the models at once.
        resolve(conn.sync({ force: false }));
      } else {
        reject("The port did not open before the timeout...");
      }
    });
  })
  .then(() => loadCountries())
  .then(() => {
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
  })
  .catch((err) =>
    console.log(`An error occured while waiting for the port: ${err}`)
  );
