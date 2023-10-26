import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownButton, Form, Button, InputGroup } from 'react-bootstrap';

export default function Search() {
    return (
        <div className="search">
            <InputGroup className='mb-3' size="lg">
                <DropdownButton title="All" id="search__dropdown">
                    <Dropdown.Item href="#">Mẹ và bé</Dropdown.Item>
                    <Dropdown.Item href="#">Thiết bị công nghệ</Dropdown.Item>
                    <Dropdown.Item href="#">Dụng cụ gia đình</Dropdown.Item>
                    <Dropdown.Item href="#">Đồ dùng nhà bếp</Dropdown.Item>
                    <Dropdown.Item href="#">Thời trang nam nữ</Dropdown.Item>
                </DropdownButton>
                <Form.Control placeholder='Tìm kiếm sản phẩm...'/>
                <Button variant='dark' className='search__button'><FontAwesomeIcon icon={faSearch} /></Button>
            </InputGroup>
        </div>
    )
}





