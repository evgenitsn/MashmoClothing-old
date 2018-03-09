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
    </Head>
    <Header/>
    {children}
    <Footer/>
  </div>
)