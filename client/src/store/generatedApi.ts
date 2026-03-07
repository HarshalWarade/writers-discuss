import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postApiUsersRegister: build.mutation<
      PostApiUsersRegisterApiResponse,
      PostApiUsersRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/register`,
        method: "POST",
        body: queryArg.registerUserInput,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as writersApi };
export type PostApiUsersRegisterApiResponse =
  /** status 201 User successfully registered */ {
    message?: string;
    user?: User;
  };
export type PostApiUsersRegisterApiArg = {
  registerUserInput: RegisterUserInput;
};
export type User = {
  _id?: string;
  username?: string;
  email?: string;
  bio?: string;
  pagesBalance?: number;
  totalPagesEarned?: number;
  rank?:
    | "Blank Page"
    | "Beginner"
    | "Wordsmith"
    | "Storyteller"
    | "Master Weaver"
    | "Elite";
  createdAt?: string;
  updatedAt?: string;
};
export type RegisterUserInput = {
  username: string;
  email: string;
  password: string;
  bio?: string;
};
export const { usePostApiUsersRegisterMutation } = injectedRtkApi;
