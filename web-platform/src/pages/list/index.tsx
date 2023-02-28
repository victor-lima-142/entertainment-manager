import { Card, Carousel } from "react-bootstrap";
import "./list.scss";
import { BsStarFill } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import { getItem } from "../../config/storage";
import { BreadCrumb, FilterList, Loader, Modal } from "../../components";
import React from "react";
import { Auth } from "..";
import { breadcrumb } from "../../config/app.structure";
import { TitleRequests } from "../../requests";

const List = (props: any): JSX.Element => {
    const { navigate, loading, setLoading } = props;
    const [open, setOpen] = React.useState<boolean>(false);
    const [genre, setGenre] = React.useState<string | null>(null);
    const [list, setList] = React.useState<any>(null);
    const [properties, setProperties] = React.useState<any>(null);
    const { type } = useParams();

    const getRate = (rate: number) => 5 * rate / 10;

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const titleRequest = new TitleRequests();
            const res = await titleRequest.list({ type: type ? type : null, genre: genre ? genre : null });
            const dataSet = [];
            if (res?.status === 200){
                for (const id in res?.data) {
                    if (Object.prototype.hasOwnProperty.call(res?.data, id)) {
                        const element = res?.data[id];
                        dataSet.push(element);
                    }
                }
            }
            setList(dataSet);
        } catch (e: any) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }, [setList, setLoading, genre, type])

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

    React.useEffect(() => {
        fetchData()
    }, [fetchData]);

    const List = () => {
        return <section className='image-back'>
            <FilterList {...props} {...{ genre, setGenre }} /> {/* {...{ list: list, setList: setList, fieldsToSearch: ['name'] }} */}
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
    }
    
    return <>
        <BreadCrumb itens={breadcrumb.games} navigate={navigate} />
        {
            (loading || list === null) ? <Loader size="md" className={'mt-5 pt-5'} /> :
                <List />
        }

    </>
}
export default List;