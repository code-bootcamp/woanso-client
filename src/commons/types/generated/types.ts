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
  boardDislike: Array<IBoardDislike>;
  boardImg: Array<IBoardImg>;
  boardLike: Array<IBoardLike>;
  comment: Array<IComment>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dislike: Scalars['Int'];
  id: Scalars['String'];
  like: Scalars['Int'];
  user: IUser;
};

export type IBoardDislike = {
  __typename?: 'BoardDislike';
  board: IBoard;
  id: Scalars['String'];
  user: IUser;
};

export type IBoardImg = {
  __typename?: 'BoardImg';
  board: IBoard;
  boardImgID: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type IBoardLike = {
  __typename?: 'BoardLike';
  board: IBoard;
  id: Scalars['String'];
  user: IUser;
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
  comicImg: Array<IComicImg>;
  comicRating: IComicRating;
  deliveryFee: Scalars['Int'];
  description: Scalars['String'];
  illustrator: Scalars['String'];
  isAvailable: Scalars['Boolean'];
  pointTransaction: IPointTransaction;
  publisher: Scalars['String'];
  rentalFee: Scalars['Int'];
  review: Array<IReview>;
  title: Scalars['String'];
  totalBooks: Scalars['Int'];
  wishListCount: Scalars['Int'];
  wishlist: Array<IWishlist>;
};

export type IComicImg = {
  __typename?: 'ComicImg';
  comic: IComic;
  id: Scalars['String'];
  isMain: Scalars['Boolean'];
  url?: Maybe<Scalars['String']>;
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
  url?: InputMaybe<Array<Scalars['String']>>;
};

export type ICreateCommentInput = {
  boardId: Scalars['String'];
  content: Scalars['String'];
};

export type ICreateReviewInput = {
  comicId: Scalars['String'];
  content: Scalars['String'];
  rating: Scalars['Float'];
  userId: Scalars['String'];
};

export type ICreateWishInput = {
  comicId: Scalars['String'];
  userId: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  adminLogin: Scalars['String'];
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
  sendToken: Scalars['String'];
  signUp: IUser;
  signUpForAdmin: IAdmin;
  unblockUserForAdmin: Scalars['Boolean'];
  updateAdmin: IAdmin;
  updateBoard: IBoard;
  updateComic: IComic;
  updatePassword: Scalars['Boolean'];
  updateUser: IUser;
  uploadFile: Array<Scalars['String']>;
  uploadOneFile: Scalars['String'];
};


export type IMutationAdminLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  address: Scalars['String'];
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
  comicId: Scalars['ID'];
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
  updateComicInput: IUpdateComicInput;
};


export type IMutationUpdatePasswordArgs = {
  email: Scalars['String'];
  updateUserPwdInput: Scalars['String'];
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

export enum IPoint_Transaction_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPointTransaction = {
  __typename?: 'PointTransaction';
  address: Scalars['String'];
  amount: Scalars['Int'];
  comic: IComic;
  createdAt: Scalars['DateTime'];
  deliveryFee: Scalars['Int'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPoint_Transaction_Status_Enum;
  totalPrice: Scalars['Int'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  authAdmin: Scalars['String'];
  authUser: Scalars['String'];
  availableComicsForAdmin: Array<Scalars['Int']>;
  fetchAllComments: Array<IComment>;
  fetchBlockedUsersForAdmin: Array<IUser>;
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchBoardsByUser: Array<IBoard>;
  fetchComic: IComic;
  fetchComics: Array<IComic>;
  fetchComicsWithTitle: Array<IComic>;
  fetchComments: Array<IComment>;
  fetchReview: Array<IReview>;
  fetchReviews: Array<IReview>;
  fetchUser: IUser;
  fetchUserLoggedIn: IUser;
  fetchUsersForAdmin: Array<IUser>;
  fetchWishlist: Array<IWishlist>;
  findEmail: IUser;
  findEmailForAdmin: IAdmin;
  searchUserForAdmin: Array<IUser>;
};


export type IQueryFetchAllCommentsArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
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


export type IQueryFetchComicsArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchComicsWithTitleArgs = {
  page: Scalars['Float'];
  title: Scalars['String'];
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchReviewArgs = {
  comicId: Scalars['String'];
};


export type IQueryFetchReviewsArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUsersForAdminArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFindEmailArgs = {
  phone: Scalars['String'];
};


export type IQueryFindEmailForAdminArgs = {
  email: Scalars['String'];
};


export type IQuerySearchUserForAdminArgs = {
  nickname: Scalars['String'];
  page: Scalars['Float'];
};

export type IReview = {
  __typename?: 'Review';
  comic: IComic;
  comicRating: IComicRating;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  like: Scalars['Int'];
  rating: Scalars['Float'];
  reviewId?: Maybe<Scalars['String']>;
  reviewLike: Array<IReviewLike>;
  user: IUser;
};

export type IReviewLike = {
  __typename?: 'ReviewLike';
  review: IReview;
  reviewLikeId: Scalars['String'];
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
  phone?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  board: Array<IBoard>;
  boardDislike: Array<IBoardDislike>;
  boardlLike: Array<IBoardLike>;
  comment: Array<IComment>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interest: IUser_Interest_Enum;
  nickname: Scalars['String'];
  phone: Scalars['String'];
  pointTransaction: Array<IPointTransaction>;
  review: Array<IReview>;
  reviewLike: Array<IReviewLike>;
  thumbnail: Scalars['String'];
  wishlist: Array<IWishlist>;
};

export type IWishlist = {
  __typename?: 'Wishlist';
  comic?: Maybe<IComic>;
  isDib: Scalars['Boolean'];
  user?: Maybe<IUser>;
  wishlistId: Scalars['String'];
};
