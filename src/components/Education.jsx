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
    let [currentEduListState, nextEduListState] = useState(false);
    let [currentUpdateState, nextUpdateState] = useState(false);
    let education = new EducationList(props.currentEducationList.length);
    let [currentEduEdit, nextEduEdit] = useState(education);
    let sectionStyle;
    let openFormBtnStyle;
    let rotateArrowStyle;
    let educationFormStyle;
    let eduListStyle;

    function handleEditSection(event)
    {
        let currentId = event.target.getAttribute('data-key');
        nextEduEdit(props.currentEducationList[currentId]);
        nextEduListState(false);
        nextFormState(true);
        nextUpdateState(true);
    }

    function showEducationList(element){
        if(element.id !== null)
        return(
            <div key={element.id} data-key={element.id} className="section" onClick={(event) => handleEditSection(event)}>
                <h1>{element.school}</h1>
                <i className="fa-solid fa-eye"></i>
            </div>
        );
        else if(element.id === null) return null;
    }

    function addEducation(education){
        props.currentEducationList.push(education);
        props.updateEducationList(props.currentEducationList);
    }

    function updateEducation(education){
        let newEducationList = [...props.currentEducationList];
        newEducationList[currentEduEdit.id].school = education.school;
        newEducationList[currentEduEdit.id].degree = education.degree;
        newEducationList[currentEduEdit.id].startDate = education.startDate;
        newEducationList[currentEduEdit.id].endDate = education.endDate;
        newEducationList[currentEduEdit.id].location = education.location;

        let newEducation = new EducationList(props.currentEducationList.length);
        nextEduEdit(newEducation);
        props.updateEducationList(newEducationList);
    }

    function deleteEducation(){
        let newEducationList = [...props.currentEducationList];
        newEducationList[currentEduEdit.id].id = null;

        let newEducation = new EducationList(props.currentEducationList.length);
        nextEduEdit(newEducation);
        props.updateEducationList(newEducationList);
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

    if(currentEduListState){
        eduListStyle = {
            display: 'flex'
        }
    }else{
        eduListStyle = {
            display: 'none'
        }
    }

    if(currentUpdateState)
    {
        education.school = currentEduEdit.school;
        education.degree = currentEduEdit.degree;
        education.startDate = currentEduEdit.startDate;
        education.endDate = currentEduEdit.endDate;
        education.location = currentEduEdit.location;
    }
    
        return (
        <form>
        <div onClick={() => {
            if(currentFormState === true) nextFormState(!currentFormState);
            if(currentFormState === false) nextEduListState(!currentEduListState);
            return nextSubsection(!currentSubsection);
        }} className="education-container" >
        <i className="fa-solid fa-graduation-cap"></i>
        <h1>Education</h1>
        <i className="fa-solid fa-chevron-down drop-down-education" style={rotateArrowStyle}></i>
        </div>
        <div style={eduListStyle} className="edu-section-container">
            {props.currentEducationList.map((element) => showEducationList(element))}
        </div>
        <div className="add-section-container" style={sectionStyle}>
        <input type="reset" onClick={() => {
            currentSubsection = !currentSubsection;
            currentEduEdit.school = '';
            currentEduEdit.degree = '';
            currentEduEdit.startDate = '';
            currentEduEdit.endDate = '';
            currentEduEdit.location = '';
            nextEduListState(!currentEduListState);
            return nextFormState(!currentFormState);
        }} className="add-subsection-btn" style={openFormBtnStyle} value={'+ Education'}/>
        </div>
        <div className="education-details-container" style={educationFormStyle}>
            <div className="input-container full-width">
                <label htmlFor="text">School</label>
                <input defaultValue={currentEduEdit.school} onChange={(event)=> education.school = event.target.value } type="text" placeholder="Enter school / university"/>
            </div>
            <div className="input-container full-width">
                <label htmlFor="text">Degree</label>
                <input defaultValue={currentEduEdit.degree} onChange={(event)=> education.degree = event.target.value } type="text" placeholder="Enter degree / Field of study"/>
            </div>
            <div className="input-container half-width">
                <label htmlFor="text">Start date</label>
                <input defaultValue={currentEduEdit.startDate} onChange={(event)=> education.startDate = event.target.value } type="text" placeholder="Enter start date"/>
            </div>
            <div className="input-container half-width">
                <label htmlFor="text">End date</label>
                <input defaultValue={currentEduEdit.endDate} onChange={(event)=> education.endDate = event.target.value } type="text" placeholder="Enter end date"/>
            </div>
            <div className="input-container full-width">
                <label htmlFor="text">Location</label>
                <input defaultValue={currentEduEdit.location} onChange={(event)=> education.location = event.target.value } type="text" placeholder="Enter location"/>
            </div>
            <div className="delete-save-btn-container">
                <button type="reset" onClick={() => {
                    if(currentUpdateState){
                        deleteEducation();
                    }
                    nextUpdateState(false);
                    currentSubsection = !currentSubsection;
                    nextEduListState(!currentEduListState);
                    return nextFormState(!currentFormState)

                }} className="delete-btn"><i className="fa-solid fa-trash"></i> Delete</button>
                <input onClick={() =>{
                    
                    if(currentUpdateState){
                        updateEducation(education);
                        nextUpdateState(false);
                    }
                    else addEducation(education);
                    nextEduListState(!currentEduListState);
                    return nextFormState(false);
                }} className="save-btn" type="reset" value={'Save'}/>
                <input onClick={() => { 
                    nextUpdateState(false);
                    currentSubsection = !currentSubsection;
                    nextEduListState(!currentEduListState);
                    return nextFormState(!currentFormState)}} type="reset" className="cancel-btn" value={'Cancel'}/>
            </div>
        </div>
        </form>
    );
}
