import { Author } from "../authors/author";

export interface Book {
    _id: string;
    name: string;
    isbn: string;
    author: Author[];
}