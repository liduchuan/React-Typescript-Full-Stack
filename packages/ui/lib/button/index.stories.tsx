import { type Meta, type StoryObj } from '@storybook/react';
import { Button } from './index.js';

const meta = {
  title: 'component/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<Meta<typeof Button>>;

export const Primary: Story = {};
