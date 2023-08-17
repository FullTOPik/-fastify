import fastify from "fastify";

const server = fastify({ logger: true });

interface ISchemaDB {
  id: string;
  book: string;
}

const db_test: ISchemaDB[] = [{ id: "Test_id_book", book: "Война и мир" }];

server.get("/message/:id", (req) => {
  const { id } = req.params as { id: string };
  const foundBook = db_test.find((books) => books.id === id);

  return foundBook;
});

server.listen({ port: 3001 }).catch(console.error);
