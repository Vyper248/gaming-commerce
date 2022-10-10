export type Collections = {
    [key: string]: Collection;
}

export type Collection = {
    id: number;
    title: string;
    items: Item[];
}

export type Item = {
    id: number;
    name: string;
    imageURL: string;
    price: number;
    tags: string[];
    description: string;
    releaseDate: string;
}