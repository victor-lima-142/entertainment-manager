import { Card, Carousel } from "react-bootstrap";
import "./list.scss";
import { BsStarFill } from 'react-icons/bs';
import { NavigateFunction } from "react-router-dom";

const SeriesList = (props: SeriesData): JSX.Element => {
    const { list, navigate } = props;

    const getRate = (rate: number) => 5 * rate / 10;

    const RenderRate = (rate: number) => {
        let rates: Array<number> = []
        for (let i = 0; i  < rate; i++) rates.push(i);
        return <>
            {rates.map((rate: any, index: any) => {
                return <BsStarFill color="yellow" className="shadow-lg" size={15} key={index} />
            })}
        </>
    }
    return <div className='list-series-container'>
            {list.map((serie: any, index: any) => {
                const { name, id, image, rate } = serie;
                return <Card onClick={() => navigate(`/serie-info/${id}`)} style={{ cursor: 'pointer' }} className="shadow-sm p-0 rounded-3 card-serie " key={index}>
                    <Carousel variant="dark" controls={false} indicators={false} className="rounded-3 shadow-sm ">
                        <Carousel.Item className="rounded-3 ">
                            <img className="d-block w-100 shadow-sm rounded-3 "
                                src={image} alt={`serie-${name}-${id}}`} />
                            <Carousel.Caption>
                                <h5>{name}</h5>
                                <h6>{RenderRate(getRate(rate))}</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
            })}
        </div>
}

interface SeriesData {
    list: Array<object>,
    navigate: NavigateFunction
}

export default SeriesList;