import React, { Component } from 'react'
import Link from 'next/link'
import { Card } from 'antd'

const IMG1_URL = '../static/cap.jpg'
const IMG2_URL = '../static/cap2.png'

export default class FeaturedCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false,
      loaded: false
    }
  }

  hoverOn () {
    this.setState({ hover: true });
  }

  hoverOff () { 
    this.setState({ hover: false });    
  }

  render() {
    return (
    <Link as={`/p/${this.props.id}`} href={`/product?name=${this.props.name}`}>
      <Card
        onMouseEnter={() => this.hoverOn()} 
        onMouseLeave={() => this.hoverOff()}
        style={{marginBottom: '5%'}}
        hoverable
        bordered={false}
        cover={<img alt="cap" src={this.state.hover ? IMG2_URL : IMG1_URL} style={styles.image}/>}
      >
        <div style={styles.textContainer}>
          <h3 style={styles.title}>{this.props.name}</h3>
          <h3 style={styles.price}>{this.props.price + 'lv.'}</h3>
        </div>
      </Card>
    </Link>
    )
  }
}

const styles = {
  image: {
    padding: '10%',
    width: '100%',
    margin: '0',
    border: '1px solid #dadada',
    borderBottom: 'none'
  },
  textContainer: {
    border: '1px solid #dadada',
    padding: '24px'
  },
  title: {
    fontSize: '1.5em',
    margin: 0,
    textTransform: 'uppercase',
    fontWeight: '300'
  },
  price: {
    fontSize: '1.8em',
    color: '#777777',
    margin: 0
  }
}