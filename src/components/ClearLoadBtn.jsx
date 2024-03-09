import PropTypes from 'prop-types';

ClearLoadButton.propTypes = {
    resetStatesOnDefault: PropTypes.func.isRequired,
    setStatesOnExample : PropTypes.func.isRequired
}

export default function ClearLoadButton(props)
{
    return (
        <div className="clear-load-btn">
            <button onClick={() => props.resetStatesOnDefault()} className="clear-btn"><i className="fa-solid fa-trash"></i> Clear resume</button>
            <button onClick={() => props.setStatesOnExample()} className="load-btn">Load example</button>
        </div>
    );
}