import './Projects.css';
import { useState } from 'react';

const ImageCarousel = () => {
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
                    <img src='https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'></img>
                </div>
                <div className={imgTwoClass} onClick={switchImg}>
                    <img src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'></img>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
