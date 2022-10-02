import ProductItem from './Product'

export default function ProductListView(props) {
    return (
        <div>
            <ul>
                {props.productList.map(product => <ProductItem product={product} />)}
            </ul>
        </div>
    )
}
