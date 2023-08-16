import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RepoProps } from '../types/repo';
import { BackBtn } from '../components/BackBtn';
import { Loader } from '../components/Loader';
import { Repo } from '../components/Repo';

import classes from './Repos.module.css';

export const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const loadRepos = async () => {
    setIsLoading(true);

    const res = await fetch(`https://api.github.com/users/${username}/repos`);

    const data = await res.json();

    let orderedRepos = data.sort(
      (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
    );

    orderedRepos = orderedRepos.slice(0, 5);

    setIsLoading(false);

    setRepos(orderedRepos);
  };

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <div className={classes.repos}>
      <BackBtn />
      {isLoading && <Loader />}
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      <div className={classes.repos_container}>
        {repos &&
          repos.length > 0 &&
          repos.map((repo: RepoProps) => <Repo key={repo.name} {...repo} />)}
      </div>
    </div>
  );
};
