import PropTypes from 'prop-types';
import { useState } from 'react';

const buttonArray = [
    { id: 1, name: 'Content', height: '70px', width: '90px', icon: 'fa-regular fa-file-lines' },
    { id: 2, name: 'Customize', height: '70px', width: '90px', icon: 'fa-solid fa-pen-ruler' }
]


function SetButton(props) {

    const [currentFocus, nextFocus] = useState(false);
    
    const buttonStyle = {
        width: props.width,
        height: props.height,
        borderRadius: '15px'
    };

    if(currentFocus === true){
        buttonStyle.backgroundColor = 'var(--gray)';
        if(props.id === 1) props.section('content');
        else if(props.id === 2) props.section('customize');
    }else{
        buttonStyle.backgroundColor = 'white';
    }

    return (
        <button onFocus={() => nextFocus(!currentFocus)} onBlur={() => nextFocus(false)} className={props.className} style={buttonStyle}>
            <i className={props.icon}></i>
            <h1>{props.name}</h1>
        </button>
    );
}

SetButton.propTypes = {
    name: PropTypes.string.isRequired, 
    className: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    section: PropTypes.func.isRequired
};

ContentCustomizeBtn.propTypes = {
    section: PropTypes.func.isRequired
}

export default function ContentCustomizeBtn(props) {
    
    return (
        <div className='content-customize-btn-container'>
            {buttonArray.map(button => <SetButton className='content-customize-btn' key={button.id} id={button.id}
             name={button.name} icon={button.icon} height={button.height} width={button.width} section = {props.section}/>)}
        </div>
    );
}
