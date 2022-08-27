import baseApi from 'services/api';

import { Country } from './types';

const HomeBaseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCountry: builder.query<Country[], void>({
      query: () => '/name/peru'
    })
  })
});

export const { useGetCountryQuery } = HomeBaseApi;
