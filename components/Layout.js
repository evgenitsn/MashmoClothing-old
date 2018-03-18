import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const defaultTitle = `Mashmo Clothing Store`

export default ({children, title = defaultTitle}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf=8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' type="text/css" charset="UTF-8" href='https://unpkg.com/antd@3/dist/antd.min.css' />
      <link rel='stylesheet' type="text/css" charset="UTF-8" href='../static/styles/antd-override.css' />
    </Head>
    <Header/>
    <div>
      {children}
    </div>
    <Footer/>
  </div>
)