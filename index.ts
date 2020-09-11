import Fastify, { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

async function main() {
  const app = Fastify({ logger: true });
  app.register(fp(examplePlugin));
  app.get('/example', async (_request: FastifyRequest, reply: FastifyReply & { example: () => object }) => {
    reply.example();
  });
  await app.listen(3000, '0.0.0.0')
}

const examplePlugin: FastifyPluginAsync = async (fastify: FastifyInstance, _options: FastifyPluginOptions): Promise<void> => {
  fastify.decorateReply('example', () => ({ ok: true }));
}

main();
