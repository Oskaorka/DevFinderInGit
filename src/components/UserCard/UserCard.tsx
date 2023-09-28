import { UserInfo } from 'components/UserInfo';
import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { LocalGithabUser } from 'types';
import styles from './UserCard.module.scss';
// import * as React from 'react';

interface UserCardProps extends LocalGithabUser { }




export const UserCard = (props: UserCardProps) => {
  const {repos, followers, following, created, login, name, blog, location, twitter, company, avatar, bio } = props;

  return (
    <div className={styles.userCard}>
      <img 
        src={avatar} 
        alt={login} 
        className={styles.avatar}
      /> 
      <UserTitle
        created={created}
        login={login}
        name={name}
      />
      <p className={`${styles.bio}${bio ? "" : ` ${styles.empty}`}`}>
        {bio || "This profile has no bio"}
      </p>
      <UserStat
        repos={repos}
        followers={followers}
        following={following}
      />
      <UserInfo
        blog={blog}
        company={company}
        location={location}
        twitter={twitter}
      />
   </div>
  )
};
