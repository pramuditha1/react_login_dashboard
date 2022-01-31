import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

/**
* @author
* @function Signin
**/

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);//initialized in root reducer

    const dispatch = useDispatch();

    


    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }

    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '100px' }}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={userLogin}>
                            <Input 
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input 
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        </Layout>
    )

}

export default Signin