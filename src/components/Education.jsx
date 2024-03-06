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

    // console.log(props.currentEducationList);
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
        <button type="reset" onClick={() => {
            currentSubsection = !currentSubsection;
            currentEduEdit = education;
            nextEduListState(!currentEduListState);
            return nextFormState(!currentFormState);
        }} className="add-subsection-btn" style={openFormBtnStyle}><i className="fa-solid fa-plus"></i>Education</button>
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
                <button className="delete-btn"><i className="fa-solid fa-trash"></i> Delete</button>
                <input onClick={() =>{
                    //CHECK IF CURRENT ID IS SAME AS ARRAY.LENGHT-1 IF YES ADD IF NOT REPLACE THAT ONE
                    addEducation(education);
                    nextEduListState(!currentEduListState);
                    return nextFormState(false);
                }} className="save-btn" type="reset" value={'Save'}/>
                <button onClick={() => { 
                    event.preventDefault();
                    currentSubsection = !currentSubsection;
                    nextEduListState(!currentEduListState);
                    return nextFormState(!currentFormState)}} className="cancel-btn">Cancel</button>
            </div>
        </div>
        </form>
    );
}
