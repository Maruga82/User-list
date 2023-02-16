export enum FetchState {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

  export type UserResponse = {
    id: number;
    name: string;
    title: string;
    body: string;
    email: string;
    username: string;
    userId: number;
    completed: boolean;
  };

  // export type PagedTable<T> = {
  //   name: string;
  //   title: string;
  //   page: number;
  //   totalPages: number;
  //   itemsToShow: number;
  //   data: T[];
  // }