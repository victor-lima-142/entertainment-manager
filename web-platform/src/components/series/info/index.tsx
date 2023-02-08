import React from 'react';
import { Container, Image, Row, Col } from "react-bootstrap"
import { breadcrumb } from "../../../config/app.structure";
import BreadCrumb from "../../app/breadcrumb";
import SerieRequests from '../../../requests/serie';
import { useParams } from 'react-router-dom';
import Loader from '../../app/loader';
import "./info.scss";
import { BsStarFill } from 'react-icons/bs';

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
        const limit = 5 * rate / 10;
        for (let i = 0; i < limit; i++) rates.push(i);
        return <>
            {rates.map((rate: any, index: any) => {
                return <BsStarFill color="yellow" className="shadow-lg" size={15} key={index} />
            })}
            <h6>{limit}</h6>
        </>
    }

    return <>
        <BreadCrumb itens={breadcrumb.infoSerie} navigate={navigate} />
        <Container className='serie-info-container'>
            <Row>
                <Col md={6} lg={6} sm={12}>
                    <Image src={data.image} className='serie-info-image' />
                </Col>
                <Col md={6} lg={6} sm={12}>
                    <Row>
                        <Col md={6} lg={6} sm={12}>
                            <h1>{data.name}</h1>
                        </Col>
                        <Col md={6} lg={6} sm={12}>
                            <RenderRate />
                        </Col>
                    </Row>
                    <p>{data.plot}</p>
                </Col>
            </Row>
        </Container>
    </>
}

export default InfoSerie;