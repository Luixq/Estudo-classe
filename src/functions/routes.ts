import { FastifyInstance } from "fastify";

type DefineRoutesHandler = (app: FastifyInstance) => void;

export function DefineRoutes(handler: DefineRoutesHandler) {
    return function (app: FastifyInstance, _: any, done: Function) {
        handler(app);
        done();
    }
}