import { IResolvers } from '@graphql-tools/utils';
import mutations from './mutations';
import resolvers from './resolvers';
import types from './types';

const operations: IResolvers = {
	Query: resolvers,
	Mutation: mutations,
	...types,
};

export default operations;
