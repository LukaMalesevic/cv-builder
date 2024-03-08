import PropTypes from 'prop-types';

Color.propTypes = {
    currentColor: PropTypes.string.isRequired,
    nextColor: PropTypes.func.isRequired
}


export default function Color(props)
{
    return(
        <div className="customize-container">
            <h1>Color</h1>
            <div className='select-color-container'>
                <label htmlFor="colorPicker">Accent Color</label>
                <input id='colorPicker' type="color" value={props.currentColor} onChange={(event) => props.nextColor(event.target.value)}/>
            </div>
        </div>
    );
}