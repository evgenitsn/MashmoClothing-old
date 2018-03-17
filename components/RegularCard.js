import { Card } from 'antd'

export default () => (
  <Card
    style={{marginBottom: '5%'}}
    hoverable
    bordered={false}
    cover={<img alt="cap" src="../static/cap.jpg" style={styles.image}/>}
  >
    <div style={styles.textContainer}>
      <h3 style={styles.title}>Mashmo Cap</h3>
      <h3 style={styles.price}>20lv.</h3>
    </div>
  </Card>
)

const styles = {
  image: {
    padding: '10%',
    width: '80%',
    margin: '0 auto',
  },
  textContainer: {
    marginBottom: -10,
    marginTop: -10,
    padding: 24
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