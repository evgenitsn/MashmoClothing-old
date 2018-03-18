import Layout from '../components/Layout'

export default (props) => {
  console.log(props)
  return (
    <Layout>
      <h1>{props.url.query.title}</h1>
    </Layout>
  )
}