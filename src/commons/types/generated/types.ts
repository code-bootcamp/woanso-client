export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  boardImg: Array<IBoardImg>;
  content: Scalars['String'];
  dislike: Scalars['Int'];
  id: Scalars['String'];
  like: Scalars['Int'];
  title: Scalars['String'];
  user: IUser;
};

export type IBoardImg = {
  __typename?: 'BoardImg';
  board: IBoard;
  boardImgID: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type IComic = {
  __typename?: 'Comic';
  ISBN: Scalars['String'];
  author: Scalars['String'];
  comicId?: Maybe<Scalars['String']>;
  comicRating: IComicRating;
  deliveryFee: Scalars['Int'];
  description: Scalars['String'];
  illustrator: Scalars['String'];
  isAvailable: Scalars['Boolean'];
  publisher: Scalars['String'];
  rentalFee: Scalars['Int'];
  title: Scalars['String'];
  totalBooks: Scalars['Int'];
};

export type IComicRating = {
  __typename?: 'ComicRating';
  comicRating: Scalars['Float'];
  comicRatingId: Scalars['String'];
  totalRating: Scalars['Int'];
};

export type ICreateBoardInput = {
  boardImg?: InputMaybe<Array<Scalars['String']>>;
  contents?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ICreateComicInput = {
  ISBN: Scalars['String'];
  author: Scalars['String'];
  deliveryFee: Scalars['Int'];
  description: Scalars['String'];
  illustrator: Scalars['String'];
  isAvailable: Scalars['Boolean'];
  publisher: Scalars['String'];
  rentalFee: Scalars['Int'];
  stock: Scalars['Int'];
  title: Scalars['String'];
  totalBooks: Scalars['Int'];
  url: Array<Scalars['String']>;
};

export type ICreateReviewInput = {
  comicId: Scalars['String'];
  content: Scalars['String'];
  rating: Scalars['Float'];
  userId: Scalars['String'];
};

export type ICreateUrlInput = {
  isMain: Scalars['Boolean'];
  url: Array<Scalars['String']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  authToken: Scalars['String'];
  blockUser: Scalars['Boolean'];
  createBoard: IBoard;
  createComic: IComic;
  createReview: IReview;
  deleteBoard: Scalars['Boolean'];
  deleteComic: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreComic: Scalars['Boolean'];
  restoreReview: Scalars['Boolean'];
  sendToken: Scalars['String'];
  signUp: IUser;
  signUpAdmin: IUser;
  updateBoard: IBoard;
  updateComic: IComic;
  updatePassword: Scalars['String'];
  updateUser: IUser;
  uploadFile: Array<Scalars['String']>;
  uploadOneFile: Scalars['String'];
};


export type IMutationAuthTokenArgs = {
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationBlockUserArgs = {
  id: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateComicArgs = {
  createComicInput: ICreateComicInput;
};


export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
};


export type IMutationDeleteBoardArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteComicArgs = {
  comicId: Scalars['ID'];
};


export type IMutationDeleteReviewArgs = {
  reviewId: Scalars['ID'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreComicArgs = {
  comicId: Scalars['ID'];
};


export type IMutationRestoreReviewArgs = {
  reviewId: Scalars['ID'];
};


export type IMutationSendTokenArgs = {
  phone: Scalars['String'];
};


export type IMutationSignUpArgs = {
  email: Scalars['String'];
  interest: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationSignUpAdminArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  id: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateComicArgs = {
  comicId: Scalars['String'];
  createUrlInput: ICreateUrlInput;
  updateComicInput: IUpdateComicInput;
};


export type IMutationUpdatePasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  email: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadOneFileArgs = {
  file: Scalars['Upload'];
};

export type IQuery = {
  __typename?: 'Query';
  authUser: Scalars['String'];
  availableComic: Array<Scalars['Int']>;
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchComic: IComic;
  fetchComics: Array<IComic>;
  fetchReview: IReview;
  fetchReviews: Array<IReview>;
  fetchUser: IUser;
  fetchUserBoards: Array<IBoard>;
  fetchUsers: Array<IUser>;
  findEmail: IUser;
  searchComics: Array<IComic>;
  searchUsers: Array<IUser>;
};


export type IQueryFetchBoardArgs = {
  id: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchComicArgs = {
  comicId: Scalars['String'];
};


export type IQueryFetchReviewArgs = {
  reviewId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryFindEmailArgs = {
  phone: Scalars['String'];
};


export type IQuerySearchComicsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQuerySearchUsersArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type IReview = {
  __typename?: 'Review';
  comic: IComic;
  content: Scalars['String'];
  like: Scalars['Int'];
  reviewId: Scalars['String'];
  user: IUser;
};

export enum IUser_Interest_Enum {
  Action = 'action',
  Drama = 'drama',
  Fantasy = 'fantasy',
  Horror = 'horror',
  Romance = 'romance',
  School = 'school'
}

export enum IUser_Role_Enum {
  Admin = 'Admin',
  User = 'User'
}

export type IUpdateBoardInput = {
  boardImg?: InputMaybe<Array<Scalars['String']>>;
  contents?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateComicInput = {
  ISBN?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  deliveryFee?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  illustrator?: InputMaybe<Scalars['String']>;
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  publisher?: InputMaybe<Scalars['String']>;
  rentalFee?: InputMaybe<Scalars['Int']>;
  stock?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  totalBooks?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  interest?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  balance: Scalars['Int'];
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interest: IUser_Interest_Enum;
  nickname: Scalars['String'];
  phone: Scalars['String'];
  role: IUser_Role_Enum;
};
