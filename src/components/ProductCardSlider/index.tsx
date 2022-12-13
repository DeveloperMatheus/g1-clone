import ProductCard, { ProductCardProps } from 'components/ProductCard'
import Slider, { SliderSettings } from 'components/Slider'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import * as S from './styles'
import { CustomArrowProps } from 'react-slick'

type ProductCardSliderProps = {
  items: ProductCardProps[]
}

function NextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props
  return (
    <FaArrowAltCircleRight
      className={className}
      style={{ ...style, display: 'block', color: '#a0a5ad' }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props
  return (
    <FaArrowAltCircleLeft
      className={className}
      style={{ ...style, display: 'block', color: '#a0a5ad' }}
      onClick={onClick}
    />
  )
}

const settings: SliderSettings = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  lazyLoad: 'ondemand',
  slidesToShow: 3.5,
  infinite: true,
  autoplay: false,
  centerMode: true,
  dots: true,
  customPaging: () => (
    <div
      style={{
        width: '13px',
        height: '13px',
        borderRadius: '50%',
        margin: '0 5px',
        border: '1px solid gray'
      }}
    ></div>
  ),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3.5
      }
    },
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2.2,
        arrows: false
      }
    },
    {
      breakpoint: 414,
      settings: {
        slidesToShow: 1.1,
        arrows: false
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
}

const ProductCardSlider = ({ items }: ProductCardSliderProps) => (
  <S.Wrapper aria-label="product-slider">
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ProductCard {...item} key={index}></ProductCard>
      ))}
    </Slider>
  </S.Wrapper>
)

export default ProductCardSlider
