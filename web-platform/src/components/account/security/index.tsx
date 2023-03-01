import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { MdPassword } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GiToken } from 'react-icons/gi';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { getItem } from '../../../config/storage';
import { AuthRequests } from '../../../requests';
import { toast } from 'react-hot-toast';

const AccountSecurity = (props: any) => {
    const [currentPassword, setCurrentPassword] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [confirmPass, setConfirmPass] = React.useState<string>('');
    const [showPass, setShowPass] = React.useState<boolean>(false);
    const [showCurrentPass, setShowCurrentPass] = React.useState<boolean>(false);
    const [showConfirmPass, setShowConfirmPass] = React.useState<boolean>(false);
    const userData = getItem("userData");

    const _setConfirmPass = (e: any) => setConfirmPass(e.target.value);
    const _setPassword = (e: any) => setPassword(e.target.value);
    const _setCurrentPassword = (e: any) => setCurrentPassword(e.target.value);

    const showPassword = () => setShowPass(showPass ? false : true);
    const showConfirmPassword = () => setShowConfirmPass(showConfirmPass ? false : true);
    const showCurrentPassword = () => setShowCurrentPass(showCurrentPass ? false : true);

    const changePassword = async () => {
        if (confirmPass === password) {
            const authRequests = new AuthRequests();
            const res = await authRequests.verifyPassword({ password: currentPassword, user: userData.user });
            if (res?.status === 200) {
                const reset = await authRequests.resetPassword({ password: password });
                if (reset?.status === 200) {
                    setCurrentPassword('');
                    setPassword('');
                    setConfirmPass('');
                    toast.success("Your password was updated!");
                }
            }
        } else {
            toast.error("The passwords are not equals");
        }
    }

    return <Container className='pb-4'>
        <Row>
            <Col md={12} lg={12} sm={12}>
                <InputGroup className="mb-3">
                    <InputGroup.Text className='rounded-0' children={<RiLockPasswordLine />} title='Current password' />
                    <Form.Control type={showCurrentPass ? 'text' : 'password'} className='rounded-0' required title='Current password' value={currentPassword} onChange={_setCurrentPassword} />
                    <InputGroup.Text className='rounded-0' onClick={showCurrentPassword} style={{ cursor: 'pointer' }} children={showCurrentPass ? <HiOutlineEyeOff /> : <HiOutlineEye />} />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text className='rounded-0' children={<MdPassword />} title='New password' />
                    <Form.Control type={showPass ? 'text' : 'password'} className='rounded-0' required title='New password' value={password} onChange={_setPassword} />
                    <InputGroup.Text className='rounded-0' onClick={showPassword} style={{ cursor: 'pointer' }} children={showPass ? <HiOutlineEyeOff /> : <HiOutlineEye />} />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text className='rounded-0' children={<MdPassword />} title='Confirm password' />
                    <Form.Control type={showConfirmPass ? 'text' : 'password'} className='rounded-0' required title='Confirm password' value={confirmPass} onChange={_setConfirmPass} />
                    <InputGroup.Text className='rounded-0' onClick={showConfirmPassword} style={{ cursor: 'pointer' }} children={showConfirmPass ? <HiOutlineEyeOff /> : <HiOutlineEye />} />
                </InputGroup>

                {/*<InputGroup className="mb-3">
                    <InputGroup.Text className='rounded-0' children={<GiToken />} title='Your token' />
                    <Form.Control disabled value={`${userData.token}`} className='rounded-0' title='Your token' />
                </InputGroup>*/}

                <section className='text-center'>
                    <Button variant='dark' className='shadow-lg' onClick={changePassword}>
                        Update password
                    </Button>
                </section>
            </Col>
        </Row>
    </Container>
}

export default AccountSecurity;