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
const server = require('./src/app.js');
const { conn ,Countries } = require('./src/db.js');

const axios= require('axios').default;




const cargarApi= async function(){
  try{
    const api= await axios.get('https://restcountries.com/v3/all');
    const filterApi=api.data.map((elem)=>{
            return{
                id: elem.cca3,
                name: elem.name.common,
                flag: elem.flags[0],
                continent: elem.region,
                capital: elem.capital === undefined || elem.capital.length < 1 ? 'undefined':elem.capital[0],
                subregion: elem.subregion === null ? 'null': elem.region,
                area: elem.area,
                population: elem.population
              }
        })
        
      const aux= await Countries.bulkCreate(filterApi)
    }
    catch(error){
      console.log(error);
    }
}


// Syncing all the models at once.
conn.sync({ force: false}).then(() => {

  cargarApi();

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  }); 
});
 