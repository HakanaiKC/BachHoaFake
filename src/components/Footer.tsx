import { Row, Col, Button, Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='mt-5'>
            <Container>
                <Row className="footer">
                    <Col lg={'3'}>
                        <h4 className='footer__title'>GiuseArt.com</h4>
                        <p>GiuseArt.com là blog cá nhân chia sẻ những kiến thức đồ họa và kinh nghiệm làm website Wordpress cho tất cả mọi người. Mình rất yêu thích Nghệ thuật Thánh và Đồ họa Công giáo. Rất mong được kết bạn với đông đảo anh em Designer gần xa.</p>
                    </Col>
                    <Col lg={'3'}>
                        <h4 className='footer__title'>Chính sách</h4>
                        <ul className='footer__chinh-sach'>
                            <li>Chính sách bảo mật</li>
                            <li>Chính sách bảo hành</li>
                            <li>Chính sách thanh toán</li>
                            <li>Chính sách vận chuyển</li>
                            <li>Chính sách đổi trả</li>
                            <li>Hướng dẫn mua hàng</li>
                        </ul>
                    </Col>
                    <Col lg={'3'}>
                        <h4 className='footer__title'>Thông tin liên hệ</h4>
                        <ul>
                            <li><strong>Địa chỉ:</strong> Phạm Văn Bạch, P. 15, Q. Tân Bình, Tp. HCM</li>
                            <li><strong>Hotline:</strong> 0999.999.999 – 0999.999.999</li>
                            <li><strong>Email:</strong> email@gmail.com</li>
                        </ul>
                        <div className="d-grid gap-2">
                            <Button className='footer__hotline-btn text-white mb-3' variant="warning">Hotline tư vấn đặt hàng</Button>
                        </div>
                    </Col>
                    <Col lg={'3'}>
                        <h4 className='footer__title'>Fanpage Facebook</h4>
                    </Col>
                </Row>
            </Container>
            <div className="copyright text-center">
                <p>© Bản quyền thuộc về Hakanai | Thiết kế bởi Hakanai</p>
            </div>
        </footer>
    )
}

