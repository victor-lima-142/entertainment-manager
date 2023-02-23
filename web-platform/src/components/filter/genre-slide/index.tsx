import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { Loader } from '../..';
import { cutArray } from '../../../config/utils';
import './genre-slide.scss';
import { TitleRequests } from '../../../requests';

const GenreSlide = (props: any) => {
    const [index, setIndex] = React.useState<number>(0);
    const [genres, setGenres] = React.useState<any>(null);
    const [quantityPerPage, setQuantityPerPage] = React.useState<number>(window.innerWidth >= 900 ? 6 : 3);
    const { loading, setLoading, originalList, setOriginalList, setList } = props;
    

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const fetchData = React.useCallback(async () => {
        try {
            const titleRequests = new TitleRequests();
            const res = await titleRequests.listGenres();
            const genres = res?.data;
            if (genres) {
                const sorted = genres.sort(function (a: any, b: any) {
                    if (a['name'] < b['name']) return -1;
                    if (a['name'] > b['name']) return 1;
                    return 0;
                });
                const result = cutArray(sorted, quantityPerPage);
                setGenres(result);
            }
        } catch (e: any) {
            console.log('erro', e);
        } finally {
            setLoading(false);
        }
    }, [setGenres, setLoading, quantityPerPage])

    React.useEffect(() => {
        window.addEventListener('resize', () => setQuantityPerPage(window.innerWidth >= 900 ? 6 : 3));
        fetchData()
    }, [fetchData]);

    if (loading || genres === null)
        return <Loader variant='light' />


    const _changeGenre = (name: string | null = null) => {
        try {
            setLoading(true);
            setOriginalList(originalList);
            if (name) {
                const listTwo = originalList;
                const data = listTwo.filter((title: any) => title.genres.includes(name));
                console.log([name, data])
                setList(data);
            } else {
                setList(originalList);
            }
        } catch (e: any) {
            console.log('e', [e]);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Container className='genre-slide-cont'>
            <Carousel interval={null} className='my-carousel-genres' activeIndex={index} onSelect={handleSelect} indicators={false}>
                {genres.map((listGenre: any, key: any) => {
                    return <Carousel.Item key={key}>
                        <section className='carousel-genres'>
                            {listGenre.map((genreData: any, index: any) => {
                                const { name } = genreData;
                                return <React.Fragment key={index}>
                                    <div className='card-genre text-center'>
                                        <Button variant={'outline-light'} className='shadow-lg' onClick={() => { _changeGenre(name) }}>
                                            {name}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            })}
                        </section>
                    </Carousel.Item>
                })}
            </Carousel>

        </Container>
    );
}

export default GenreSlide;