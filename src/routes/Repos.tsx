import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { RepoProps } from '../types/repo';
import { BackBtn } from '../components/BackBtn'

import classes from './Repos.module.css'

export const Repos = () => {
  const {username} = useParams()

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  const loadRepos = async () => {
    setIsLoading(true)

    const res = await fetch(`https://api.github.com/users/${username}/repos`)

    const data = await res.json()
    
    setIsLoading(false)
    console.log(data)
  }

  useEffect(() => {
    loadRepos()
  }, [])

  return (
    <div>
      <BackBtn />
      Repos {username}
    </div>
  )
}
