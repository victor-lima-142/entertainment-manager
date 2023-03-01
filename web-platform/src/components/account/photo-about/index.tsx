import React from 'react';
import { BsInfoSquareFill } from 'react-icons/bs';
import { Image, InputGroup, Form } from "react-bootstrap";

const AccountPhotoAbout = (props: any) => {
    const [wSz, setWsz] = React.useState<number>(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", () => setWsz(window.innerWidth));
    }, [setWsz]);

    return <div className='text-center pt-4 photo-about-container'>
        <Image src={'https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg'} className={'photo-about-image mb-3'} />
        <InputGroup className="mb-3">
            <InputGroup.Text className='rounded-0' children={<BsInfoSquareFill />} title='About you' />
            <textarea className='account-textarea-about rounded-0 form-control' rows={wSz <= 800 ? 9 : 5} required title='About you' />
        </InputGroup>
    </div>
}

export default AccountPhotoAbout;