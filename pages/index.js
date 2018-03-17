import { Row, Col } from 'antd'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import FeaturedCard from '../components/FeaturedCard'

export default () => (
  <Layout>
    {/*<Slider/>*/}
    <div style={{maxWidth: 1280, margin: '0 auto'}}>
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
      <Row>
        <Col span={24}>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
          <h1 style={{marginTop: 20, textAlign: 'center'}}>FEATURED</h1>
        </Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  </Layout>
)