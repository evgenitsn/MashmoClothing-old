import Link from 'next/link'

export default () => (
  <Link href="/">
    <a>
      <img src='/static/header-logo.png'/>
      <style jsx>{`
        img {
          max-width: 70%;
        }
      `}</style>
    </a>
  </Link>
)