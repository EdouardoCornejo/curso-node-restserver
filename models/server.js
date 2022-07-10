const express = require('express')
const cors = require('cors')

class Server {

    constructor(){    
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPatch = '/api/usuarios'

        //Middlewares
        this.middlewares()

        //Rutas de aplicacion
        this.routes()
    }

    middlewares(){
        //CORS
        this.app.use( cors() )

        //Lectura y Parceo del body.
        this.app.use( express.json() )   
        
        //Directorio Publico
        this.app.use(express.static('public'))
    }

    routes(){ 
        this.app.use(this.usuariosPatch, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port
        )}
    )}
}
 
module.exports = Server 