const axios = require('axios');

const getClima = async(lat, lng) => {
    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d0569d9dadf3ebc615a0d1553506371c`);

    let clima = respuesta.data.main.temp;
    return clima;

}

module.exports = {
    getClima
}