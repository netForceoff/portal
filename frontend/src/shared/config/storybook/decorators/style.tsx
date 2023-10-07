import {Story} from '@storybook/react';
import '@/app/styles/index.scss';

const StyleDecorator = (Component: Story): JSX.Element => <Component />;

export default StyleDecorator;
