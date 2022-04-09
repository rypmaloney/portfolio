import './StarField.css';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

const StarField = (props) => {
    //Need to calculate page height so that starfield extends onto pages longer than 100vh
    const [pageHeight, setPageHeight] = useState(1700);
    const [starArray, setStarArray] = useState([]);

    //set the intial star array. Position based on height of page.
    useEffect(() => {
        let startingStarArray = createStarArray();
        setStarArray(startingStarArray);
    }, []);

    //Everytime the main content changes move the array and transition
    useEffect(() => {
        if (starArray.length > 1) {
            moveStarArray(starArray);
        }
    }, [props.selectedContent]);

    function getRandomArbitrary(min, max) {
        let num = Math.random() * (max - min) + min;

        return num;
    }

    const createStarArray = () => {
        let starArray = [];

        for (let i = 0; i < 400; i++) {
            let x = getRandomArbitrary(-50, 50);
            let y = getRandomArbitrary(-50, 50);
            let wh = getRandomArbitrary(1, 3);
            //Set intial with id
            starArray.push({ x: x, y: y, wh: wh, id: uniqid() });
        }
        return starArray;
    };

    const moveStarArray = (starArray) => {
        let newStarArray = starArray.slice();

        for (let i = 0; i < 400; i++) {
            //fill full page with these stars

            let x = getRandomArbitrary(-50, 50);
            let y = getRandomArbitrary(-50, 50);
            let wh = getRandomArbitrary(1, 3);
            //use id from original array, this ensures a transition instead of rerendering a fresh array
            newStarArray[i] = { x: x, y: y, wh: wh, id: starArray[i].id };
        }
        setStarArray(newStarArray);
    };

    return (
        <div className='particle-container'>
            {starArray.map((star) => {
                return (
                    <div
                        className='particle'
                        style={{
                            transform: `translate(${star.x}vw, ${star.y}vh)`,
                            width: `${star.wh}px`,
                            height: `${star.wh}px`,
                            cursor: `${star.wh}px`,
                        }}
                        onClick={() => console.log(`star!`)}
                        key={star.id}
                    ></div>
                );
            })}
        </div>
    );
};

export default StarField;
