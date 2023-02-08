import React from 'react';
import { Card, Carousel, Container, Row } from "react-bootstrap";

const SeriesList = (props: SeriesData): JSX.Element => {
    const { list } = props;

    return <div className='list-series-container'>
            {list.map((serie: any, index: any) => {
                const { name, release } = serie;
                return <Card style={{ cursor: 'pointer' }} className="shadow-sm p-0 rounded-3 card-serie border-0" key={index}>
                    <Carousel variant="dark" controls={false} indicators={false} className="rounded-3 shadow-sm border-0">
                        <Carousel.Item className="rounded-3 border-0">
                            <img className="d-block w-100 shadow-sm rounded-3 border-0"
                                src="https://mixdeseries.com.br/wp-content/uploads/2022/11/wandinha-melhores-series-netflix.webp" alt={`serie-${name}-${release}}`} />
                            <Carousel.Caption>
                                <h5>{name}</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
            })}
        </div>
}

interface SeriesData {
    list: Array<object>
}

export default SeriesList;