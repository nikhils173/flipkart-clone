import React from 'react';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { Col, Row} from 'react-bootstrap'


const UpdateCategoriesModal = (props) => {

const {
    show,
    handleClose,
    modalTitle,
    size,
    expendedArray,
    checkedArray,
    handleCategoryInput,
    categoryList,
    onSubmit
    } = props;

    console.log({ expendedArray, checkedArray});
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            onSubmit={onSubmit}
            modalTitle={modalTitle}
            size={size}
        >
            <Row>
                <Col>
                    <h6>Expanded</h6>
                </Col>
            </Row>
            {
                expendedArray.length > 0 && 
                expendedArray.map((item,index) => 
                <Row key={index}>
                    <Col>
                        <Input 
                            value={item.name}
                            placeholder={'Category Name'}
                            onChange={(e) => handleCategoryInput('name',e.target.value,index,'expended')}
                        />
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            value={item.parentId}
                            onChange={(e) => handleCategoryInput('parentId',e.target.value,index,'expended')}>
                            <option>select Category</option>
                            {
                                categoryList.map(option => 
                                    <option key={option.value} value={option.value}>{option.name}</option>)
                            }
                        </select>
                    </Col>
                    <Col>
                        <select 
                            className="form-control" 
                            value={item.type}
                            onChange={(e) => handleCategoryInput('type',e.target.value,index,'expended')}
                        >
                            <option value="">Select Type</option>
                            <option value="store">Store</option>
                            <option value="product">Product</option>
                            <option value="page">Page</option>
                        </select>
                    </Col>
                </Row>
                )
            }

            <h6>Checked Categories</h6>
            {
                checkedArray.length > 0 && 
                checkedArray.map((item,index) => 
                <Row key={index}>
                    <Col>
                        <Input 
                            value={item.name}
                            placeholder={'Category Name'}
                            onChange={(e) => handleCategoryInput('name',e.target.value,index,'checked')}
                        />
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            value={item.parentId}
                            onChange={(e) => handleCategoryInput('parentId',e.target.value,index,'checked')}>
                                <option>select Category</option>
                            {
                                categoryList.map(option => 
                                    <option key={option.value} value={option.value}>{option.name}</option>)
                            }
                        </select>
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            value={item.type}
                            onChange={(e) => handleCategoryInput('type',e.target.value,index,'checked')}
                        >
                            <option value="">Select Type</option>
                            <option value="store">Store</option>
                            <option value="product">Product</option>
                            <option value="page">Page</option>
                        </select>
                    </Col>
                </Row>
                )
            }
            
            {/* <input type='file' name="CategoryImage" onChange={handleCategoryImage} /> */}
        </Modal>
    );
}

export default UpdateCategoriesModal