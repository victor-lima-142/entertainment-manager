import React from 'react';
import Modal from 'react-bootstrap/Modal';

const MyModal = (props: MyModalProps) => {
    const { title, body, footer, open } = props;
    const [show, setShow] = React.useState<boolean>(open ? open : true);
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title && <>{title}</>}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {body && <>{body}</>}
                </Modal.Body>
                {
                    footer &&
                    <Modal.Footer>
                        <>{footer}</>
                    </Modal.Footer>
                }
            </Modal>
        </>
    );
}

interface MyModalProps {
    title?: string | JSX.Element | null,
    body?: string | JSX.Element | null,
    footer?: JSX.Element | null,
    open?: boolean
}

export default MyModal