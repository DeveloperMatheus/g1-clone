import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HeroSection from './index'

describe('<HeroSection />', () => {
  it('should render the HeroSection', () => {
    const { container } = renderWithTheme(<HeroSection />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
