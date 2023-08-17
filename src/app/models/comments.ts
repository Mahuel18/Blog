export interface CommentAuthor {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
}
export interface Comments {
    id: number;
    content: string;
    created_at: Date;
    author: CommentAuthor;
    post: number;
}