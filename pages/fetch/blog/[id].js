import React from 'react'

export default function id({ data }) {
  console.log(data);

  return (
    <div>id

      <h1>{data.title}</h1>
      <h1>{data.body}</h1>

    </div>
  )
}
export async function getStaticProps(ctx) {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const { params } = ctx
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  }
}
export async function getStaticPaths() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const paths = data.map(post => {
    return {
      params: { id: `${post.id}` }
    }
  })
  return {
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    paths,
    fallback: true, // can also be true or 'blocking'
  }
}