import React from 'react'
import { useAuth } from '@/hooks/UseAuth';
import { Link } from 'react-router-dom'

export function Page01() {
  const { name } = useAuth();
  return (
    <div>
      <h1>{`Page01 - LOGADO (${name})`}</h1>
      <Link to='/page02'>LINK</Link>
    </div>
  )
}
