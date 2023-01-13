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
  DateTime: any;
  Upload: any;
};

export type IAdmin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
};

export type IBoard = {
  __typename?: 'Board';
  boardImg: Array<IBoardImg>;
  content: Scalars['String'];
  dislike: Scalars['Int'];
  id: Scalars['String'];
  like: Scalars['Int'];
  user: IUser;
};

export type IBoardImg = {
  __typename?: 'BoardImg';
  board: IBoard;
  boardImgID: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export enum IComic_Category_Enum {
  Action = 'action',
  Drama = 'drama',
  Fantasy = 'fantasy',
  Horror = 'horror',
  Romance = 'romance',
  School = 'school'
}

export type IComic = {
  __typename?: 'Comic';
  ISBN: Scalars['String'];
  author: Scalars['String'];
  category: IComic_Category_Enum;
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
  wishListCount: Scalars['Int'];
};

export type IComicImg = {
  __typename?: 'ComicImg';
  comic: IComic;
  id: Scalars['String'];
  isMain: Scalars['Boolean'];
  url: Scalars['String'];
};

export type IComicRating = {
  __typename?: 'ComicRating';
  comicRating: Scalars['Float'];
  comicRatingId: Scalars['String'];
  totalRating: Scalars['Int'];
};

export type IComment = {
  __typename?: 'Comment';
  board: IBoard;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  user: IUser;
};

export type ICreateBoardInput = {
  boardImg?: InputMaybe<Array<Scalars['String']>>;
  content?: InputMaybe<Scalars['String']>;
};

export type ICreateComicInput = {
  ISBN: Scalars['String'];
  author: Scalars['String'];
  category: Scalars['String'];
  deliveryFee: Scalars['Int'];
  description: Scalars['String'];
  illustrator: Scalars['String'];
  publisher: Scalars['String'];
  rentalFee: Scalars['Int'];
  stock: Scalars['Int'];
  title: Scalars['String'];
  totalBooks: Scalars['Int'];
  url: Array<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
};

export type ICreateCommentInput = {
  boardId: Scalars['String'];
  content: Scalars['String'];
  userId: Scalars['String'];
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

export type ICreateWishInput = {
  comicId: Scalars['String'];
  userId: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  adminLogin: Scalars['String'];
  authToken: Scalars['String'];
  authTokenForAdmin: Scalars['String'];
  blockUserForAdmin: Scalars['Boolean'];
  cancelPointTransaction: IPointTransaction;
  createBoard: IBoard;
  createComic: IComic;
  createComment: IComment;
  createPointTransaction: IPointTransaction;
  createReview: IReview;
  createWishlist: Scalars['Boolean'];
  deleteAdmin: Scalars['Boolean'];
  deleteBoard: Scalars['Boolean'];
  deleteComic: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  dislikeBoard: Scalars['String'];
  likeBoard: Scalars['String'];
  likeReviewBoard: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  logoutForAdmin: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreAccessTokenForAdmin: Scalars['String'];
  restoreComic: Scalars['Boolean'];
  restoreReview: Scalars['Boolean'];
  sendToken: Scalars['String'];
  signUp: IUser;
  signUpForAdmin: IAdmin;
  unblockUserForAdmin: Scalars['Boolean'];
  updateAdmin: IAdmin;
  updateBoard: IBoard;
  updateComic: IComic;
  updatePassword: Scalars['String'];
  updateUser: IUser;
  uploadComicImg: Array<IComicImg>;
  uploadFile: Array<Scalars['String']>;
  uploadOneFile: Scalars['String'];
};


export type IMutationAdminLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationAuthTokenArgs = {
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationAuthTokenForAdminArgs = {
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationBlockUserForAdminArgs = {
  email: Scalars['String'];
};


export type IMutationCancelPointTransactionArgs = {
  comicId: Scalars['String'];
  impUid: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateComicArgs = {
  createComicInput: ICreateComicInput;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreatePointTransactionArgs = {
  amount: Scalars['Int'];
  comicId: Scalars['String'];
  impUid: Scalars['String'];
};


export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
};


export type IMutationCreateWishlistArgs = {
  createWishInput: ICreateWishInput;
};


export type IMutationDeleteAdminArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteComicArgs = {
  comicId: Scalars['ID'];
};


export type IMutationDeleteCommentArgs = {
  ID: Scalars['String'];
};


export type IMutationDeleteReviewArgs = {
  reviewId: Scalars['ID'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationDislikeBoardArgs = {
  id: Scalars['String'];
};


export type IMutationLikeBoardArgs = {
  id: Scalars['String'];
};


export type IMutationLikeReviewBoardArgs = {
  reviewId: Scalars['String'];
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


export type IMutationSignUpForAdminArgs = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationUnblockUserForAdminArgs = {
  email: Scalars['String'];
};


export type IMutationUpdateAdminArgs = {
  email: Scalars['String'];
  updateAdminInput: IUpdateAdminInput;
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
  phone: Scalars['String'];
  updateUserPwdInput: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  email: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadComicImgArgs = {
  comicId: Scalars['String'];
  url: Array<Scalars['String']>;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadOneFileArgs = {
  file: Scalars['Upload'];
};

export enum IPoint_Transaction_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPointTransaction = {
  __typename?: 'PointTransaction';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  authAdmin: Scalars['String'];
  authUser: Scalars['String'];
  availableComicsForAdmin: Array<Scalars['Int']>;
  fetchAllCrewBoardImages: Array<IComicImg>;
  fetchBlockedUsersForAdmin: Array<IUser>;
  fetchBoard: IBoard;
  fetchBoardImage: Array<IComicImg>;
  fetchBoards: Array<IBoard>;
  fetchBoardsByUser: Array<IBoard>;
  fetchComic: IComic;
  fetchComics: Array<IComic>;
  fetchComment: IComment;
  fetchComments: Array<IComment>;
  fetchLoginUserForAdmin: IUser;
  fetchReview: IReview;
  fetchReviews: Array<IReview>;
  fetchUser: IUser;
  fetchUserLoggedIn: IUser;
  fetchUsersForAdmin: Array<IUser>;
  fetchWishlist: Array<IWishlist>;
  findEmail: IUser;
  findEmailForAdmin: IAdmin;
  searchComics: Array<IComic>;
  searchUsersForAdmin: Array<IUser>;
};


export type IQueryFetchBoardArgs = {
  id: Scalars['String'];
};


export type IQueryFetchBoardImageArgs = {
  comicId: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchComicArgs = {
  comicId: Scalars['String'];
};


export type IQueryFetchCommentArgs = {
  ID: Scalars['String'];
};

export type IQueryFetchCommentsArgs = {
  ID: Scalars['String'];
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


export type IQueryFindEmailForAdminArgs = {
  email: Scalars['String'];
};


export type IQuerySearchComicsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQuerySearchUsersForAdminArgs = {
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

export type IUpdateAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IUpdateBoardInput = {
  boardImg?: InputMaybe<Array<Scalars['String']>>;
  content?: InputMaybe<Scalars['String']>;
};

export type IUpdateComicInput = {
  ISBN?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  deliveryFee?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  illustrator?: InputMaybe<Scalars['String']>;
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
  userImg?: Maybe<IUserImg>;
  pointTransaction: any;
};

export type IUserImg = {
  __typename?: 'UserImg';
  id: Scalars['String'];
  isMain: Scalars['Boolean'];
  url: Scalars['String'];
};

export type IWishlist = {
  __typename?: 'Wishlist';
  comic?: Maybe<IComic>;
  isDib: Scalars['Boolean'];
  user?: Maybe<IUser>;
  wishlistId: Scalars['String'];
};
