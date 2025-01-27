#!/usr/bin/env node
const axios = require('axios');
const yargs = require('yargs');

// Configuração de comandos
yargs.command({
    command: 'user',
    describe: 'Obter lista de usuários',
    handler: async () => {
        try {
            const response = await axios.get('http://localhost:4090/public/info');
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error.message);
        }
    }
});


yargs.parse();
