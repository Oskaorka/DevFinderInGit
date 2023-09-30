import { useState } from "react";
import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUsers } from "mock";
import { GithabUser, GithubError, LocalGithabUser } from "types";
import { extractLoaclUser } from "utils/extract-loacl-user";
import { isGithubUser } from "utils/typeguard";

const BASE_URL = "https://api.github.com/users/"

function App() {
    const [user, setUser] = useState<LocalGithabUser | null>(defaultUsers);
    const fetchUser = async (ussername: string) => {
    const url = BASE_URL + ussername;
    const res = await  fetch(url);
    const user = await res.json() as GithabUser | GithubError;
    
    if (isGithubUser(user)){
      setUser(extractLoaclUser(user));
    } else {
      setUser(null);
    }
  }

  return (
    <Container>
      <TheHeader/>
      <Search hasError={!user} onSubmit={fetchUser}/>
      { user && (
        <UserCard {...user} />
      )}
    </Container>
  );
}

export default App;
