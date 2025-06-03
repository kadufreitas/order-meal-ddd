/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { type AxiosRequestConfig, type AxiosError } from 'axios';
// import type { User } from 'src/domain/User';

// const API_URL: string = process.env.REACT_APP_API_URL || '';
const API_URL: string = import.meta.env.VITE_API_URL || '';

const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export type Service = {
  get: <R = any>(url: string, options?: Options) => Promise<R>;
  post: <R = any>(url: string, data?: any, options?: Options) => Promise<R>;
  del: <R = any>(url: string, options?: Options) => Promise<R>;
  put: <R = any>(url: string, data?: any, options?: Options) => Promise<R>;
};

type Options = AxiosRequestConfig;

type ApiError = AxiosError<
  Error & {
    errors: object;
  },
  Response
>;

type SuccessResponse = object;

type FailureResponse = {
  errors: object;
};

type Response = SuccessResponse | FailureResponse;

const wrapErrorExtraction =
  <T extends (...args: any[]) => Promise<any>>(request: T) =>
  async (...args: Parameters<T>): Promise<any> => {
    try {
      const { data } = await request(...args);
      return data;
    } catch (error) {
      throw extractErrors(error as ApiError);
    }
  };

const post = wrapErrorExtraction(axios.post);
const get = wrapErrorExtraction(axios.get);
const del = wrapErrorExtraction(axios.delete);
const put = wrapErrorExtraction(axios.put);

// export const authGet: AuthRequestWithoutData = (url, user, options = {}) =>
//   get(url, withUserToken(options, user));

// export const authPost: AuthRequestWithData = (url, user, data = {}, options = {}) =>
//   post(url, data, withUserToken(options, user));

// export const authDel: AuthRequestWithoutData = (url, user, options = {}) =>
//   del(url, withUserToken(options, user));

// export const authPut: AuthRequestWithData = (url, user, data = {}, options = {}) =>
//   put(url, data, withUserToken(options, user));

const extractErrors = (requestError: ApiError) => {
  const error = new Error() as Error & {
    errors: object;
  };

  if (!requestError.response) {
    return requestError;
  }

  error.errors = requestError.response.data.errors;

  return error;
};

export const apiService: Service = {
  get,
  post,
  del,
  put,
};

// const withUserToken = (options: Options, user?: User): Options => {
//   if (!user) {
//     return options;
//   }

//   return {
//     ...options,
//     headers: {
//       ...options.headers,
//       Authorization: `Token ${user.token}`,
//     },
//   };
// };
