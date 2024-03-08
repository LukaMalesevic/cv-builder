import Color from "./Color";
import Layout from "./Layout";
import PropTypes from 'prop-types';

CustomizeSection.propTypes = {
    currentLayout: PropTypes.string.isRequired,
    nextLayout: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    nextColor: PropTypes.func.isRequired,
    currentFont: PropTypes.string.isRequired,
    nextFont: PropTypes.func.isRequired,
}

export default function CustomizeSection(props)
{
    return(
        <div className="customize-section">
            <Layout 
                currentLayout={props.currentLayout}
                nextLayout={props.nextLayout}
                currentColor={props.currentColor}
                nextColor={props.nextColor} 
                // currentFont={props.currentFont}
                // nextFont={props.nextFont}
            />
            <Color
                currentColor={props.currentColor}
                nextColor={props.nextColor} 
            />

        </div>
    );
}