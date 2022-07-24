import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { logOut } from './auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  //   if (!result?.meta?.response?.ok) {
  //     //console.log('Ошибочка');
  //     //  let errorMessage = '';
  //     switch (result.meta.response.status) {
  //       case 400:
  //         console.log('Email or password is incorrect');
  //         break;
  //       case 401:
  //         console.log('Email or password is incorrect');
  //         break;
  //       default:
  //         console.log('Something went wrong! Try again!');
  //     }
  //     api.dispatch(logOut());
  //   }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
});
