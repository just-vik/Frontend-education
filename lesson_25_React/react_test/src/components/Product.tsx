type Props = {
    title: string,
    price: number,
    qty: number
};

function Product({ title, price, qty }: Props) {
    return (
        <div>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            {
                qty === 0
                    ? <p>Товар кончился</p>
                    : <p>Кол-во: {qty}</p>
            }

        </div>
    )
}
export default Product;