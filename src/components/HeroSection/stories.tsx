import { Story, Meta } from '@storybook/react/types-6-0'
import HeroSection from '.'

export default {
  title: 'HeroSection',
  component: HeroSection
} as Meta

export const Basic: Story = (args) => <HeroSection {...args} />
