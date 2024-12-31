import fastify from 'fastify';
import autoLoad from "@fastify/autoload";

const app = fastify();

app.register(autoLoad, {
    dir: import.meta.dirname + '/routes',
    routeParams: true
});

app.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
    console.log("Servidor rodando em:", address);
});