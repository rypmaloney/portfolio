import './Title.css';
import { useEffect } from 'react';

const Title = (props) => {
    const headerHidden = props.headerHidden;

    return (
        <>
            <div className={`header ${headerHidden ? 'header-hidden' : ''}`}>
                <div className='title'>
                    <h1>Ryan Maloney</h1>
                    <h2>Web Developer</h2>
                </div>
            </div>
        </>
    );
};

export default Title;
