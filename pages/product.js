import Layout from '../components/Layout'

const Post = (props) => (
  <Layout>
    <h1>{props.product.name}</h1>
    <h1>{props.product.price}</h1>
  </Layout>
)

Post.getInitialProps = async function (context) {
  console.log(context)
  const { id } = context.query
  // const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  // const show = await res.json()

  // console.log(`Fetched show: ${show.name}`)

  return { product: {name: 'MashmoTestIn'+id, price: 666} }
}

export default Post