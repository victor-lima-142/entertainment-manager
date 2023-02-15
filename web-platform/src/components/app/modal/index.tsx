import React from 'react';
import Modal, { ModalProps } from 'react-bootstrap/Modal';

const MyModal = (props: MyModalProps) => {
    const { title, body, footer, open, onClose, align, size } = props;
    const alignament = align ? align : 'center';

    return (
        <>
            <Modal show={open} onHide={onClose} size={size} style={{ textAlign: alignament}}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header style={{ textAlign: alignament}} closeButton>
                    {title && <Modal.Title>{title}</Modal.Title>}
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

interface MyModalProps extends ModalProps {
    title?: string | JSX.Element | null,
    body?: string | JSX.Element | null,
    footer?: JSX.Element | null,
    open: boolean,
    onClose: any,
    align?: any
}

export default MyModal