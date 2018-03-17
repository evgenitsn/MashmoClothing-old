import { Row, Col } from 'antd'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import FeaturedCard from '../components/FeaturedCard'
import RegularCard from '../components/RegularCard'

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
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <FeaturedCard/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <FeaturedCard/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <FeaturedCard/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <FeaturedCard/>
        </Col>
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