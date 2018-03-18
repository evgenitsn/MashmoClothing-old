import { Row, Col } from 'antd'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import FeaturedCard from '../components/FeaturedCard'
import RegularCard from '../components/RegularCard'

function getProducts () {
  return [
    { id: 'mashmo1', title: 'Mashmo 1234324', price: 21},
    { id: 'mashmo2', title: 'Mashmo 223432', price: 22},
    { id: 'mashmo3', title: 'Mashmo 3324324', price: 23},
    { id: 'mashmo4', title: 'Mashmo 443242', price: 24},
  ]
}

export default () => (
  <Layout>
    <div><img style={styles.headerImage} src={'../static/Hero1.jpg'}/></div>
    <div style={styles.container}>
      <Row>
        <Col span={24}>
          <h1 style={styles.title}>FEATURED</h1>
        </Col>
      </Row>
      <Row gutter={32}>
        {getProducts().map(product => (
          <Col xs={24} sm={24} md={12} lg={6} xl={6} key={product.id}>
            <FeaturedCard id={product.id} title={product.title} price={product.price}/>
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