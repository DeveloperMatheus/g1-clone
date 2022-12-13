import ReactSlickSlider, { Settings } from 'react-slick'
import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <ReactSlickSlider {...settings}>{children}</ReactSlickSlider>
  </S.Wrapper>
)

export default Slider
