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
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <Header/>
    <div>
      {children}
    </div>
    <Footer/>
  </div>
)