import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  stories: ['../app/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
};

export default config;