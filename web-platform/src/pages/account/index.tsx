import React from 'react';
import { AuthRequests } from '../../requests';
import { Loader } from '../../components';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { BsPersonBadge, BsInfoSquareFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { MdDateRange } from 'react-icons/md';
import { MDBContainer } from "mdb-react-ui-kit";

import "./account.scss";

const Account = (props: any) => {
    const { loading, setLoading } = props;
    const [dataSet, setDataSet] = React.useState<any>(null);
    const [dataUpdate, setDataUpdate] = React.useState<any>({username: '', email: ''});

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const authRequests = new AuthRequests();
            const res = await authRequests.getData();
            if (res?.status === 200) {
                setDataSet(res?.data);
                setDataUpdate({username: res?.data?.username, email: res?.data?.email, })
            }
        } catch (e: any) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading || !dataSet)
        return <Loader fullScreen />

    const { register_date } = dataSet;

    return <main className='image-back'>
        <Container className='account-container'>
            <Row>
                <Col md={8} lg={8} sm={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text children={<BsPersonBadge />} />
                        <Form.Control type='text' required value={dataUpdate.username} onChange={(e: any) => {
                            setDataUpdate({username: e.target.value, email: dataUpdate?.email});
                            console.log(dataUpdate);
                        }} />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text children={<SiGmail />} />
                        <Form.Control type='text' required value={dataUpdate.email} onChange={(e: any) => {
                            setDataUpdate({email: e.target.value, username: dataUpdate?.username });
                            console.log(dataUpdate);
                        }} />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text children={<BsInfoSquareFill />} />
                        <Form.Control as="textarea" className='account-textarea-about' required aria-label="With textarea" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text children={<MdDateRange />} />
                        <Form.Control disabled value={register_date} />
                    </InputGroup>

                    <Button variant='outline-light'>
                        Save
                    </Button>
                </Col>
                <Col md={4} lg={4} sm={12}>
                    <section className='text-center align-center'>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle shadow-4 account-photo" alt="Avatar" />
                    </section>
                </Col>
            </Row>
        </Container>
    </main>;
}

export default Account;