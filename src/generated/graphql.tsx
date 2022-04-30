import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  Reviewerid?: Maybe<Scalars['String']>;
  authorfile: Files;
  authorfileId: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  original: Scalars['String'];
  reason?: Maybe<Scalars['String']>;
  revised?: Maybe<Scalars['String']>;
};

export type CommentInput = {
  Reviewerid: Scalars['String'];
  authorfileId: Scalars['Int'];
  comment: Scalars['String'];
  id: Scalars['Int'];
  original: Scalars['String'];
  reason: Scalars['String'];
  revised: Scalars['String'];
};

export type Files = {
  __typename?: 'Files';
  author: User;
  authorId: Scalars['Int'];
  comment?: Maybe<Array<Comment>>;
  id: Scalars['Int'];
  location: Scalars['String'];
  size: Scalars['String'];
  title: Scalars['String'];
};

export type FilesInput = {
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['String'];
  size: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Scalars['Boolean'];
  addFiles: Scalars['Boolean'];
  addUser: Scalars['Boolean'];
};


export type MutationAddCommentArgs = {
  Commentdata: CommentInput;
};


export type MutationAddFilesArgs = {
  Filesdata: FilesInput;
};


export type MutationAddUserArgs = {
  Userdata: UserInput;
};

export type Query = {
  __typename?: 'Query';
  CommentByID?: Maybe<Array<Comment>>;
  UserByEmail?: Maybe<User>;
  fetchComment?: Maybe<Array<Comment>>;
  fetchFiles?: Maybe<Array<Files>>;
  fetchUser?: Maybe<Array<User>>;
};


export type QueryCommentByIdArgs = {
  authorfileId: Scalars['Float'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Files>>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role: Role;
  version?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role: Role;
  version?: InputMaybe<Scalars['String']>;
};

export type MutationMutationVariables = Exact<{
  commentdata: CommentInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', addComment: boolean };

export type AddFilesMutationVariables = Exact<{
  filesdata: FilesInput;
}>;


export type AddFilesMutation = { __typename?: 'Mutation', addFiles: boolean };

export type AdduserMutationVariables = Exact<{
  userdata: UserInput;
}>;


export type AdduserMutation = { __typename?: 'Mutation', addUser: boolean };

export type CommentByIdQueryVariables = Exact<{
  authorfileId: Scalars['Float'];
}>;


export type CommentByIdQuery = { __typename?: 'Query', CommentByID?: Array<{ __typename?: 'Comment', id: number, original: string, revised?: string | null, reason?: string | null, comment?: string | null, Reviewerid?: string | null }> | null };

export type FetchuserQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchuserQuery = { __typename?: 'Query', fetchUser?: Array<{ __typename?: 'User', email?: string | null, name?: string | null, version?: string | null, files?: Array<{ __typename?: 'Files', id: number, title: string, size: string }> | null }> | null };

export type UserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserByEmailQuery = { __typename?: 'Query', UserByEmail?: { __typename?: 'User', id: number, name?: string | null, email?: string | null, version?: string | null, password?: string | null, files?: Array<{ __typename?: 'Files', id: number, title: string, location: string, size: string, comment?: Array<{ __typename?: 'Comment', id: number, original: string, revised?: string | null, comment?: string | null, Reviewerid?: string | null }> | null }> | null } | null };


export const MutationDocument = gql`
    mutation Mutation($commentdata: CommentInput!) {
  addComment(Commentdata: $commentdata)
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      commentdata: // value for 'commentdata'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const AddFilesDocument = gql`
    mutation AddFiles($filesdata: FilesInput!) {
  addFiles(Filesdata: $filesdata)
}
    `;
export type AddFilesMutationFn = Apollo.MutationFunction<AddFilesMutation, AddFilesMutationVariables>;

/**
 * __useAddFilesMutation__
 *
 * To run a mutation, you first call `useAddFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFilesMutation, { data, loading, error }] = useAddFilesMutation({
 *   variables: {
 *      filesdata: // value for 'filesdata'
 *   },
 * });
 */
export function useAddFilesMutation(baseOptions?: Apollo.MutationHookOptions<AddFilesMutation, AddFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFilesMutation, AddFilesMutationVariables>(AddFilesDocument, options);
      }
export type AddFilesMutationHookResult = ReturnType<typeof useAddFilesMutation>;
export type AddFilesMutationResult = Apollo.MutationResult<AddFilesMutation>;
export type AddFilesMutationOptions = Apollo.BaseMutationOptions<AddFilesMutation, AddFilesMutationVariables>;
export const AdduserDocument = gql`
    mutation Adduser($userdata: userInput!) {
  addUser(Userdata: $userdata)
}
    `;
export type AdduserMutationFn = Apollo.MutationFunction<AdduserMutation, AdduserMutationVariables>;

/**
 * __useAdduserMutation__
 *
 * To run a mutation, you first call `useAdduserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdduserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adduserMutation, { data, loading, error }] = useAdduserMutation({
 *   variables: {
 *      userdata: // value for 'userdata'
 *   },
 * });
 */
export function useAdduserMutation(baseOptions?: Apollo.MutationHookOptions<AdduserMutation, AdduserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdduserMutation, AdduserMutationVariables>(AdduserDocument, options);
      }
export type AdduserMutationHookResult = ReturnType<typeof useAdduserMutation>;
export type AdduserMutationResult = Apollo.MutationResult<AdduserMutation>;
export type AdduserMutationOptions = Apollo.BaseMutationOptions<AdduserMutation, AdduserMutationVariables>;
export const CommentByIdDocument = gql`
    query CommentByID($authorfileId: Float!) {
  CommentByID(authorfileId: $authorfileId) {
    id
    original
    revised
    reason
    comment
    Reviewerid
  }
}
    `;

/**
 * __useCommentByIdQuery__
 *
 * To run a query within a React component, call `useCommentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentByIdQuery({
 *   variables: {
 *      authorfileId: // value for 'authorfileId'
 *   },
 * });
 */
export function useCommentByIdQuery(baseOptions: Apollo.QueryHookOptions<CommentByIdQuery, CommentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentByIdQuery, CommentByIdQueryVariables>(CommentByIdDocument, options);
      }
export function useCommentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentByIdQuery, CommentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentByIdQuery, CommentByIdQueryVariables>(CommentByIdDocument, options);
        }
