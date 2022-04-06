import '../styles/Bio.css';
import Menu from './Menu';
import me from '../images/me.jpeg';

const Title = (props) => {
    const headerHidden = props.headerHidden;

    function getRandomArbitrary(min, max) {
        let num = Math.random() * (max - min) + min;
        return num;
    }

    let starArray = [];
    for (let i = 0; i < 400; i++) {
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-50, 50);
        let wh = getRandomArbitrary(1, 5);

        starArray.push({ x: x, y: y, wh: wh });
    }

    let galaxyArray = [];
    for (let i = 0; i < 400; i++) {
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-15, 15);
        let wh = getRandomArbitrary(1, 2);

        galaxyArray.push({ x: x, y: y, wh: wh });
    }
    let coreBeltArray = [];
    for (let i = 0; i < 300; i++) {
        let x = getRandomArbitrary(-50, 50);
        let y = getRandomArbitrary(-10, 10);
        let wh = getRandomArbitrary(1, 2);

        coreBeltArray.push({ x: x, y: y, wh: wh });
    }

    let coreGalaxyArray = [];
    for (let i = 0; i < 100; i++) {
        let x = getRandomArbitrary(-30, 20);
        let y = getRandomArbitrary(-5, 5);
        let wh = getRandomArbitrary(1, 1);

        coreGalaxyArray.push({ x: x, y: y, wh: wh });
    }

    return (
        <>
            <div className={`header ${headerHidden ? 'header-hidden' : ''}`}>
                <div className='title'>
                    <h1>Ryan Maloney</h1>
                    <h2>Web Developer</h2>
                </div>
            </div>

            <div className='particle-container'>
                {starArray.map((star) => {
                    return (
                        <div
                            className='particle'
                            style={{
                                transform: `translate(${star.x}vw, ${star.y}vh)`,
                                width: `${star.wh}px`,
                                height: `${star.wh}px`,
                            }}
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
                            }}
                        ></div>
                    );
                })}
                {coreGalaxyArray.map((star) => {
                    return (
                        <div
                            className='particle'
                            style={{
                                transform: `translate(${star.x}vw, ${star.y}vh)`,
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
                                transform: `translate(${star.x}vw, ${star.y}vh)`,
                                width: `${star.wh}px`,
                                height: `${star.wh}px`,
                            }}
                        ></div>
                    );
                })}
            </div>
        </>
    );
};

export default Title;
