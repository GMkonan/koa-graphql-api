import Koa from 'koa';
import mount from 'koa-mount';
import { graphqlHTTP } from 'koa-graphql';
import mongoose from "mongoose";
import UserType from './graphql/schemas/UserType';
import UserResolver from './graphql/resolvers/UserResolver';

(async () => {

    const app = new Koa();

    app.use(
        mount(
          '/graphql',
          graphqlHTTP({
            schema: UserType,
            rootValue: UserResolver,
            graphiql: true,
          }),
        ),
      );
    mongoose.connect('mongodb://localhost:27017/koatest')
    .then(() => app.listen(4000, () => console.log("LISTENING")))
    .catch(err => console.log(err));
})();