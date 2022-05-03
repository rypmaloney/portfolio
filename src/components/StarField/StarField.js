import './StarField.css';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

const StarField = (props) => {
    const [starArray, setStarArray] = useState([]);
    const [galaxyArray, setGalaxyArray] = useState([]);
    const [coreArray, setCoreArray] = useState([]);

    //set the intial star array. Position based on height of page.
    useEffect(() => {
        let startingStarArray = createStarArray(100, 50);
        let startingGalaxyArray = createStarArray(150, 15);
        setStarArray(startingStarArray);
        setGalaxyArray(startingGalaxyArray);
    }, []);

    //Everytime the main content changes move the array and transition
    useEffect(
        () => {
            if (starArray.length > 1) {
                let movedStarArray = moveStarArray(starArray, 50);
                setStarArray(movedStarArray);
                let movedGalaxyArray = moveStarArray(galaxyArray, 15);
                setGalaxyArray(movedGalaxyArray);
            }
            //change star arrays anytime the focused content section changes
        },
        [
            //props.selectedContent
        ]
    );

    function getRandomArbitrary(min, max) {
        let num = Math.random() * (max - min) + min;
        return num;
    }

    const createStarArray = (numberOfStars, magnitude) => {
        let starArray = [];

        for (let i = 0; i < numberOfStars; i++) {
            let x = getRandomArbitrary(-50, 50);
            //magnitude is distance from center (vh)
            let y = getRandomArbitrary(-magnitude, magnitude);
            let wh = getRandomArbitrary(1, 3);
            //Set intial with id
            starArray.push({ x: x, y: y, wh: wh, id: uniqid() });
        }
        return starArray;
    };

    const moveStarArray = (array, magnitude) => {
        let newStarArray = array.slice();

        for (let i = 0; i < array.length; i++) {
            let x = getRandomArbitrary(-50, 50);
            //magnitude is distance from center (vh)
            let y = getRandomArbitrary(-magnitude, magnitude);
            let wh = getRandomArbitrary(1, 3);
            //use id from original array, this ensures a transition instead of rerendering a fresh array
            newStarArray[i] = { x: x, y: y, wh: wh, id: array[i].id };
        }

        return newStarArray;
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
            {galaxyArray.map((star) => {
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
