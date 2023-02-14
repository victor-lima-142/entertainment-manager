import { Card, Carousel } from "react-bootstrap";
import "./list.scss";
import { BsStarFill } from 'react-icons/bs';
import { NavigateFunction } from "react-router-dom";
import { getItem } from "../../../config/storage";
import { Modal } from "../..";
import React from "react";

const List = (props: SeriesData): JSX.Element => {
    const [open, setOpen] = React.useState<boolean>(false);
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

    const onHandle = (id: number) => {
        if (getItem('userData')) {
            navigate(`/title-info/${id}`)
        } else {
            setOpen(true);
        }
    }

    const closeModalAlert = () => setOpen(false);
    return <div className='list-titles-container'>
            {list.map((title: any, index: any) => {
                const { name, id, image, rate } = title;
                return <Card onClick={() => onHandle(id)} style={{ cursor: 'pointer' }} className="shadow-sm p-0 rounded-3 card-title " key={index}>
                    <Carousel variant="dark" controls={false} indicators={false} className="rounded-3 shadow-sm ">
                        <Carousel.Item className="rounded-3 ">
                            <img className="d-block w-100 shadow-sm rounded-3 "
                                src={image} alt={`title-${name}-${id}}`} />
                            <Carousel.Caption>
                                <h5>{name}</h5>
                                <h6>{RenderRate(getRate(rate))}</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Card>
            })}
            <Modal title={'Faça o Login'} align={'center'} open={open} onClose={closeModalAlert} body={<h2>Para continuar efetue o Login</h2>} />
        </div>
}

interface SeriesData {
    list: Array<object>,
    navigate: NavigateFunction
}

export default List;