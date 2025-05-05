export interface Book {
    id?: number;
    title: string;
    author: string;
    year: number;
    publishingCompany: string;
    isReaded: boolean;
    isDigital: boolean;
    isDeleted?: boolean;
    cover: string;
    updatedDate?: string;
  }