import { Breadcrumb, Container, Button } from 'react-bootstrap';
import "./breadcrumb.scss";
import { NavigateFunction } from 'react-router-dom';

const BreadCrumb = (props: BreadProps): JSX.Element => {
    const { itens, button, navigate } = props;

    const PluralLinks = () => <Container className='bread-cont shadow' fluid>
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
            {(button) && <Button variant='light' size='sm' onClick={button.handleClickBtn}>{button.label}</Button>}
        </div>
    </Container>

    if (button) return <PluralLinks />

    return <Container className='bread-cont shadow' fluid>
        <div className='breadcrumb-container-single'>
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
        </div>
    </Container>
}

interface BreadProps {
    itens: Array<object>,
    button?: ButtonBreadCrumbProps,
    navigate: NavigateFunction,
    loading?: boolean
}

interface ButtonBreadCrumbProps {
    label: string,
    handleClickBtn: React.MouseEventHandler
}

export default BreadCrumb;