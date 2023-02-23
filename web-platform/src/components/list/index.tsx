import { Card, Carousel } from "react-bootstrap";
import "./list.scss";
import { BsStarFill } from 'react-icons/bs';
import { Location, NavigateFunction } from "react-router-dom";
import { getItem } from "../../config/storage";
import { FilterList, Modal } from "../";
import React from "react";
import { Auth } from "../../pages";

const List = (prop: SeriesData): JSX.Element => {
    const { list, setList, navigate, props } = prop;
    const [open, setOpen] = React.useState<boolean>(false);
    const [properties, setProperties] = React.useState<any>(null);
    const [originalList, setOriginalList] = React.useState<any>(list);
    
    const getRate = (rate: number) => 5 * rate / 10;

    const RenderRate = (rate: number) => {
        let rates: Array<number> = []
        for (let i = 0; i < rate; i++) rates.push(i);
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
            addNavigateTo(id)
            do {
                setOpen(true);
            } while (properties !== null && !properties && properties.length >= 1);
        }
    }

    const addNavigateTo = (id: number): void => setProperties({ ...props, ...{ isModal: true }, ...{ navigateTo: `/title-info/${id}` } });

    const closeModalAlert = () => setOpen(false);

    return <>

        <section className='image-back'>
            <FilterList {...{ list: list, setList: setList, fieldsToSearch: ['name'], originalList: originalList, setOriginalList: setOriginalList }} { ...props} />
            <div className='list-titles-container'>
                {list.map((title: any, index: any) => {
                    const { name, id, image, rate } = title;
                    return <Card onClick={() => onHandle(id)} style={{ cursor: 'pointer' }} className="shadow-sm p-0 rounded-3 card-title " key={index}>
                        <Carousel variant="dark" controls={false} indicators={false} className="rounded-3 shadow-sm ">
                            <Carousel.Item className="rounded-3 ">
                                <img className="d-block w-100 shadow-sm rounded-3" src={image} alt={`title-${name}-${id}}`} />
                                <Carousel.Caption>
                                    <h5>{name}</h5>
                                    <h6>{RenderRate(getRate(rate))}</h6>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Card>
                })}
                <Modal align={'center'} size="sm" open={open} onClose={closeModalAlert} body={<Auth {...properties} />} />
            </div>
        </section>
    </>
}

interface SeriesData {
    list: Array<object>,
    setList: any,
    navigate: NavigateFunction,
    location: Location,
    props: any
}

export default List;