export type CommentByIdQueryHookResult = ReturnType<typeof useCommentByIdQuery>;
export type CommentByIdLazyQueryHookResult = ReturnType<typeof useCommentByIdLazyQuery>;
export type CommentByIdQueryResult = Apollo.QueryResult<CommentByIdQuery, CommentByIdQueryVariables>;
export const FetchuserDocument = gql`
    query Fetchuser {
  fetchUser {
    email
    name
    version
    files {
      id
      title
      size
    }
  }
}
    `;

/**
 * __useFetchuserQuery__
 *
 * To run a query within a React component, call `useFetchuserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchuserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchuserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchuserQuery(baseOptions?: Apollo.QueryHookOptions<FetchuserQuery, FetchuserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchuserQuery, FetchuserQueryVariables>(FetchuserDocument, options);
      }
export function useFetchuserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchuserQuery, FetchuserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchuserQuery, FetchuserQueryVariables>(FetchuserDocument, options);
        }
export type FetchuserQueryHookResult = ReturnType<typeof useFetchuserQuery>;
export type FetchuserLazyQueryHookResult = ReturnType<typeof useFetchuserLazyQuery>;
export type FetchuserQueryResult = Apollo.QueryResult<FetchuserQuery, FetchuserQueryVariables>;
export const UserByEmailDocument = gql`
    query UserByEmail($email: String!) {
  UserByEmail(email: $email) {
    id
    name
    email
    version
    password
    files {
      id
      title
      location
      size
      comment {
        id
        original
        revised
        comment
        Reviewerid
      }
    }
  }
}
    `;

/**
 * __useUserByEmailQuery__
 *
 * To run a query within a React component, call `useUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByEmailQuery, UserByEmailQueryVariables>(UserByEmailDocument, options);
      }
export function useUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByEmailQuery, UserByEmailQueryVariables>(UserByEmailDocument, options);
        }
export type UserByEmailQueryHookResult = ReturnType<typeof useUserByEmailQuery>;
export type UserByEmailLazyQueryHookResult = ReturnType<typeof useUserByEmailLazyQuery>;
export type UserByEmailQueryResult = Apollo.QueryResult<UserByEmailQuery, UserByEmailQueryVariables>;