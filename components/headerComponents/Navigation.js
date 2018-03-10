import Link from 'next/link'

export default () => (
  <nav>
    <Link href='/about'><a>About</a></Link>
    <Link href='/contact'><a>Contact</a></Link>
    <style jsx>{`
      a {
        margin-left: 20px;
      }
    `}</style>
  </nav>
)