import React from 'react';
import { Breadcrumb, Container, Button } from 'react-bootstrap';
import "./breadcrumb.scss";
import { NavigateFunction } from 'react-router-dom';

const BreadCrumb = (props: BreadProps): JSX.Element => {
    const { itens, button, navigate } = props;

    return <Container>
        <div className='breadcrumb-container'>
            <Breadcrumb>
                {itens.map((item: any, index: any) => {
                    const { route, active, flag } = item;
                    const onClick = () => navigate(route);
                    if (active)
                        return <Breadcrumb.Item key={index} active={true}>{flag}</Breadcrumb.Item>
                    return <Breadcrumb.Item onClick={onClick} key={index}>{flag}</Breadcrumb.Item>
                }
                )}
            </Breadcrumb>
            {button && button}
        </div>

    </Container>
}

interface BreadProps {
    itens: Array<object>,
    button?: JSX.Element,
    navigate: NavigateFunction
}

export default BreadCrumb;