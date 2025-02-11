import { z } from 'zod';
import { formatDate } from '../utils/formatDate.ts';
import { baseApi } from '../services/baseApi.ts';
import { queryNotificationHandler } from '../utils/queryNotificationHandler.ts';

const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  image: z.string(),
  url: z.string(),
  created: z.string().transform(formatDate),
});

export type Character = z.infer<typeof CharacterSchema>;

const ApiResponseSchema = z.object({
  results: z.array(CharacterSchema),
});

export const charactersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharactersByName: builder.query<Character[], string>({
      query: (name) => `character/?name=${encodeURIComponent(name)}`,
      transformResponse: (response: unknown) => {
        return ApiResponseSchema.parse(response).results;
      },
      transformErrorResponse: (response) => {
        queryNotificationHandler(response);
        return response;
      },
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `character/${id}`,
      transformResponse: (response: unknown) => {
        return CharacterSchema.parse(response);
      },
      transformErrorResponse: (response) => {
        queryNotificationHandler(response);
        return response;
      },
    }),
  }),
});

export const { useGetCharactersByNameQuery, useGetCharacterByIdQuery } = charactersApi;
