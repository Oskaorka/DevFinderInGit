import { GithabUser, LocalGithabUser } from "types";

export const extractLoaclUser = (user: GithabUser): LocalGithabUser => ({
    login: user.login,
    avatar: user.avatar_url,
    name: user.name,
    company: user.company,
    blog: user.blog,
    location: user.location,
    bio: user.bio,
    twitter: user.twitter_username,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    created: user.created_at
})