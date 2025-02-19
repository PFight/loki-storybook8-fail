/** @type { import('@storybook/react').Preview } */
import 'loki/configure-react';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
