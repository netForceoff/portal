import {IComment} from '@/entities/Comment';
import {rtkApi} from '@/shared/api/query';
import i18n from '@/shared/config/i18n';

// export const addComment = createAsyncThunk<IComment, string, ThunkConfig<{ title: string, text: string }>>(
//   'article/addComment',
//   async (text, { extra, dispatch, rejectWithValue, getState }) => {
//     try {
//       const state = getState()
//       const { article, user } = state

//       if (article?.article && user?.user) {
//         const response = await extra.axiosApi.post<IComment>('/comments', {
//           articleId: article?.article?.id || '',
//           userId: user?.user?.id || '',
//           text
//         })

//         if (!response.data) {
//           throw new Error()
//         }

//         return response.data
//       }

//       throw new Error('Not found ')
//     } catch (error) {
//       console.error(error)

//       return rejectWithValue({
//         title: i18n.t('errors.loading', { ns: 'article' }),
//         text: i18n.t('errors.loading', { ns: 'article' })
//       })
//     }
//   }
// )

interface IAddCommentParams {
	articleId: string;
	userId: string;
	text: string;
}

export const articleAddingCommentApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		addComent: build.mutation<IComment, IAddCommentParams>({
			query: (params) => ({
				url: '/comments',
				method: 'POST',
				body: {
					articleId: params.articleId,
					userId: params.userId,
					text: params.text,
				},
			}),
			transformErrorResponse: (
				response: {status: string | number},
				meta,
				arg
			) => {
				return {
					title: i18n.t('errors.loading', {ns: 'article'}),
					text: i18n.t('errors.loading', {ns: 'article'}),
				};
			},
		}),
	}),
});

export const useAddComentMutation =
	articleAddingCommentApi.useAddComentMutation;
