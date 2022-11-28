import React from 'react';
import { Button, ButtonProps } from './button';
import { Meta, Story } from '@storybook/react';
export default {
  component: Button,
  title: 'common-ui/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Press me',
};
