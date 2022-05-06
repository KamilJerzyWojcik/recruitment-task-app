import React, { useState } from "react";
import ProjectList from "../components/github/ProjectList";
import Search from "../components/github/Search";
import { getRepos, getCommits } from "../services/GithubService";

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState();
  const [isSearched, setIsSearched] = useState(false);

  const getReposByLogin = async (login) => {
    const newRepos = await getRepos(login)
      .then((r) => {
        if (!r.ok) {
          throw new Error(r.message ?? "coś poszło źle");
        }
        return r.json();
      })
      .then((result) => {
        let newRepos = result.map((r) => {
          return {
            id: r.id,
            name: r.name,
            lastUpdated: new Date(r.updated_at),
            url: r.html_url,
          };
        });
        setRepos(newRepos);
        setIsSearched(true);
        return newRepos;
      })
      .catch((error) => {
        setError({ message: error.message });
      });

    return newRepos.map((r) => r.name);
  };

  const githubSubmitHandler = async (login) => {
    if (error) setError();
    const result = await getReposByLogin(login);
    console.log(result);
  };

  const list = repos.map((r) => <li key={r.id}>{r.name}</li>);

  return (
    <div>
      <h1>Wyszukaj projekty na Github</h1>
      <Search onSubmit={githubSubmitHandler} />
      {error && <p>Błąd pobrania danych: {error.message}</p>}
      {!error && isSearched && list}
      {!error && isSearched && <ProjectList />}
    </div>
  );
};

export default Github;
