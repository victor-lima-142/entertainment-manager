import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { Loader } from '../..';
import { cutArray } from '../../../config/utils';
import './genre-slide.scss';
import { TitleRequests } from '../../../requests';
import { getItem, setItem } from '../../../config/storage';

const GenreSlide = (props: any) => {
    const [index, setIndex] = React.useState<number>(0);
    const [genres, setGenres] = React.useState<any>(null);
    const [quantityPerPage, setQuantityPerPage] = React.useState<number>(window.innerWidth >= 900 ? 6 : 2);
    const { loading, setLoading, setGenre, genre } = props;

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const fetchData = React.useCallback(async () => {
        try {
            if (!getItem("genres")) {
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
                    setItem('genres', result);
                }
            } else {
                setGenres(getItem("genres"));
            }
        } catch (e: any) {
            console.log('erro', e);
        } finally {
            setLoading(false);
        }
    }, [setGenres, setLoading, quantityPerPage])

    React.useEffect(() => {
        window.addEventListener('resize', () => setQuantityPerPage(window.innerWidth >= 900 ? 6 : 2));
        fetchData()
    }, [fetchData]);

    const _setGenre = (name: string) => {
        setGenre((genre === name) ? null : name);
    }

    if (loading || genres === null)
        return <Loader variant='light' />
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
                                        <Button variant={name === genre ? 'light' : 'outline-light'} className='shadow-lg' onClick={() => _setGenre(name)}>
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