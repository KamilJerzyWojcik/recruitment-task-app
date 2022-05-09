import React, { useState } from "react";
import ProjectList from "../components/github/ProjectList";
import Search from "../components/github/Search";
import { fetchRepos, fetchCommits, fetchLogin } from "../services/GithubService";
import classes from "./Github.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { setRepos, setError, setIsSearched, setCurrentLogin } from '../store/GithubSlice';

const Github = () => {
  // const [curretnLogin, setCurrentLogin] = useState();
  const currentLogin = useSelector(state => state.github.currentLogin)
  const repos = useSelector(state => state.github.repos)
  const error = useSelector(state => state.github.error)
  const isSearched = useSelector(state => state.github.isSearched)


  const dispatch = useDispatch()

  const [isCorrectLogin, setIsCorrectLogin] = useState(true);

  const checkLogin = async (login) => {
    const isCorretLogin = await fetchLogin(login)
    .then(r => {
      if (!r.ok && r.status.toString() === "404") {
        setIsCorrectLogin(false);
        throw new Error();
      }
      return true;
    }).catch((error) => {
      dispatch(setError({ value: error.message ?? undefined, isError: true }));
    });

    return isCorretLogin;
  };

  const getRepos = async (login) => {
    const newRepos = await fetchRepos(login)
      .then((r) => {
        if (!r.ok) {
          if (r.status.toString() === "404") {
            setIsCorrectLogin(false);
            throw new Error();
          }
          else if (r.status.toString() === "403") {
            setIsCorrectLogin(false);
            throw new Error("Zabroniony dostęp do danych");
          }
          else {
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
            lastUpdated: r.updated_at,
            url: r.html_url,
          };
        });
        return newRepos;
      })
      .catch((error) => {
        dispatch(setError({ value: error.message ?? undefined, isError: true }));
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
            date: c.commit.committer.date,
          };
        });
      })
      .catch((error) => {
        dispatch(setError({ value: error.message ?? undefined, isError:true }));
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
    dispatch(setError({ value: undefined, isError:false }));
    const isLoginCorrect = await checkLogin(login);
    if (!isLoginCorrect) return;

    const repos = await getRepos(login);
    if (!repos) return;

    const reposWithCommits = await addCommitsToRepos(login, repos);
    if (!reposWithCommits) return;

    dispatch(setIsSearched({value: true}));
    dispatch(setRepos({value: reposWithCommits}));
    dispatch(setCurrentLogin({value: login}));
  };

  return (
    <div>
      <h1>Wyszukaj projekty na Github</h1>
      <Search onSubmit={githubSubmitHandler} />
      {!isCorrectLogin && <p>Brak loginu</p>}
      {error.isError && error.value && <p className={classes.error}>Błąd pobrania danych: {error.value}</p>}
      {!error.isError && isSearched && <ProjectList projects={repos} login={currentLogin} />}
    </div>
  );
};

export default Github;
