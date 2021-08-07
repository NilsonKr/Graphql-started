import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './schemas/resolvers';
const fs = require('fs');
const path = require('path');

const app = require('express')();

const typeDefs = fs.readFileSync(
	path.resolve(__dirname, 'schemas/schema.graphql'),
	'utf-8'
);

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

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
