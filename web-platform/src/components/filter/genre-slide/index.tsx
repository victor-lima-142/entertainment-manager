import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { fetchGenre } from '../../../requests'
import { Loader } from '../..';
import { cutArray } from '../../../config/utils';
import './genre-slide.scss';

const GenreSlide = (props: any) => {
    const [index, setIndex] = React.useState<number>(0);
    const [genres, setGenres] = React.useState<any>(null);
    const [quantityPerPage, setQuantityPerPage] = React.useState<number>(window.innerWidth >= 900 ? 5 : 2);
    const { loading, setLoading } = props;

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const fetchData = React.useCallback(async () => {
        try {
            const genres: Array<object> | null = await fetchGenre();
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
    }, [setGenres, setLoading])

    React.useEffect(() => {
        window.addEventListener('resize', () => setQuantityPerPage(window.innerWidth >= 900 ? 5 : 2));

        fetchData()
    }, [fetchData]);

    if (loading || genres === null)
        return <Loader variant='light' />

    return (
        <Container className='genre-slide-cont'>
            <Carousel interval={null} className='my-carousel-genres' activeIndex={index} onSelect={handleSelect} indicators={false}>
                {genres.map((listGenre: any, key: any) => {
                    return <Carousel.Item key={key}>
                        <section className='carousel-genres'>
                            {listGenre.map((genre: any, index: any) => {
                                const { name } = genre;
                                return <React.Fragment key={index}>
                                    <div className='card-genre text-center'>
                                        <Button variant={'outline-light'} className='shadow-lg'>
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