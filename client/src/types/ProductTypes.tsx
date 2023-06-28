export type ProductDetailType = {
    readonly productuctId: string
    name: string,
    imgUrl: string,
    price: number,
    description: string,
    rating: number,
    numberOfUnit?: number
}

export type ProductPropsType = {
    productDetail: ProductDetailType,
    onDelete: Function,
    onEdit: Function
}