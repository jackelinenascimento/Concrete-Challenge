import config from './config';

function getUser(user) {
    const url = `/users/${user}`;
    return config.get(url);
}

function getRepos(user) {
    const url = `/users/${user}/repos`;
    return config.get(url);
}

export { getUser, getRepos };