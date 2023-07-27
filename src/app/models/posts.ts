export interface Posts {
    id: number;
    title: string;
    content: string;
    image: URL;
    created_at: Date;
    author: number;
    categories: [];

}
