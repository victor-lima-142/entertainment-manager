import React from 'react';
import Modal from 'react-bootstrap/Modal';

const MyModal = (props: MyModalProps) => {
    const { title, body, footer, open, onClose, align } = props;
    const alignament = align ? align : 'center';

    return (
        <>
            <Modal show={open} onHide={onClose} size="lg" style={{ textAlign: alignament}}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: alignament}}>{title && title}</Modal.Title>
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
    open: boolean,
    onClose: any,
    align?: any
}

export default MyModal