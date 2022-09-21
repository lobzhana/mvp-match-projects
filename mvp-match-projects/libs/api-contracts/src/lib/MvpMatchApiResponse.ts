export interface MvpMatchApiResponse<T> {
  code: number;
  data: T;
  error: unknown;
}
