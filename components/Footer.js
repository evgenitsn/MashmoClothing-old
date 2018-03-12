import { Row, Col } from 'antd'
import Link from 'next/link'
import colors from '../theme/colors'
import {Logo} from './headerComponents'

const linksMd = { span: 24, offset: 0 }
const linksLg = { span: 2, offset: 0 }
const logoMd = { span: 24, offset: 0}
const logoLg = { span: 4, offset: 12}

export default () => (
  <div style={styles.outerDiv}>
    <div style={styles.innerDiv}>
      <Row type="flex" justify="space-around" align="middle" style={{height: '100%'}}>
        <Col md={linksMd} lg={linksLg}>
          <Link href='/'>
            <a style={styles.links}>Home</a>
          </Link>
        </Col>
        <Col md={linksMd} lg={linksLg}>
          <Link href='/contacts'>
            <a style={styles.links}>Contacts</a>
          </Link>
        </Col>
        <Col md={linksMd} lg={linksLg}>
          <Link href='/about'>
            <a style={styles.links}>About</a>
          </Link>
        </Col>
        <Col md={linksMd} lg={linksLg}>
          <Link href='/shipping'>
            <a style={styles.links}>Shipping</a>
          </Link>
        </Col>
        <Col md={logoMd} lg={logoLg}><Logo maxWidth='100%'/></Col>
      </Row>
    </div>
  </div>
)

const styles = {
  outerDiv: {
    backgroundColor: colors.black,
    height: 150,
    color: colors.white
  },
  innerDiv: {
    margin: '0 auto',
    maxWidth: 1280,
    height: '100%'
  },
  links: {
    color: colors.white,
    fontSize: '1.5em',
    width: '100%',
    display: 'block',
    textAlign: 'center'
  }
}