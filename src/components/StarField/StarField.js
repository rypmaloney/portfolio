import './StarField.css';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

const StarField = () => {
    //Need to calculate page height so that starfield extends onto pages longer than 100vh
    const [pageHeight, setPageHeight] = useState(1700);

    useEffect(() => {
        //find the height of the particle container, which defaults to full body height
        let currentPageHeight = document.querySelectorAll(
            '.particle-container'
        )[0].offsetHeight;

        if (currentPageHeight !== undefined) {
            setPageHeight(currentPageHeight);
        }
    });

    function getRandomArbitrary(min, max) {
        let num = Math.random() * (max - min) + min;

        return num;
    }

    let starArray = [];
    let halfPageHeight = pageHeight / 2;
    for (let i = 0; i < 400; i++) {
        //fill full page with these stars

        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-halfPageHeight, halfPageHeight);
        let wh = getRandomArbitrary(1, 3);

        starArray.push({ x: x, y: y, wh: wh, id: uniqid() });
    }

    let galaxyArray = [];
    let sixteenPageHeight = pageHeight / 8;
    for (let i = 0; i < 300; i++) {
        //fill half page with these stars
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-sixteenPageHeight, sixteenPageHeight);
        let wh = getRandomArbitrary(1, 2);

        galaxyArray.push({ x: x, y: y, wh: wh, id: uniqid() });
    }
    let coreBeltArray = [];
    let thiryPageHeight = pageHeight / 30;
    for (let i = 0; i < 200; i++) {
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-thiryPageHeight, thiryPageHeight);
        let wh = getRandomArbitrary(1, 2);

        coreBeltArray.push({ x: x, y: y, wh: wh, id: uniqid() });
    }

    return (
        <div className='particle-container'>
            {starArray.map((star) => {
                return (
                    <div
                        className='particle'
                        style={{
                            transform: `translate(${star.x}vw, ${star.y}px)`,
                            width: `${star.wh}px`,
                            height: `${star.wh}px`,
                            cursor: `${star.wh}px`,
                        }}
                        onClick={() => console.log(`star!`)}
                        // key={star.id}
                    ></div>
                );
            })}
            {galaxyArray.map((star) => {
                return (
                    <div
                        className='particle'
                        style={{
                            transform: `translate(${star.x}vw, ${star.y}px)`,
                            width: `${star.wh}px`,
                            height: `${star.wh}px`,
                        }}
                        // key={star.id}
                    ></div>
                );
            })}

            {coreBeltArray.map((star) => {
                return (
                    <div
                        className='particle'
                        style={{
                            transform: `translate(${star.x}vw, ${star.y}px)`,
                            width: `${star.wh}px`,
                            height: `${star.wh}px`,
                        }}
                        // key={star.id}
                    ></div>
                );
            })}
        </div>
    );
};

export default StarField;
