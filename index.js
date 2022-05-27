const mongoose = require('mongoose');
const app = require('./app');
const usuarioControlador = require('./src/controllers/usuario.controller');

mongoose.Promise = global.Promise;                                                                  //function (){}
mongoose.connect('mongodb://localhost:27017/ControlEmpresas', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Se encuentra conectado a la base de datos.");
    usuarioControlador.usuarioPorDefecto();
    app.listen(3000, function () {
        console.log("Hola IN6AV, esta corriendo en el puerto 3000!")
    })

}).catch(error => console.log(error));

