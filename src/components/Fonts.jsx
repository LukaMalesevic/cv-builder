import PropTypes from 'prop-types';

Fonts.propTypes = {
    currentFont: PropTypes.string.isRequired,
    nextFont: PropTypes.func.isRequired
}



export default function Fonts(props)
{
    let serifStyle = null;
    let sansStyle = null;
    let monoStyle = null;

    if(props.currentFont === 'serif')
    {
        serifStyle = {
            backgroundColor: '#0E374E',
            color: 'white'
        };
    } 
    if(props.currentFont === 'sans-serif'){
        sansStyle = {
            backgroundColor: '#0E374E',
            color: 'white'
        };
    }
    if(props.currentFont === 'monospace'){
        monoStyle = {
            backgroundColor: '#0E374E',
            color: 'white'
        };
    }

    return(
        <div className="customize-container">
            <h1>Fonts</h1>
            <div className='fonts-container'>
                <button style={serifStyle} onClick={() => {props.nextFont('serif')}} className='fonts-square'>
                    <h1 className='serif'>Aa</h1>
                    <h2 className='serif'>Serif</h2>
                </button>
                <button style={sansStyle} onClick={() => {props.nextFont('sans-serif')}}  className='fonts-square'>
                    <h1 className='sans'>Aa</h1>
                    <h2 className='sans'>Sans</h2>
                </button>
                <button style={monoStyle} onClick={() => {props.nextFont('monospace')}}  className='fonts-square'>
                    <h1 className='mono'>Aa</h1>
                    <h2 className='mono'>Mono</h2>
                </button>
            </div>
        </div>
    );
}