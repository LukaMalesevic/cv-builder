import { useState } from "react";
import PropTypes from 'prop-types';

class EducationList{

    constructor(id, school = '', degree = '', startDate = '', endDate = '', location = ''){
        this.id = id;
        this.school = school;
        this.degree = degree;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
    }
}

Education.propTypes = {
    currentEducationList: PropTypes.array.isRequired,
    updateEducationList: PropTypes.func.isRequired
};

export default function Education(props){

    let [currentSubsection, nextSubsection] = useState(false);
    let [currentFormState, nextFormState] = useState(false);
    let education = new EducationList(props.currentEducationList.length);
    let sectionStyle;
    let openFormBtnStyle;
    let rotateArrowStyle;
    let educationFormStyle;

    function showEducationList(element){
        return(
            <div key={element.id} className="section">
                <h1>{element.school}</h1>
                <i className="fa-solid fa-eye"></i>
            </div>
        );
    }

    function addEducation(education){
        props.currentEducationList.push(education);
        props.updateEducationList(props.currentEducationList);
    }

    if(currentSubsection){
        sectionStyle ={
            visibility: 'visible',
            height: '75px'
        }
        openFormBtnStyle = {
            visibility: 'visible',
            bottom: '25px'
        }
        rotateArrowStyle = {
            rotate: '180deg'
        }
    }else{
        sectionStyle = {
            visibility: 'hidden',
            height: '0px'
        }
        openFormBtnStyle = {
            visibility: 'hidden'
        }
    }

    if(currentFormState){
        educationFormStyle = {
            display: 'flex'
        }
    }else{
        educationFormStyle = {
            display: 'none'
        }
    }
        return (
        <>
        <div onClick={() => {
            if(currentFormState === true) nextFormState(!currentFormState);
            return nextSubsection(!currentSubsection);
        }} className="education-container" >
        <i className="fa-solid fa-graduation-cap"></i>
        <h1>Education</h1>
        <i className="fa-solid fa-chevron-down drop-down-education" style={rotateArrowStyle}></i>
        </div>
        <div className="edu-section-container">
            {props.currentEducationList.map((element) => showEducationList(element))}
        </div>
        <div className="add-section-container" style={sectionStyle}>
        <button onClick={() => {
            currentSubsection = !currentSubsection;
            return nextFormState(!currentFormState);
        }} className="add-subsection-btn" style={openFormBtnStyle}><i className="fa-solid fa-plus"></i>Education</button>
        </div>
        <div className="education-details-container" style={educationFormStyle}>
            <div className="input-container full-width">
                <label htmlFor="text">School</label>
                <input onChange={(event)=> education.school = event.target.value } type="text" placeholder="Enter school / university"/>
            </div>
            <div className="input-container full-width">
                <label htmlFor="text">Degree</label>
                <input onChange={(event)=> education.degree = event.target.value } type="text" placeholder="Wnter degree / Field of study"/>
            </div>
            <div className="input-container half-width">
                <label htmlFor="text">Start date</label>
                <input onChange={(event)=> education.startDate = event.target.value } type="text" placeholder="Enter start date"/>
            </div>
            <div className="input-container half-width">
                <label htmlFor="text">End date</label>
                <input onChange={(event)=> education.endDate = event.target.value } type="text" placeholder="Enter end date"/>
            </div>
            <div className="input-container full-width">
                <label htmlFor="text">Location</label>
                <input onChange={(event)=> education.location = event.target.value } type="text" placeholder="Enter location"/>
            </div>
            <div className="delete-save-btn-container">
                <button className="delete-btn"><i className="fa-solid fa-trash"></i> Delete</button>
                <button onClick={() =>{
                    addEducation(education);
                    return nextFormState(false);
                }} className="save-btn">Save</button>
                <button onClick={() => { return nextFormState(!currentFormState)}} className="cancel-btn">Cancel</button>
            </div>
        </div>
        </>
    );
}
