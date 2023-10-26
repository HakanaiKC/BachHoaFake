import { Row, Navbar, Col, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../assets/test-xanhla.png'
import giaohang from '../assets/giaohang-040719.png'
import hoantien from '../assets/hoantien-040719.png'
import spchinhhang from '../assets/sanphamchinhhang-040719.png'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColInner from './ColInner'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function Header() {
  const value = useSelector((state: RootState)=>state.carts.value.length)
  return (
    <div className='header'>
      <Container>
        <Row className="top-header">
          <Col xs={'3'} lg={'3'} md={'3'}>
            <img className='top-header__img' src={logo} alt="Logo Xanh Lá"/>
          </Col>
          <Col>
            <ColInner
              context='Ship COD toàn quốc'
              title='Giao hàng nhanh'
              img={giaohang}
            />
          </Col>
          <Col>
            <ColInner
              context='Yên tâm sử dụng'
              title='Chính hãng 100%'
              img={spchinhhang}
            />
          </Col>
          <Col>
            <ColInner
              context='30 ngày đổi mới'
              title='Nếu không hài lòng'
              img={hoantien}
            />
          </Col>
          <Col xs={'1'} lg={'1'} md={'1'}>
            <Link to={`/cart`} className='text-black text-decoration-none'>
              <div className="cart_inner">
                <strong>Giỏ hàng/ {value}</strong>
                <FontAwesomeIcon icon={faShoppingBag} color={'#666'} />
              </div>
            </Link>
          </Col>
        </Row>

        <Row className="top-header-hidden">
          <Col xs={'11'} lg={'11'} md={'11'} className="top-header-hidden__logo">
            <img className='top-header-hidden__img' src={logo} alt="Logo Xanh Lá"/>
          </Col>
          <Col xs={'1'} lg={'1'} md={'1'} className="top-header-hidden__icon">
            <Link to={`/cart`} className='text-black text-decoration-none'>
              <div className="cart_inner">
                <FontAwesomeIcon icon={faShoppingBag} color={'#666'} className='fs-3'/>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>

      <Navbar className="bottom-header" expand='lg' data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls='bottom-header__navbar'></Navbar.Toggle>
          <Navbar.Collapse id='bottom-header__navbar'>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>Trang chủ</Nav.Link>
              <Nav.Link href='/'>Giới thiệu</Nav.Link>
              <NavDropdown title="Cửa hàng" className="bottom-header__navbar">
                <NavDropdown.Item href="/">Mẹ và bé</NavDropdown.Item>
                <NavDropdown.Item href="/">Thiết bị công nghệ</NavDropdown.Item>
                <NavDropdown.Item href="/">Dụng cụ gia đình</NavDropdown.Item>
                <NavDropdown.Item href="/">Đồ dùng nhà bếp</NavDropdown.Item>
                <NavDropdown.Item href="/">Thời trang nam nữ</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Chính sách" className="bottom-header__navbar">
                <NavDropdown.Item href="/">Chính sách bảo mật</NavDropdown.Item>
                <NavDropdown.Item href="/">Chính sách thanh toán</NavDropdown.Item>
                <NavDropdown.Item href="/">Chính sách vận chuyển</NavDropdown.Item>
                <NavDropdown.Item href="/">Chính sách bảo hành</NavDropdown.Item>
                <NavDropdown.Item href="/">Chính sách đổi trả</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Trợ giúp" id="bottom-header__navbar">
                <NavDropdown.Item href="/">Câu hỏi thường gặp</NavDropdown.Item>
                <NavDropdown.Item href="/">Hướng dẫn mua hàng</NavDropdown.Item>
                <NavDropdown.Item href="/">Kiểm tra đơn hàng</NavDropdown.Item>
                <NavDropdown.Item href="/">Tải hóa đơn VAT</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/'>Tin tức</Nav.Link>
              <Nav.Link href='/'>Liên hệ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/'>Đăng ký/ Đăng nhập</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}