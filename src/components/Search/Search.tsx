import * as React from 'react';
import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from "assets/icon-search.svg"
import { Button } from 'components/Button';

interface ISearchProps { 
  hasError: boolean,
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: ISearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
      event.preventDefault();
      const text =  event.currentTarget.username.value;    
      if(text) {
        onSubmit(text);
        event.currentTarget.reset();
      }
    }

  return(
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon/>
        </label>
        <input
          // ref={searchRef}
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub user name..."
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
}
