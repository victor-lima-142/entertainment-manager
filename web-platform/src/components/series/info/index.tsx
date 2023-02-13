import React from 'react';
import { Container, Image, Row, Col } from "react-bootstrap"
import { breadcrumb } from "../../../config/app.structure";
import BreadCrumb from "../../app/breadcrumb";
import SerieRequests from '../../../requests/serie';
import { useParams } from 'react-router-dom';
import Loader from '../../app/loader';
import "./info.scss";
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const InfoSerie = (props: any) => {
    const [data, setData] = React.useState<any>(null);
    const { navigate, loading, setLoading } = props;
    let { serieId } = useParams();


    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const serieRequests = new SerieRequests();
            const res = await serieRequests.find({ serie: serieId });
            if (res?.status === 200) {
                setData(res?.data);
            }
        } catch (e: any) {
            console.log(e);
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }, []);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (!data || loading) return <Loader size='md' fullScreen />

    const { rate } = data;

    const RenderRate = () => {
        let rates: Array<number> = []
        const limit: number = 5 * rate / 10 | 0;
        for (let i = 0; i < limit; i++) rates.push(i);

        return <div className='serie-info-rate'>
            <>
                {rates.map((rate: any, index: any) => {
                    return <BsStarFill color="yellow" size={15} key={index} />
                })}
                {isFloat(5 * rate / 10) && <BsStarHalf color="yellow" size={15} />}
            </>
            <h6 className='text-shadow'>{5 * rate / 10}</h6>
        </div>
    }

    return <>
        <BreadCrumb itens={[{ flag: data.name, active: true }]} navigate={navigate} />
        <Container className='serie-info-container mt-5 pt-5 image-back text-white' fluid>
            <Container>
                <Row>
                    <Col md={6} lg={6} sm={12}>
                        <Image src={data.image} className='serie-info-image shadow' />
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <h1 className='mb-0 text-shadow text-black'>{data.name}</h1>
                        <RenderRate />
                        <h4 className='serie-info-plot'>{data.plot}</h4>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
}

function isFloat(n: number) {
    return n === +n && n !== (n | 0);
}

export default InfoSerie;