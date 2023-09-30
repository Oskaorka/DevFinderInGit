import { GithabUser } from "types";
export const isGithubUser = (user: any): user is GithabUser => "id" in user;