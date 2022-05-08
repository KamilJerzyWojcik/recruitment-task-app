import React, { useState } from "react";
import ProjectList from "../components/github/ProjectList";
import Search from "../components/github/Search";
import { fetchRepos, fetchCommits } from "../services/GithubService";
import classes from "./Github.module.css";

const Github = () => {
  const [curretnLogin, setCurrentLogin] = useState();
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState();
  const [isSearched, setIsSearched] = useState(false);
  const [isCorrectLogin, setIsCorrectLogin] = useState(true);

  const getRepos = async (login) => {
    const newRepos = await fetchRepos(login)
      .then((r) => {
        if (!r.ok) {
          if (r.status.toString() === "404") {
            setIsCorrectLogin(false);
            throw new Error();
          } else {
            throw new Error(r.message ?? "coś poszło źle");
          }
        }
        setIsCorrectLogin(true);
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
        setError({ message: error.message ?? undefined });
      });

    return newRepos;
  };

  const getCommits = async (login, repoName, repo) => {
    const commits = await fetchCommits(login, repoName)
      .then((r) => {
        if (!r.ok) {
          setRepos([]);
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
    setError();
    const repos = await getRepos(login);
    if (!repos) return;
    const reposWithCommits = await addCommitsToRepos(login, repos);
    if (!reposWithCommits) return;
    setIsSearched(true);
    setRepos(reposWithCommits);
    setCurrentLogin(login);
  };

  return (
    <div>
      <h1>Wyszukaj projekty na Github</h1>
      <Search onSubmit={githubSubmitHandler} />
      {!isCorrectLogin && <p>Brak loginu</p>}
      {error && error.message && <p className={classes.error}>Błąd pobrania danych: {error.message}</p>}
      {!error && isSearched && <ProjectList projects={repos} login={curretnLogin} />}
    </div>
  );
};

export default Github;
