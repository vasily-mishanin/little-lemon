export interface  IDish {
    id: string;
    image:string;
    title: string;
    price: string;
    description:string;
}

export interface IPerson {
    id: string;
    rating: number;
    avatar: string;
    name: string;
    nickname: string;
    review: string;
}

export interface ILink {
    path: string;
    text: string;
    anchor?:string;
}