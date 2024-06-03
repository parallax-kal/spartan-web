export interface IProduct {
    name: string
    price: number
    image: string
    prevPrice: number
    ratings: 1 | 2 | 3 | 4 | 5
    amountInStock: number
    description: string
}