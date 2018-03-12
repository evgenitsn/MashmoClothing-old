import Layout from '../components/Layout'
import Slider from '../components/Slider'
import { Row, Col } from 'antd'

export default () => (
  <Layout>
    <Slider/>
    <div style={{maxWidth: 1280, margin: '0 auto'}}>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  </Layout>
)