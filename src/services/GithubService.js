const BASE_URL = "https://api.github.com";

const reposUrl = (login, sortBy="updated", number=5) =>
`${BASE_URL}/users/${login}/repos?sort=${sortBy}&per_page=${number}`;

const commitsUrl = (login, repoName, number=5) =>
`${BASE_URL}/repos/${login}/${repoName}/commits?per_page=${number}`;


export const getRepos = (login) => {
    return fetch(reposUrl(login));
};

export const getCommits = (login, repoName) => {
    return fetch(commitsUrl(login, repoName))
};