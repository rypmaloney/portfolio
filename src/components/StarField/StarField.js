import './StarField.css';
import { useEffect, useState } from 'react';

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
            console.log(pageHeight);
        }
    });
    function getRandomArbitrary(min, max) {
        let num = Math.random() * (max - min) + min;

        return num;
    }

    let starArray = [];
    for (let i = 0; i < 400; i++) {
        //fill full page with these stars
        let halfPageHeight = pageHeight / 2;
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-halfPageHeight, halfPageHeight);
        let wh = getRandomArbitrary(1, 3);

        starArray.push({ x: x, y: y, wh: wh });
    }

    let galaxyArray = [];
    for (let i = 0; i < 400; i++) {
        let thirdPageHeight = pageHeight / 8;
        //fill half page with these stars
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-thirdPageHeight, thirdPageHeight);
        let wh = getRandomArbitrary(1, 2);

        galaxyArray.push({ x: x, y: y, wh: wh });
    }
    let coreBeltArray = [];
    for (let i = 0; i < 300; i++) {
        let quarterPageHeight = pageHeight / 16;
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-quarterPageHeight, quarterPageHeight);
        let wh = getRandomArbitrary(1, 2);

        coreBeltArray.push({ x: x, y: y, wh: wh });
    }

    let coreGalaxyArray = [];
    let eighthPageHeight = pageHeight / 20;
    for (let i = 0; i < 400; i++) {
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-eighthPageHeight, eighthPageHeight);
        let wh = getRandomArbitrary(1, 1);

        coreGalaxyArray.push({ x: x, y: y, wh: wh });
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
                    ></div>
                );
            })}

            {coreGalaxyArray.map((star) => {
                return (
                    <div
                        className='particle'
                        style={{
                            transform: `translate(${star.x}vw, ${star.y}px)`,
                            width: `${star.wh}px`,
                            height: `${star.wh}px`,
                        }}
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
                    ></div>
                );
            })}
        </div>
    );
};

export default StarField;
