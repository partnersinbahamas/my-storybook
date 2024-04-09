import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../Avatar/Avatar';
import me from '../../images/me.png';

/**
 * Avatar conponent with user picture and fullname.
 */

const meta = {
  title: 'Athomic/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    firstName: 'Steve',
    lastName: 'Jobs',
  },
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    backgroundColor: { control: 'color' },
    badged: { control: 'boolean' },
    badgeContent: { control: 'text' },
    src: { control: 'text' },
    onClick: { control: 'changed' },
    stile: { control: 'inline-radio', options: ['primary'] },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    status: {
      control: 'inline-radio',
      options: ['online', 'default', 'not-here', 'busy', 'sleep', 'primary'],
    },
  }
} satisfies Meta<typeof Avatar>;
export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    size: 'medium',
  }
};
export const Primary: TStory = {
  args: {
    size: 'medium',
    stile: 'primary',
    status: 'primary',
    badged: true,
  }
}
export const Badged: TStory = {
  args: {
    size: 'medium',
    badged: true,
  }
};
export const BackgroundImage: TStory = {
  args: {
    size: 'large',
    src: me,
  }
};