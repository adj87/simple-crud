import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const EditView = () => (
  <>
    <Header />
    <Modal header="Edit user">
      <Container>
        <Row>
          <Col xs={12}>
            <Input label="User Name" value="yeah" />
          </Col>
          <Col xs={12}>
            <Input label="Sur Name" value="yeah" />
          </Col>
          <Col xs={12}>
            <Input label="Email" value="yeah" />
          </Col>
        </Row>
        <Row className="no-gutters mt-3">
          <Col className="mr-2">
            <Button inverse color="secondary">
              Cancel
            </Button>
          </Col>
          <Col className="ml-2">
            <Button color="secondary">Edit</Button>
          </Col>
        </Row>
      </Container>
    </Modal>
  </>
);

export default EditView;
