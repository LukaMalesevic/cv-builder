import PropTypes from 'prop-types';

Layout.propTypes = {
    currentLayout: PropTypes.string.isRequired,
    nextLayout: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    nextColor: PropTypes.func.isRequired
}


export default function Layout(props)
{
    let styleColorTop = {
        background: ` linear-gradient(to bottom, ${props.currentColor} 50%, white 50%)`  
    }
    let styleColorLeft = {
        background: ` linear-gradient(to right, ${props.currentColor} 50%, white 50%)`
    }
    let styleColorRight = {
        background: ` linear-gradient(to left, ${props.currentColor} 50%, white 50%)`
    }

    return(
        <div className="customize-container">
            <h1>Layout</h1>
            <div className="layout-options-container">
                    <div onClick={() => props.nextLayout('Top')} className="top-layout">
                        <div style={styleColorTop} className="top-square"></div>
                        <h2>Top</h2>
                    </div>
                    <div onClick={() => props.nextLayout('Left')} className="left-layout">
                        <div style={styleColorLeft} className="left-square"></div>
                        <h2>Left</h2>
                    </div>
                    <div onClick={() => props.nextLayout('Right')} className="right-layout">
                        <div style={styleColorRight} className="right-square"></div>
                        <h2>Right</h2>
                    </div>
            </div>
        </div>
    );
}