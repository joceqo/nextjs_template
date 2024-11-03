import type { Meta, StoryObj } from '@storybook/react'

import Container from './container'

const meta: Meta<typeof Container> = {
  title: 'Local/Container',
  component: Container,
}

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Container className='bg-red-500'>Container</Container>,
}

export default meta