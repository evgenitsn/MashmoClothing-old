import {Logo, Navigation} from './headerComponents'
import colors from '../theme/colors'

export default () => (
  <header>
    <Logo/>
    <Navigation/>
    <style jsx>{`
      header{
        background: ${colors.headerBackgroundColor};
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1350px;
        padding: 1% 2%;
      }
      
    `}</style>
    <style global jsx>{`
      body {
        padding: 0;
        margin: 0;
        background: ${colors.mainBackgroundColor};
      }
    `}</style>
  </header>
)