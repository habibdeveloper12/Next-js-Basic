import Link from 'next/link'
import React from 'react'

function posts({ post }) {
  return (
    <div>
      {
        post.map(value => <>
          <Link href={`serverrender/${value.id}`} passHref>
            <h1>{value.title}</h1>
          </Link>
          <p>{value.body}</p>
        </>)
      }
    </div>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()

  return {
    props: {
      post: data
    }, // will be passed to the page component as props
  }
}

export default posts