const time = ({ time }) => {
  return (
    <div className="">
      <h3 className="2xl flex justify-center"> Here is Time {time}</h3>
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = new Date().toISOString()


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      time: res,
    },
    revalidate: 1,
  }
}





export default time;