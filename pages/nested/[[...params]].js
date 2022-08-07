import React from 'react'
import { useRouter } from 'next/router'
export default function Nested() {
  const params = useRouter()
  const query = params.query.params || [];
  if (query.length === 2) {
    return <h1>length query value {query[0]} and other will be {query[1]}</h1>
  }

  console.log(query);
  return (
    <div>Nested

    </div>
  )
}
