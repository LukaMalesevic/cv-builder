import { useState } from "react";
import PropTypes from 'prop-types';

class ExperienceList{

    constructor(id, company = '', position = '', startDate = '', endDate = '', location = '', description = ''){
        this.id = id;
        this.company = company;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.description = description
    }
}

Experience.propTypes = {
    currentExperienceList: PropTypes.array.isRequired,
    updateExperienceList: PropTypes.func.isRequired
};

export default function Experience(props){

    let [currentSubsection, nextSubsection] = useState(false);
    let [currentFormState, nextFormState] = useState(false);
    let [currentExpListState, nextExpListState] = useState(false);
    let [currentUpdateState, nextUpdateState] = useState(false);
    let experience = new ExperienceList(props.currentExperienceList.length);
    let [currentExpEdit, nextExpEdit] = useState(experience);
    let sectionStyle;
    let openFormBtnStyle;
    let rotateArrowStyle;
    let experienceFormStyle;
    let ExpListStyle;

    function handleEditSection(event){
        let currentId = event.target.getAttribute('data-key');
        if(currentId < 0)
        {
            currentId *= -1;
            currentId--;
        }
        nextExpEdit(props.currentExperienceList[currentId]);
        nextExpListState(false);
        nextFormState(true);
        nextUpdateState(true);
    }

    function handleEyeDisplay(event){
        let currentId = event.target.getAttribute('data-key');
        let newExperienceList = [...props.currentExperienceList];
        if(currentId >= 0){
            let altId = currentId;
            currentId++;
            currentId *= -1;
            newExperienceList[altId].id = currentId;
        }else if(currentId < 0)
        {
            currentId *= -1;
            currentId--;
            newExperienceList[currentId].id = currentId;
        }
        props.updateExperienceList(newExperienceList);
        
    }


    function showExperienceList(element){
        let classOfEye = 'fa-solid fa-eye eye';
        if(element.id < 0) classOfEye = 'fa-solid fa-eye-slash eye';

        if(element.id !== null)
        return(
            <>
            <div key={element.id} data-key={element.id} className="section" onClick={(event) => handleEditSection(event)}>
                <h1>{element.company}</h1>
            </div>
            <i data-key={element.id} onClick={(event) => handleEyeDisplay(event)} className={classOfEye}></i>
            </>
        );
        else if(element.id === null) return null;
    }

    function addExperience(experience){
        let newExperienceList = [...props.currentExperienceList];
        newExperienceList.push(experience)
        props.updateExperienceList(newExperienceList);
    }

    function updateExperience(experience){
        let newExperienceList = [...props.currentExperienceList];
        
        if(currentExpEdit.id < 0)
        {
            currentExpEdit.id *= -1;
            currentExpEdit.id--;
        }
        newExperienceList[currentExpEdit.id].company = experience.company;
        newExperienceList[currentExpEdit.id].position = experience.position;
        newExperienceList[currentExpEdit.id].startDate = experience.startDate;
        newExperienceList[currentExpEdit.id].endDate = experience.endDate;
        newExperienceList[currentExpEdit.id].location = experience.location;
        newExperienceList[currentExpEdit.id].description = experience.description;

        let newExperience = new ExperienceList(props.currentExperienceList.length);
        nextExpEdit(newExperience);
        props.updateExperienceList(newExperienceList);
    }

    function deleteExperience(){
        let newExperienceList = [...props.currentExperienceList];
        if(currentExpEdit.id < 0)
        {
            currentExpEdit.id *= -1;
            currentExpEdit.id--;
        }
        newExperienceList[currentExpEdit.id].id = null;

        let newExperience = new ExperienceList(props.currentExperienceList.length);
        nextExpEdit(newExperience);
        props.updateExperienceList(newExperienceList);
    }

    if(currentSubsection){
        sectionStyle ={
            visibility: 'visible',
            height: '75px',
            marginTop: '-25px'
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
        experienceFormStyle = {
            display: 'flex',
            marginTop: '-10px'
        }
    }else{
        experienceFormStyle = {
            display: 'none'
        }
    }

    if(currentExpListState){
        ExpListStyle = {
            display: 'flex',
            marginTop: '-25px'
        }
    }else{
        ExpListStyle = {
            display: 'none'
        }
    }

    if(currentUpdateState)
    {
        experience.company = currentExpEdit.company;
        experience.position = currentExpEdit.position;
        experience.startDate = currentExpEdit.startDate;
        experience.endDate = currentExpEdit.endDate;
        experience.location = currentExpEdit.location;
        experience.description = currentExpEdit.description;
    }
    
        return (
        <form>
        <div onClick={() => {
            if(currentFormState === true) nextFormState(!currentFormState);
            if(currentFormState === false) nextExpListState(!currentExpListState);
            return nextSubsection(!currentSubsection);
        }} className="experience-container" >
        <i className="fa-solid fa-briefcase"></i>
        <h1>Experience</h1>
        <i className="fa-solid fa-chevron-down drop-down-experience" style={rotateArrowStyle}></i>
        </div>
        <div style={ExpListStyle} className="exp-section-container">
            {props.currentExperienceList.map((element) => showExperienceList(element))}
        </div>
        <div className="add-section-container" style={sectionStyle}>
        <input type="reset" onClick={() => {
            currentSubsection = !currentSubsection;
            currentExpEdit.company = '';
            currentExpEdit.position = '';
            currentExpEdit.startDate = '';
            currentExpEdit.endDate = '';
            currentExpEdit.location = '';
            currentExpEdit.description = '';
            nextExpListState(!currentExpListState);
            return nextFormState(!currentFormState);
        }} className="add-subsection-btn" style={openFormBtnStyle} value={'+ Experience'}/>
        </div>
        <div className="experience-details-container" style={experienceFormStyle}>
            <div className="input-container full-width">
                <label htmlFor="text">Company name</label>
                <input defaultValue={currentExpEdit.company} onChange={(event)=> experience.company = event.target.value } type="text" placeholder="Enter company name"/>
            </div>
            <div className="input-container full-width">
                <label htmlFor="text">Position title</label>
                <input defaultValue={currentExpEdit.position} onChange={(event)=> experience.position = event.target.value } type="text" placeholder="Enter position title"/>
            </div>
            <div className="input-container half-width">
                <label htmlFor="text">Start date</label>
                <input defaultValue={currentExpEdit.startDate} onChange={(event)=> experience.startDate = event.target.value } type="text" placeholder="Enter start date"/>
            </div>
            <div className="input-container half-width">
                <label htmlFor="text">End date</label>
                <input defaultValue={currentExpEdit.endDate} onChange={(event)=> experience.endDate = event.target.value } type="text" placeholder="Enter end date"/>
            </div>
            <div className="input-container full-width">
                <label htmlFor="text">Location</label>
                <input defaultValue={currentExpEdit.location} onChange={(event)=> experience.location = event.target.value } type="text" placeholder="Enter location"/>
            </div>
            <div className="input-container full-width">
                <label htmlFor="text">Description</label>
                <textarea className="full-width" defaultValue={currentExpEdit.description} onChange={(event)=> experience.description = event.target.value } type="text" placeholder="Enter description"/>
            </div>
            <div className="delete-save-btn-container">
                <button type="reset" onClick={() => {
                    if(currentUpdateState){
                        deleteExperience();
                    }
                    nextUpdateState(false);
                    currentSubsection = !currentSubsection;
                    nextExpListState(!currentExpListState);
                    return nextFormState(!currentFormState)

                }} className="delete-btn"><i className="fa-solid fa-trash"></i> Delete</button>
                <input onClick={() =>{
                    
                    if(currentUpdateState){
                        updateExperience(experience);
                        nextUpdateState(false);
                    }
                    else addExperience(experience);
                    nextExpListState(!currentExpListState);
                    return nextFormState(false);
                }} className="save-btn" type="reset" value={'Save'}/>
                <input onClick={() => { 
                    nextUpdateState(false);
                    currentSubsection = !currentSubsection;
                    nextExpListState(!currentExpListState);
                    return nextFormState(!currentFormState)}} type="reset" className="cancel-btn" value={'Cancel'}/>
            </div>
        </div>
        </form>
    );
}
