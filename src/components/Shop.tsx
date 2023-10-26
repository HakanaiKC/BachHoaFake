import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Shop.css'
import { Col, Row, Breadcrumb, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Products } from '../interface/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Cart } from '../interface/Cart';
import { instance } from '../config';
import { getCartAsycn } from '../store/apiCartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import formatter from '../formatter/formatter';

const Shop: React.FC = () => {
    const params = useParams();
    const [product, setProduct] = useState<Products>()
    const [cart, setCart] = useState<Cart[]>([]) 
    const [count, setCount] = useState<number>(1)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSingleProduct = async () => {
            const data = await instance.get(`/product/${params.shopId}`)
            if (data.status === 200) {
                setProduct(data.data)
            }
        }
        fetchSingleProduct()
        window.scrollTo(0, 0)
    }, [params.shopId])

    useEffect(() => {
        dispatch(getCartAsycn())
    }, [dispatch])

    function handleMinus(): void {
        if (count > 1)
            setCount(minus => minus - 1)
    }

    function handlePlus(): void {
        setCount(plus => plus + 1)
    }

    function handleAdd(e: { preventDefault: () => void; }) {
        e.preventDefault();
        const quantity = (document.getElementById('product-quantity') as HTMLInputElement).value;
        if (typeof cart !== "undefined") {
            instance.post('cart', {
                productId: product?.id,
                name: product?.name,
                image: product?.image,
                price: product?.price,
                description: product?.description,
                category: product?.category,
                quantity: quantity
            })
                .then(function (response) {
                    setCart(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });

            navigate('/cart')
        }
    }

    return (
        <Row className="product-detail mt-3 g-0">
            <Col lg={'4'} className='product-detail__first-col'>
                <img src={product?.image} alt={product?.name} width={'100%'} />
            </Col>
            <Col lg={'6'} className='product-detail__second-col'>
                <Breadcrumb className='product-detail__breadcrumbs'>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>{product?.category}</Breadcrumb.Item>
                </Breadcrumb>
                <h1 className='product-detail__title'>{product?.name}</h1>
                <p className="product-detail__price fw-bold">{product && formatter.format(product.price)}</p>
                <div className="product-detail__description mb-3">
                    <p>{product?.description}</p>
                </div>
                <Form onSubmit={handleAdd}>
                    <Row>
                        <Col lg={'3'} className="product-detail__quantity">
                            <Button variant='light' className='product-detail__btn-minus' onClick={handleMinus}>
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                            <input readOnly type="number" value={count} id="product-quantity" width={'30%'} />
                            <Button variant='light' className='product-detail__btn-plus' onClick={handlePlus}>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </Col>
                        <Col lg={'9'}>
                            <Button variant='success' className='product-detail__button text-white fw-bold' type='submit'>
                                Thêm vào giỏ hàng
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col lg={'2'} className='product-detail__third-col'>
                <div className="info_pod">
                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4dd214", }} /><span className="title"> Giao hàng hỏa tốc, chỉ từ 2h – 24h</span><br />
                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4dd214", }} /><span className="title"> Giảm 30% tất cả các đơn hàng trên toàn hệ thống</span><br />
                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4dd214", }} /><span className="title"> Cam kết bán hàng chính hãng – Đổi trả trong vòng 1 tuần</span>
                </div>
            </Col>
        </Row>
    )
}

export default Shop

