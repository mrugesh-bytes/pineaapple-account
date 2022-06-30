import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './Slider.module.css';
import iconKey from '../../../images/icon-key.svg';
import CardImg from '../../../images/units-card.png';
import { AnyIfEmpty } from 'react-redux';

interface ISlider {
    carouselBanner: string;
    price: number;
}

const Slider = (props: ISlider) => {
    const images = props?.carouselBanner?.split(',');

    return (
        <div>
            <div className={styles.sliderContainer}>
                {' '}
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} emulateTouch>
                    {images &&
                        images.map((item: AnyIfEmpty<object>, index: number) => {
                            return (
                                <div className={styles.sliderItem} key={index}>
                                    <img className={styles.banner} src={item ? item : CardImg} />
                                    <span className={styles.inUse}>
                                        <img src={iconKey} alt="Key" />
                                        In use
                                    </span>
                                    <span className={styles.price}>{props.price}</span>
                                </div>
                            );
                        })}
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;
