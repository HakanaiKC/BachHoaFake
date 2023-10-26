import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Cart.css'
import { Button, Table, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { instance } from '../config';
import { faTimesCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import formatter from '../formatter/formatter';
import { getCartAsycn } from '../store/apiCartSlice';

const CartList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { value: cart } = useSelector((state: RootState) => state.carts)

    useEffect(() => {
        dispatch(getCartAsycn())
        window.scrollTo(0, 0)
    }, [dispatch])

    function handleDelete(id: number) {
        instance.delete(`/cart/${id}`)
            .catch(err => console.log(err));
        window.location.reload();
        window.scrollTo(0, 0)
    }

    function Count({ dataId, dataQuantity, dataPrice }: { dataId: number, dataQuantity: number, dataPrice: number }) {
        const [count, setCount] = useState<number>(0)
        const [productId, setProductId] = useState<number>(0)

        const handleMinus = (id: number) => {
            setProductId(id)
            setCount(prev => prev - 1)
        }

        const handlePlus = (id: number) => {
            setProductId(id)
            setCount(prev => prev + 1)
        }

        function getValue(): number {
            if (productId === dataId) {
                if (parseInt(dataQuantity.toString()) + count >= 0) {
                    const totalQuantity = parseInt(dataQuantity.toString()) + count
                    return totalQuantity
                }
                else {
                    setCount(0)
                }
            }
            return parseInt(dataQuantity.toString())
        }

        return (
            <>
                <td>
                    <div className="cart-detail__quantity d-flex">
                        <Button variant='light' className='cart-detail__btn-minus' onClick={() => handleMinus(dataId)}>
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <Form.Control min="0" name='quantity' className='cart-detail__counter' readOnly type="number" value={getValue()} />
                        <Button variant='light' className='cart-detail__btn-plus' onClick={() => handlePlus(dataId)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                </td>
                <td>
                    <td className='fw-bold cartItem__total'>
                        {typeof getValue() !== 'undefined' && formatter.format(dataPrice * getValue())}
                    </td>
                </td>
            </>
        )
    }

    function handleUpdate(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const itemQuantity = formData.getAll('quantity')

        itemQuantity.map((item, i) => {
            if (parseInt(item.toString()) > 0) {
                console.log(item)
                instance.patch(`cart/${i + 1}`, {
                    "quantity": item
                })
                    .catch((error) => console.assert(error))
            } else {
                instance.delete(`cart/${i + 1}`)
                    .catch((error) => console.assert(error))
            }
            window.location.reload();
        })
    }

    return (
        <div className="cart mt-3">
            {cart.length > 0 ?
                <>
                    <Form method='patch' onSubmit={(e) => handleUpdate(e)}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className="fw-bold text-uppercase">Sản phẩm</th>
                                    <th className="fw-bold text-uppercase">Giá</th>
                                    <th className="fw-bold text-uppercase">Số lượng</th>
                                    <th className="fw-bold text-uppercase">Tạm tính</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>
                                                <div className="d-flex">
                                                    <Link to={'/cart'} onClick={() => handleDelete(product.id)} className='delete'>
                                                        <FontAwesomeIcon icon={faTimesCircle} />
                                                    </Link>
                                                    <Link to={`/shop/${product.productId}`} className='cartItem__img-link'>
                                                        <img className='cartItem__img mx-2' src={product.image} width={'50%'} />
                                                    </Link>
                                                    <Link to={`/shop/${product.productId}`} className='cartItem__product-link'>
                                                        {product.name}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td className='fw-bold cartItem__price'>{formatter.format(product.price)}</td>
                                            <Count dataId={product.productId} dataQuantity={product.quantity} dataPrice={product.price} />
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <Button variant='dark' className='cartItem__button text-white fw-bold mt-3' type='submit'>
                                Cập nhật
                            </Button>
                        </Table>
                    </Form>
                </>
                :
                <div className="cart mt-3">
                    <h2 className='cart__heading fw-bold'>Giỏ hàng</h2>
                    <div className="cart__return-wrapper">
                        <p>Chưa có sản phẩm nào trong giỏ</p>
                        <Link to={`/`}>
                            <Button variant='warning' className='cart__button text-white fw-bold text-uppercase' type="submit">
                                quay trở lại cửa hàng
                            </Button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default CartList
