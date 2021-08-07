import { IResolvers } from '@graphql-tools/utils';
import mutations from './mutations';
import resolvers from './resolvers';

const operations: IResolvers = {
	Query: resolvers,
	Mutation: mutations,
};

export default operations;
