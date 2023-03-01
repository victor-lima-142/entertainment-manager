import React from 'react';
import { AuthRequests } from '../../requests';
import { AccountSecurity, AccountSettings, Loader, AccountPhotoAbout } from '../../components';
import "./account.scss";
import { Container, Row, Col } from 'react-bootstrap';

const Account = (props: any) => {
    const { loading, setLoading } = props;
    const [dataSet, setDataSet] = React.useState<any>(null);
    const [dataUpdate, setDataUpdate] = React.useState<any>({ username: '', email: '' });

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const authRequests = new AuthRequests();
            const res = await authRequests.getData();
            if (res?.status === 200) {
                setDataSet(res?.data);
                setDataUpdate({ username: res?.data?.username, email: res?.data?.email, })
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

    return <main className='bg-dark position-absolute w-100 h-100'>
        <Container className='bg-light shadow mt-5'>
            <Row>
                <Col sm={12} md={7} lg={7}>
                    <AccountSettings {...{ setDataUpdate, dataSet, dataUpdate, setDataSet }} {...props} />
                    <AccountSecurity {...{ setDataUpdate, dataSet, dataUpdate, setDataSet }} {...props} />
                </Col>
                <Col sm={12} md={5} lg={5} className={"border-start"}>
                    <AccountPhotoAbout />
                </Col>
            </Row>
        </Container>
    </main>;
}

export default Account;