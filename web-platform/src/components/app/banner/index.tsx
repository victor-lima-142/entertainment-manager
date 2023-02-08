import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./banner.scss"

const Banner = (props: any): JSX.Element => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number, e: any): void => setIndex(selectedIndex);

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {['banner-1', 'banner-2', 'banner-3'].map((banner: string, index: any) =>
                <Carousel.Item>
                    <img className="banner-img" src={require(`../../../assets/img/${banner}.png`)} key={index} alt={index+'-'+banner} />
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default Banner;