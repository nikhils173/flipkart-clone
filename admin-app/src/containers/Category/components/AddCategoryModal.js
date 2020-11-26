import React from 'react';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { Col, Row} from 'react-bootstrap'

const AddCategoryModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        categoryList,
        handleCategoryImage,
        onSubmit
    } = props;

    return(
        <Modal
        show={show}
        handleClose={handleClose}
        onSubmit={onSubmit}
        modalTitle={'Add new Category'}
        >
            <Row>
                <Col>
                    <Input 
                        value={categoryName}
                        placeholder={'Category Name'}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="form-control-sm"
                    />
                </Col>
                <Col>
                    <select 
                        className="form-control form-control-sm"
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}>
                            <option>select Category</option>
                            {
                                categoryList.map(option => 
                                    <option key={option.value} value={option.value}>{option.name}</option>)
                            }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type='file' name="CategoryImage" onChange={handleCategoryImage} />
                </Col>
            </Row>       
        </Modal>
    );
}

export default AddCategoryModal;