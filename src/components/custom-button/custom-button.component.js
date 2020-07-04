import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({text}) => {
    return <button className='btn btn--primary' >{text}</button>
};

export default CustomButton;