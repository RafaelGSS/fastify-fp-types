const Fastify = require('fastify');
const fp = require('fastify-plugin');

async function main() {
  const app = Fastify({ logger: true });
  app.register(fp(examplePlugin));
  app.get('/example', async (_request, reply) => {
    reply.example();
  });
  await app.listen(3000, '0.0.0.0')
}

const examplePlugin  = async (fastify, _options) => {
  fastify.decorateReply('example', () => ({ ok: true }));
}

main();
