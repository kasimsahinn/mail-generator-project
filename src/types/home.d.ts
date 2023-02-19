export type THomeProps = {
  id?: number;
  attributes?: TMailingCardAttr[];
};

export type THomePropsAttr = {
  title?: string;
  createdAt?: string;
  publishedAt?: string;
  updatedAt?: string;
};


export interface IHomeProps  {
  id?: number;
  attributes?: IMailingCardAttr[];
  
};

export interface IHomePropsAttr  {
  title?: string;
  createdAt?: string;
  publishedAt?: string;
  updatedAt?: string;
};
