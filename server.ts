import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './lib/resolvers';
const fs = require('fs');
const path = require('path');

const app = require('express')();

const schema = buildSchema(
	fs.readFileSync(path.resolve(__dirname, 'lib/schema.graphql'), 'utf-8')
);

app.use(
	'/api',
	graphqlHTTP({
		schema: schema,
		rootValue: resolvers,
		graphiql: true,
	})
);

app.listen('3000', () => {
	console.log('Magic happens at http://localhost:3000/api');
});
