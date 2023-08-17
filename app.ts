import fastify from "fastify";
import axios from "axios";

const server = fastify({ logger: true });

server.post("/get-book", async () => {
  try {
    const id = "Test_id_book";

    const { data: book } = await axios.get(
      `http://localhost:3001/message/${id}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return { id, book };
  } catch (err) {
    return err;
  }
});

server.listen({ port: 3000 }).catch(console.error);
