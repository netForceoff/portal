import {EntityState} from '@reduxjs/toolkit';

import {ServerStatus, ServerError} from '@/shared/types/server';

export interface ArticleSchema {
	error?: {
		title: string;
		text: string;
	};
	status: ServerStatus;
	article?: IArticle;
}

export enum IArticleBlockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
}

export interface IArticleBlockBase {
	id: string;
	type: IArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
	type: IArticleBlockType.CODE;
	code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
	type: IArticleBlockType.IMAGE;
	src: string;
	title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
	type: IArticleBlockType.TEXT;
	paragraphs: string[];
	title?: string;
}

export type IArticleBlock =
	| IArticleCodeBlock
	| IArticleImageBlock
	| IArticleTextBlock;

export enum IArticleType {
	IT = 'IT',
	SCIENCE = 'SCIENCE',
	ECONOMICS = 'ECONOMICS',
}

export interface IArticle {
	id: string;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: IArticleType[];
	blocks: IArticleBlock[];
}

export type Order = 'asc' | 'desc';

export type SortBy = 'views' | 'title' | 'createdAt';

export interface ArticleListSchema extends EntityState<IArticle> {
	error?: ServerError;
	status: ServerStatus;
	view?: 'table' | 'list';
	page: number;
	limit: number;
	hasMore: boolean;
	order: Order;
	sort: SortBy;
	search: string;
}
