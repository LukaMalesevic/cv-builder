import PropTypes from 'prop-types';

CV.propTypes = {
    currentFont: PropTypes.string.isRequired,
    nextFont: PropTypes.func.isRequired,
    currentLayout: PropTypes.string.isRequired,
    nextLayout: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    nextColor: PropTypes.func.isRequired,
    currentName: PropTypes.string.isRequired,
    nextName: PropTypes.func.isRequired,
    currentEmail: PropTypes.string.isRequired,
    nextEmail: PropTypes.func.isRequired,
    currentAddress: PropTypes.string.isRequired,
    nextAddress: PropTypes.func.isRequired,
    currentPhone: PropTypes.string.isRequired,
    nextPhone: PropTypes.func.isRequired,
    currentExperienceList: PropTypes.array.isRequired,
    updateExperienceList: PropTypes.func.isRequired,
    currentEducationList: PropTypes.array.isRequired,
    updateEducationList: PropTypes.func.isRequired
}


export default function CV(props){

    let layoutStyle;
    let personalDetailsStyle;
    let textStyle;
    let eduValidation = false;
    let expValidation = false;

    function setEducation(section, index){

        if(section.id !== null && eduValidation === false)
        {
            eduValidation = true;
            return(
                <div className='align-center'>
                <div className='content-title'>
                    <h1>Education</h1>
                </div>
                <div className='date-place-text'>
                    {section.startDate} {section.endDate}
                    {section.location}
                </div>
                <div className='details-text'>
                    {section.school}
                    {section.degree}
                </div>
                </div>
            );
        }
   
    }
    
    // function setExperience(section){
    
    // }
    

    if(props.currentLayout === 'top'){
        layoutStyle = {
            width: '100%',
            minHeight: '25px',
            padding: '40px 0 30px 0',
            backgroundColor: props.currentColor,
            fontFamily: props.currentFont
        }
        personalDetailsStyle = {
            display: 'flex',
            flexDirection: 'row'
        }
        textStyle = {
            width: '100%',
            minHeight: '100px',
            padding: '40px 0 30px 0',
            fontFamily: props.currentFont
        }
    }else if(props.currentLayout === 'left'){
        layoutStyle = {
            width: '40%',
            minHeight: '100%',
            padding: '40px 20px 30px 20px',
            float: 'left',
            backgroundColor: props.currentColor,
            fontFamily: props.currentFont
        }
        personalDetailsStyle = {
            display: 'flex',
            flexDirection: 'column'
        }
        textStyle = {
            width: '60%',
            minHeight: '100px',
            padding: '40px 20px 30px 20px',
            fontFamily: props.currentFont,
            float: 'right'
        }
    }else if(props.currentLayout === 'right'){
        layoutStyle = {
            width: '40%',
            minHeight: '100%',
            padding: '40px 20px 30px 20px',
            float: 'right',
            backgroundColor: props.currentColor,
            fontFamily: props.currentFont
        }
        personalDetailsStyle = {
            display: 'flex',
            flexDirection: 'column'
        }
        textStyle = {
            width: '60%',
            minHeight: '100px',
            padding: '40px 20px 30px 20px',
            fontFamily: props.currentFont,
            float: 'left'
        }
    }

    return(
        <>
        <div style={layoutStyle}>
            <h1 className='cv-name'>{props.currentName}</h1>
            <div style={personalDetailsStyle} className='personal-details-text'>
                <h2>{props.currentEmail !== '' ? <i className="fa-solid fa-envelope"></i> : null} {props.currentEmail}</h2>
                <h2>{props.currentPhone !== '' ? <i className="fa-solid fa-phone"></i> : null} {props.currentPhone}</h2>
                <h2>{props.currentAddress !== '' ? <i className="fa-solid fa-location-dot"></i> : null}  {props.currentAddress}</h2>
            </div>
        </div>
        <div style={textStyle}>
            {props.currentEducationList.map((element, index) => setEducation(element, index))}
            {/* {props.currentExperienceList.map((element, index) => setExperience(element, index))} */}
        </div>
        </>
    );
}