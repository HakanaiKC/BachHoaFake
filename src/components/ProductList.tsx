import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getProductAsycn } from "../store/apiProductSlice";
import formatter from "../formatter/formatter";

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { value: products } = useSelector((state: RootState) => state.products)
    useEffect(() => {
        dispatch(getProductAsycn())
    }, [dispatch])

    return (
        <div className="products mt-3">
            <Row>
                {products.map((product) => {
                    return (
                        <Col xs={'6'} md={'4'} lg={'3'} key={product.id} className="product">
                            <Link to={`/shop/${product.id}`}><img className='product__img' src={product.image} width={'100%'} /></Link>
                            <div className="product__body mt-3">
                                <Link to={`/shop/${product.id}`} className="product__link"><h5 className="product__title">{product.name}</h5></Link>
                                <span className='fw-bold product__price'>{formatter.format(product.price)}</span>
                            </div>                    
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default ProductList