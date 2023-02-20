import React from 'react';
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import { BreadCrumb } from '../';
import { useParams } from 'react-router-dom';
import { Loader } from '../';
import "./info.scss";
import { BsStarFill, BsStarHalf, BsHeart, BsHeartFill } from 'react-icons/bs';
import TitleRequest from '../../requests/title';
import { capitalize } from '../../config/utils';

const InfoTitle = (props: any) => {
    const [data, setData] = React.useState<any>(null);
    const { navigate, loading, setLoading } = props;
    let { titleId } = useParams();
    

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const titleRequest = new TitleRequest();
            const res = await titleRequest.find({ title: titleId });
            if (res?.status === 200) {
                setData(res?.data);
            }
        } catch (e: any) {
            console.log(e);
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [setLoading, titleId]);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (!data || loading) return <Loader size='md' fullScreen />

    const { rate } = data;

    const RenderRate = () => {
        let rates: Array<number> = []
        const limit: number = 5 * rate / 10 | 0;
        for (let i = 0; i < limit; i++) rates.push(i);

        return <div className='title-info-rate'>
            <>
                {rates.map((rate: any, index: any) => {
                    return <BsStarFill color="yellow" size={15} key={index} />
                })}
                {isFloat(5 * rate / 10) && <BsStarHalf color="yellow" size={15} />}
            </>
            <h6 className='text-shadow'>{5 * rate / 10}</h6>
        </div>
    }

    const likeTitle = async () => {
        try {
            const titleRequest = new TitleRequest();
            const res = await titleRequest.like({ titleId: titleId });
            if (res?.status === 200) {
                const res2 = await titleRequest.find({ title: titleId });
                if (res2?.status === 200) {
                    console.log(res2);
                    setData(res2?.data);
                }
            }
        } catch (e: any) {
            console.log(e);
        }
    }

    return <>
        <BreadCrumb itens={[
            { flag: `${capitalize(data.type)}s`, route: `/${data.type}s` },
            { flag: data.name, active: true }
        ]} navigate={navigate} />
        <Container className='title-info-container mt-5 pt-5 image-back text-white' fluid>
            <Container>
                <Row>
                    <Col md={6} lg={6} sm={12}>
                        <Image src={data.image} className='title-info-image shadow' />
                        <Button className='like-button btn btn-sm rounded-5 shadow btn-dark' onClick={likeTitle}>
                            {data.liked ? <BsHeartFill /> : <BsHeart />}
                        </Button>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <h1 className='mb-0 text-secondary fs-2'>{data.name}</h1>
                        <RenderRate />
                        <h4 className='title-info-plot fs-5 text-shadow'>{data.plot}</h4>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
}

function isFloat(n: number) {
    return n === +n && n !== (n | 0);
}

export default InfoTitle;