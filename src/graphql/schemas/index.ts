import { mergeTypeDefs } from '@graphql-tools/merge';
import UserType from './types/UserType';

const types = [UserType]

export const typeDefs = mergeTypeDefs(types)