import {ComponentStory} from '@storybook/react';

import ArticlePage from './ArticlePage';

import StoreDecorator from '@/shared/config/storybook/decorators/store';

const article = {
	id: '1',
	title: 'test article title',
	subtitle: 'test article subtitle',
	img: '',
	views: 10,
	createdAt: '21.01.2011',
	type: 'IT',
	blocks: [],
};

const comments = [
	{
		id: '1',
		text: 'testComment',
		articleId: '1',
		userId: '1',
		avatar: '',
	},
];

const ratings = [
	{
		rate: 4,
		feedback: 'Feedback',
	},
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'pages/ArticlePage',
	component: ArticlePage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	decorators: [StoreDecorator({user: {user: {id: '1', username: 'Name'}}})],
	parameters: {
		fetchMock: {
			overwriteRoutes: false,
			mocks: [
				{
					// The "matcher" determines if this
					// mock should respond to the current
					// call to fetch().
					matcher: {
						name: 'articleComments',
						url: 'http://localhost:2000/comments',
						query: {
							_expand: 'user',
						},
					},
					// If the "matcher" matches the current
					// fetch() call, the fetch response is
					// built using this "response".
					response: {
						status: 200,
						body: comments,
					},
				},
				{
					// The "matcher" determines if this
					// mock should respond to the current
					// call to fetch().
					matcher: {
						name: 'articlePage',
						url: 'http://localhost:2000/articles/',
					},
					// If the "matcher" matches the current
					// fetch() call, the fetch response is
					// built using this "response".
					response: {
						status: 200,
						body: article,
					},
				},
				{
					// The "matcher" determines if this
					// mock should respond to the current
					// call to fetch().
					matcher: {
						name: 'articleRatings',
						url: 'http://localhost:2000/article-ratings',
						query: {
							userId: '1',
							articleId: '',
						},
					},
					// If the "matcher" matches the current
					// fetch() call, the fetch response is
					// built using this "response".
					response: {
						status: 200,
						body: ratings,
					},
				},
			],
		},
	},
};

const Template: ComponentStory<typeof ArticlePage> = (args) => (
	<ArticlePage {...args} />
);

export const Preview = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Preview.args = {};
