import ContentCustomizeBtn from "./ContentCustomizeBtn";
import ClearLoadButton from "./ClearLoadBtn";
import ContentSection from "./ContentSection";
import CustomizeSection from "./CustomizeSection";
import { useState } from "react";

export default function Application(){
    const [currentSection, nextSection] = useState('content');
    let [currentEducationList, updateEducationList] = useState([]);
    let [currentExperienceList, updateExperienceList] = useState([]);
    const [currentLayout, nextLayout] = useState('Top');
    const [currentColor, nextColor] = useState('#0E374E');
    const [currentFont, nextFont ] = useState('Sans');

    function setSection()
    {
        if(currentSection === 'content') return <ContentSection currentEducationList={currentEducationList} updateEducationList={updateEducationList} currentExperienceList={currentExperienceList} updateExperienceList={updateExperienceList} />
        else if(currentSection === 'customize') return <CustomizeSection currentLayout={currentLayout} nextLayout={nextLayout} currentColor={currentColor} nextColor={nextColor} currentFont={currentFont} nextFont={nextFont} />
    }

    return (
    <>
    <div className='edit-container'>
      <ContentCustomizeBtn section={nextSection}/>
    </div>
    <div className='edit-cv-container'>
      <ClearLoadButton/>
        {setSection()}
    </div>
    <div className='cv-container'></div>
    </>
    );
}