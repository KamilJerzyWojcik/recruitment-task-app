import React, { useState } from "react";
import ProjectList from "../components/github/ProjectList";
import Search from "../components/github/Search";
import { fetchRepos, fetchCommits } from "../services/GithubService";

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState();
  const [isSearched, setIsSearched] = useState(false);

  const getRepos = async (login) => {
    const newRepos = await fetchRepos(login)
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
        return newRepos;
      })
      .catch((error) => {
        setError({ message: error.message });
      });

    return newRepos;
  };

  const getCommits = async (login, repoName, repo) => {
    const commits = await fetchCommits(login, repoName)
      .then((r) => {
        if (!r.ok) {
          setRepos();
          throw new Error(r.message ?? "coś poszło źle");
        }
        return r.json();
      })
      .then((result) => {
        return result.map((c) => {
          return {
            id: c.node_id,
            message: c.commit.message,
            url: c.commit.url,
            comitterName: c.commit.committer.name,
            date: new Date(c.commit.committer.date),
          };
        });
      })
      .catch((error) => {
        setError({ message: error.message });
      });

    return { ...repo, commits: commits };
  };

  const addCommitsToRepos = async (login, repos) => {
    const reposWithCommits = await Promise.all(
      repos.map(async (repo) => {
        const repoWithCommits = getCommits(login, repo.name, repo);
        return repoWithCommits;
      })
    );
    return reposWithCommits;
  };

  const githubSubmitHandler = async (login) => {
    if (error) setError();
    const repos = await getRepos(login);
    const reposWithCommits = await addCommitsToRepos(login, repos);
    setIsSearched(true);
    setRepos(reposWithCommits);
  };

  return (
    <div>
      <h1>Wyszukaj projekty na Github</h1>
      <Search onSubmit={githubSubmitHandler} />
      {error && <p>Błąd pobrania danych: {error.message}</p>}
      {!error && isSearched && <ProjectList projects={repos} />}
    </div>
  );
};

export default Github;
