import { gql } from "apollo-server-express";
import userSchema from "./user";
import messageSchema from "./message";
import categorySchema from "./category";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, messageSchema, categorySchema];
