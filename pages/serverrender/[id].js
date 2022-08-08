import React from 'react'

function Perpost({ post }) {
  console.log('ass');

  return (
    <div><h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}



export async function getServerSideProps(ctx) {

  const { params } = ctx
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await res.json()

  return {
    props: {
      post: data
    }, // will be passed to the page component as props
  }
}
export default Perpost