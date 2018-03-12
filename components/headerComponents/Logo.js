import Link from 'next/link'

export default ({maxWidth}) => (
  <Link href="/">
    <a>
      <img src='/static/header-logo.png' style={{maxWidth: maxWidth}}/>
    </a>
  </Link>
)