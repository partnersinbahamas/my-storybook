import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';

import { ConnectOnChange } from '../../../.storybook/decorators';
import { story } from '../utils/variables/story';
import { Input } from './Input';

const meta = {
  title: 'Athomic/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    title: story.title,
    stile: story.stile,
    value: story.stringValue,
    error: story.stringError,
    disabled: story.disabled,
    type: story.inputType,
    onChange: story.onChange,
    className: story.className,
  },
  parameters: {
    docs: {
      description: {
        component: `
Please to style your custom input component use the mockup bellow.
### Guide styles
  .scss

    .className {
      &-heading {};
      &-label {};
      &-input {};
      &-error {};
      &-error-message {};
    };

.module.scss

    .className {
      [data-name='heading'] {};
      [data-name='label'] {};
      [data-name='input'] {    
        &[data-error='true'] {};
      };

      [data-name='error-message'] {};
    };
`,
      },
    },
  },
  decorators: [ConnectOnChange],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: 'Input',
    value: 'value',
  },
};

export const Primary: Story = {
  args: {
    stile: 'primary',
    value: 'Primary',
    title: 'Input Primary',
  },
};

export const Error: Story = {
  args: {
    title: 'Handled error',
    error: '...pzzz..pz',
  },
};
export const Play: Story = {
  args: {
    title: 'Play function',
  },
  play: async context => {
    const canvas = within(context.canvasElement);

    const inputElement = canvas.getByRole('textbox');
    await userEvent.type(inputElement, ' play fn', { delay: 100 });
  },
};
