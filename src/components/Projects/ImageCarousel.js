import './Projects.css';
import { useState } from 'react';

const ImageCarousel = (props) => {
    const { imgOne, imgTwo } = props;
    const [imgOneClass, setImgOneClass] = useState('img_fore');
    const [imgTwoClass, setImgTwoClass] = useState('img_back');

    const switchImg = () => {
        imgOneClass === 'img_fore'
            ? setImgOneClass('img_back')
            : setImgOneClass('img_fore');
        imgTwoClass === 'img_fore'
            ? setImgTwoClass('img_back')
            : setImgTwoClass('img_fore');
    };

    return (
        <div className='img_carousel_wrapper'>
            <div className='image_carousel'>
                <div className={imgOneClass} onClick={switchImg}>
                    <img src={imgOne}></img>
                </div>
                <div className={imgTwoClass} onClick={switchImg}>
                    <img src={imgTwo}></img>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
