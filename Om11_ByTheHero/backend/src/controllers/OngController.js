// crypto usado para gerar a o id da ONG
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
         // retorno simples a baixo
    // return response.send('Hellou Word');

    // * Métodps HTTP:
    // * 
    // * GET: Buscar/listar uma informaçao do back-end
    // * POST: Criar uma informação no ack-end
    // * PUT: Alterar uma informação no back-end
    // * DELETE: Deletar uma informação no back-end
    // *

    //**
    // * Tipos de parâmetros
    // * Query: Parâmetro enviados na rota após o "?" (filtros, paginação)
    // * Route Params: Parâmetros utilizadospara identificar recursos
    // * Request Body: Corpo da requisição, utilizado para riar ou alterar recursos
    
    // Ver o que esta sendo enviado na URL
    // const params = request.query;
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });
    // retorno com JSON
    return response.json({ id });
    }
};