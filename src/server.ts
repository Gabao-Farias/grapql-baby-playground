import { ApolloServer } from "apollo-server";
import path from "node:path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AppointmentResolvers } from "./resolvers";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentResolvers],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });
  const server = new ApolloServer({ schema });

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
}

bootstrap();
