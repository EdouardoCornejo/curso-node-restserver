const { response } = require('express') 


const userGet = (req = request, res =  response) => {

    const {q, nombre='No Name', apikey} = req.query

    res.json({
        status: true,
        msg: 'get Api - controller',
        q,
        nombre,
        apikey
    })
}

const userPut = (req, res) => {
    
    const {id} = req.params


    res.status(500).json({
        status: true,
        msg: 'put Api - controller',
        id
    })
}

const userPost = (req, res) => {
    const {nombre, edad,id,email} = req.body


    res.status(201).json({
        status: true,
        msg: 'post Api - controller',
        nombre, 
        edad,
        id,
        email
    })
}

const userDelete = (req, res) => {
    res.json({
        status: true,
        msg: 'eliminar Api - controller'
    })
}

const userPatch = (req, res) => {
    res.json({
        status: true,
        msg: 'patch Api - controller'
    })
}



module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}