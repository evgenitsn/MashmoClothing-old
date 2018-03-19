import { Row, Col } from 'antd'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import FeaturedCard from '../components/FeaturedCard'
import RegularCard from '../components/RegularCard'

const Index = (props) => (
  <Layout>
    <div><img style={styles.headerImage} src={'../static/Hero1.jpg'}/></div>
    <div style={styles.container}>
      <Row>
        <Col span={24}>
          <h1 style={styles.title}>FEATURED</h1>
        </Col>
      </Row>
      <Row gutter={32}>
        {props.products.map(product => (
          <Col xs={24} sm={24} md={12} lg={6} xl={6} key={product.id}>
            <FeaturedCard id={product.id} name={product.name} price={product.price}/>
          </Col>
        ))}
      </Row>
    </div>
    <div style={{backgroundColor: '#dadada'}}>
      <div style={styles.container}>
        <Row>
          <Col span={24}>
            <h1 style={styles.title}>MASHMO COLLECTION</h1>
          </Col>
        </Row>
        <Row gutter={32} style={{marginBottom: '2%'}}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <RegularCard/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <RegularCard/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <RegularCard/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <RegularCard/>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <RegularCard/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <RegularCard/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <RegularCard/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <RegularCard/>
          </Col>
        </Row>
      </div>
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  // const res = await fetch('url')
  // const data = await res.json()
  let data = [
    { id: '1', name: 'Mashmo 1', price: 21},
    { id: '2', name: 'Mashmo 2', price: 22},
    { id: '3', name: 'Mashmo 3', price: 23},
    { id: '4', name: 'Mashmo 4', price: 24},
  ]

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    products: data
  }
}

export default Index

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
  headerImage: {
    objectFit: 'cover',
    height: 350,
    width: '100%'
  }
}