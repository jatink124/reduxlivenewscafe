import React from 'react'
import {useQuery} from 'react-query';
import * as api from './usersAPI';
export const News = () => {
  const {data,isLoading} = useQuery('news',api.getUsers);
  if(isLoading){
      return 'Loading users...';
  }
  return (
    <div><ul>{data?.map(user =><li key={user.id}>{user.PostTitle}</li>)} </ul></div>
  )
}
