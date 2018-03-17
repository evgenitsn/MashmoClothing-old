import { Card } from 'antd'
import React, { Component } from 'react'

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
    console.log(this.state)
    return (
      <Card
      onMouseEnter={() => this.hoverOn()} 
      onMouseLeave={() => this.hoverOff()}
      style={{marginBottom: '5%'}}
      hoverable
      bordered={false}
      cover={<img alt="cap" src={this.state.hover ? IMG2_URL : IMG1_URL} style={styles.image}/>}
    >
      <div style={styles.textContainer}>
        <h3 style={styles.title}>Mashmo Cap</h3>
        <h3 style={styles.price}>20lv.</h3>
      </div>
    </Card>
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