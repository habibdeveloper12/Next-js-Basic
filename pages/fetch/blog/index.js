import Image from 'next/image';
import Link from 'next/link';

// getStaticProps
function Data({ data }) {
  console.log(data);

  return (
    <div className='synic'>


      {
        data.map(post => <>

          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions">
                <Link href={`blog/${post.id}`}>
                  <a ><button className="btn btn-primary">More Details</button></a>
                </Link>
              </div>
            </div>
          </div>

        </>)
      }

    </div>

  )
}
export async function getStaticProps(ctx) {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  }
}
export default Data