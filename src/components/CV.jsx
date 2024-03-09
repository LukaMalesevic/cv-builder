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
    let detailsTextStyle;

    if(props.currentLayout === 'left' || props.currentLayout === 'right'){
        detailsTextStyle = {
            maxWidth: '150px',
            minWidth: '150px'
        }
    }else if(props.currentLayout === 'top'){
        detailsTextStyle = {
            minWidth: '505px'
        }
    }

    function setEducation(section){

        if((section.id !== null && section.id >= 0) && eduValidation === false)
        {
            eduValidation = true;
            return(
                <div className='align-center'>
                <div className='content-title'>
                    <h1>Education</h1>
                </div>
                <div className='date-place-text'>
                    <h2>{section.startDate} - {section.endDate}</h2>
                    <h2>{section.location}</h2>
                </div>
                <div className='details-text' style={detailsTextStyle}>
                    <h2 className='bold'>{section.school}</h2>
                    <h2>{section.degree}</h2>
                </div>
                </div>
            );
        }else if(section.id !== null && section.id >= 0){
            return(
                <div className='align-center'>
                <div className='date-place-text'>
                    <h2>{section.startDate} - {section.endDate}</h2>
                    <h2>{section.location}</h2>
                </div>
                <div className='details-text' style={detailsTextStyle}>
                    <h2 className='bold'>{section.school}</h2>
                    <h2>{section.degree}</h2>
                </div>
                </div>
            );
        }
   
    }
    
    function setExperience(section){
        
        if((section.id !== null && section.id >= 0) && expValidation === false)
        {
            expValidation = true;
            return(
                <div className='align-center'>
                <div className='content-title'>
                    <h1>Experience</h1>
                </div>
                <div className='date-place-text'>
                    <h2>{section.startDate} - {section.endDate}</h2>
                    <h2>{section.location}</h2>
                </div>
                <div className='details-text' style={detailsTextStyle}>
                    <h2 className='bold'>{section.company}</h2>
                    <h2>{section.position}</h2>
                    <h2>{section.description}</h2>
                </div>
                </div>
            );
        }else if(section.id !== null && section.id >= 0){
            return(
                <div className='align-center'>
                <div className='date-place-text'>
                    <h2>{section.startDate} - {section.endDate}</h2>
                    <h2>{section.location}</h2>
                </div>
                <div className='details-text' style={detailsTextStyle}>
                    <h2 className='bold'>{section.company}</h2>
                    <h2>{section.position}</h2>
                    <h2>{section.description}</h2>
                </div>
                </div>
            );
        }
   
    }
    

    if(props.currentLayout === 'top'){
        layoutStyle = {
            width: '100%',
            minHeight: '25px',
            padding: '40px 0 30px 0',
            boxSizing: 'border-box',
            backgroundColor: props.currentColor,
            fontFamily: props.currentFont
        }
        personalDetailsStyle = {
            display: 'flex',
            flexDirection: 'row'
        }
        textStyle = {
            minHeight: '100px',
            padding: '40px 0 30px 0',
            fontFamily: props.currentFont
        }
    }else if(props.currentLayout === 'left'){
        layoutStyle = {
            width: '40%',
            minHeight: '100%',
            padding: '40px 20px 30px 20px',
            boxSizing: 'border-box',
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
            padding: '40px 1px 30px 0px',
            fontFamily: props.currentFont,
            float: 'right',
            position: 'relative',
            top: '-100%'
        }
    }else if(props.currentLayout === 'right'){
        layoutStyle = {
            width: '40%',
            minHeight: '100%',
            padding: '40px 20px 30px 20px',
            boxSizing: 'border-box',
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
            padding: '40px 1px 30px 0px',
            fontFamily: props.currentFont,
            float: 'left',
            position: 'relative',
            top: '-100%'
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
        <div className='align-center' style={textStyle}>
            {props.currentEducationList.map((element, index) => setEducation(element, index))}
            {props.currentExperienceList.map((element, index) => setExperience(element, index))}
        </div>
        </>
    );
}