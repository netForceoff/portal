export enum AppRoutes {
	ABOUT = 'about',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article_details',
	NOT_FOUND = 'notFound',
	MAIN = '/',
	PROFILE = 'profile',
}

export const getRouteAbout = () => '/about';
export const getRouteMain = () => '/';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = (id: string) => `/articles/${id}`;
