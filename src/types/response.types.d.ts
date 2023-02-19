import { ICookieToken, IJwtToken } from './common';
import { IKidProfile } from './profile';
import { IUser } from './user';

interface IBaseResponseArgs {
  path: string;
}

export interface IBaseResponseRequest {
  method: TRequestMethod;
  path: string;
  args: IBaseResponseArgs | string[];
  params: string[];
}

export interface IRejectedResponse {
  status: boolean;
  list: unknown;
  message: string;
}

export interface IBaseResponse<T> {
  request?: IBaseResponseRequest;
  status: boolean;
  count?: number;
  list: T | null;
  message?: string;
}

export interface ILegalDocumentResponse {
  title: string;
  subtitle: string;
  content: string;
}

export interface IUserGenericResponse {
  user: IUser;
}

export interface IAuthResponse {
  user: IUser;
  jwt: IJwtToken;
  cookie?: ICookieToken;
  firstSignup: boolean;
}

export interface IKidAddResponse {
  kid: IKidProfile;
}

export interface IKidDeleteResponse {
  uid: string;
}

export interface IDeleteObjectResponse {
  id: string;
}

export type ISelectPaymentMethodResponse = IDeleteObjectResponse;
