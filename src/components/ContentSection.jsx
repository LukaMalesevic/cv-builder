import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import PropTypes from 'prop-types';

ContentSection.propTypes = {
    currentEducationList: PropTypes.array.isRequired,
    updateEducationList: PropTypes.func.isRequired,
    currentExperienceList: PropTypes.array.isRequired,
    updateExperienceList: PropTypes.func.isRequired
};

export default function ContentSection(props)
{
    return(
        <div className="content-section">
            <PersonalDetails/>
            <Education currentEducationList={props.currentEducationList} updateEducationList={props.updateEducationList}/>
            <Experience currentExperienceList={props.currentExperienceList} updateExperienceList={props.updateExperienceList}/>
        </div>
    );
}

