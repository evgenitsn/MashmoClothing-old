
import Slider from 'react-slick'

export default () => {

  const settings = {
    
  }

  return ( 
    <div>
    <Slider
      dots={true}
      infinite={false}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      <div>
        <img src={'../static/hero.png'}/>
      </div>
    </Slider>
      <style jsx>{`
        div{
          height: 460px;
        }
        img{
          margin: 0 auto;
          background-size: contain;
          width: 100%;
        }
      `}</style>
    </div>
  )
}