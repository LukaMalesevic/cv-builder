import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import PropTypes from 'prop-types';

ContentSection.propTypes = {
    currentEducationList: PropTypes.array.isRequired,
    updateEducationList: PropTypes.func.isRequired,
    currentExperienceList: PropTypes.array.isRequired,
    updateExperienceList: PropTypes.func.isRequired,
    currentName: PropTypes.string.isRequired,
    nextName: PropTypes.func.isRequired,
    currentEmail: PropTypes.string.isRequired,
    nextEmail: PropTypes.func.isRequired,
    currentAddress: PropTypes.string.isRequired,
    nextAddress: PropTypes.func.isRequired,
    currentPhone: PropTypes.string.isRequired,
    nextPhone: PropTypes.func.isRequired
};

export default function ContentSection(props)
{
    return(
        <div className="content-section">
            <PersonalDetails
            currentName={props.currentName}
            currentPhone={props.currentPhone}
            currentEmail={props.currentEmail}
            currentAddress={props.currentAddress}
            nextName={props.nextName}
            nextPhone={props.nextPhone}
            nextEmail={props.nextEmail}
            nextAddress={props.nextAddress} 
            />
            <Education currentEducationList={props.currentEducationList} updateEducationList={props.updateEducationList}/>
            <Experience currentExperienceList={props.currentExperienceList} updateExperienceList={props.updateExperienceList}/>
        </div>
    );
}

