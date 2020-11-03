import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import operations from '../../redux/operations';

const EditView = ({ fetchUser, history, updateUser }) => {
  const { id } = useParams();
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    fetchUser(id, (user) => reset(user), history);
  }, []);

  const onCancel = () => history.push('/home');
  const onSubmit = (user) => updateUser({ ...user, id }, history);

  return (
    <>
      <Header withAnimation={false} />
      <Modal header="Edit user" size="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Row>
              <Col xs={12}>
                <Input
                  label="User Name"
                  name="first_name"
                  errors={errors}
                  ref={register({ required: true })}
                />
              </Col>
              <Col xs={12}>
                <Input
                  label="Last Name"
                  name="last_name"
                  errors={errors}
                  ref={register({ required: true })}
                />
              </Col>
              <Col xs={12}>
                <Input
                  label="Email"
                  name="email"
                  errors={errors}
                  ref={register({ required: true })}
                />
              </Col>
            </Row>
            <Row className="no-gutters mt-3">
              <Col className="mr-2">
                <Button inverse color="secondary" onClick={onCancel} type="button">
                  Cancel
                </Button>
              </Col>
              <Col className="ml-2">
                <Button color="secondary" type="submit">
                  Edit
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Modal>
    </>
  );
};

const mapDispatchToProps = { ...operations };
const mapStateToProps = (state) => ({ ...state, userToEdit: state.user_to_edit ?? {} });

const EditViewWithRouter = withRouter(EditView);

export default connect(mapStateToProps, mapDispatchToProps)(EditViewWithRouter);
