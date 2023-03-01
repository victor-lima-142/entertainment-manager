import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { BsPersonBadge, BsInfoSquareFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { MdDateRange } from 'react-icons/md';
import { AuthRequests } from '../../../requests';
import toast from "react-hot-toast";
import { getItem, setItem } from '../../../config/storage';

const AccountSettings = (props: any) => {
    const { setDataUpdate, dataUpdate, dataSet, setDataSet, setUserData } = props;
    const { register_date } = dataSet;
    const date = new Date(register_date);

    const onUpdate = async () => {
        try {
            const authRequest = new AuthRequests();
            const res = await authRequest.edit(dataUpdate);
            if (res?.status === 200) {
                setDataSet(res?.data);
                setDataUpdate(res?.data);
                const usD = getItem("userData");
                usD.username = res?.data?.username;
                usD.email = res?.data?.email;
                setItem('userData', usD);
                setUserData(usD);
                toast.success("Your data was updated!");
            }
        } catch (e: any) {
            console.log(e);
        }
    }

    return <Container className='account-container'>
        <Row className='pt-4 pb-4'>
            <Col md={12} lg={12} sm={12}>
                <InputGroup className="mb-3">
                    <InputGroup.Text className='rounded-0' children={<BsPersonBadge />} title='Your username' />
                    <Form.Control type='text' className='rounded-0' required value={dataUpdate.username} title='Your username' onChange={(e: any) => {
                        setDataUpdate({ username: e.target.value, email: dataUpdate?.email });
                    }} />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text className='rounded-0' children={<SiGmail />} title='Your email' />
                    <Form.Control type='text' className='rounded-0' required value={dataUpdate.email} title='Your email' onChange={(e: any) => {
                        setDataUpdate({ email: e.target.value, username: dataUpdate?.username });
                    }} />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text className='rounded-0' children={<MdDateRange />} title='Register date' />
                    <Form.Control disabled value={`You was registered at ${date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear()}`} className='rounded-0' title='Register date' />
                </InputGroup>

                <section className='text-center'>
                    <Button variant='dark' className='shadow-lg' onClick={onUpdate}>
                        Update data
                    </Button>
                </section>
            </Col>
        </Row>
    </Container>
}

export default AccountSettings;