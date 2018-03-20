import { Row, Col } from 'antd'
import Layout from '../components/Layout'

const Post = (props) => (
  <Layout>
    <div style={styles.container}>
      <h1>{props.product.name}</h1>
      <h1>{props.product.price}</h1>
      <Row>
        <Col span={8} style={{border: '1px solid green', width: '33%', padding: '5%'}}>
          <img src={'../static/cap.jpg'} width='100%'/>
        </Col>
        <Col span={16} style={{border: '1px solid blue', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <h1 style={styles.title}>DETAILS</h1>
          <h2>Title / Name</h2>
          <h2>Price</h2>
          <h3>In Stock / Out of Stock</h3>
          <h4>Size</h4>
          <select name="Select Size">
            <option>XS</option>
            <option>S</option>
            <option>M</option>
          </select>
          <h4>Quantity</h4>
          <input type="number" max="5" min="1"/>
          <button>Add to Cart</button>
        </Col>
      </Row>
    </div>
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

const styles = {
  container: {
    maxWidth: 1280, 
    margin: '0 auto',
    marginBottom: '5%'
  },
  title: {
    marginTop: '2%',
    marginBottom: '5%',
    textAlign: 'center',
    fontSize: '5em',
    fontFamily: 'Regensburg'
  },
}