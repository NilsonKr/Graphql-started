const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const fs = require('fs');
const path = require('path');
const resolvers = require('./lib/resolvers');

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
