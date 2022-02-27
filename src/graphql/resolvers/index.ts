import { mergeResolvers } from '@graphql-tools/merge';
import UserResolver from './UserResolver';

const resolversList = [UserResolver]

export const resolvers = mergeResolvers(resolversList)