import {Logo, Navigation} from './headerComponents'
import colors from '../theme/colors'

export default () => (
  <header>
    <Logo maxWidth='70%'/>
    <Navigation/>
    <style jsx>{`
      header{
        background: ${colors.white};
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1280px;
        padding: 1% 2%;
        margin: 0 auto;
      }
      
    `}</style>
    <style global jsx>{`
      body {
        padding: 0;
        margin: 0;
        background: ${colors.white};
      }
    `}</style>
  </header>
)