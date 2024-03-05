import ContentCustomizeBtn from "./ContentCustomizeBtn";
import ClearLoadButton from "./ClearLoadBtn";
import ContentSection from "./ContentSection";
import CustomizeSection from "./CustomizeSection";
import { useState } from "react";

export default function Application(){
    const [currentSection, nextSection] = useState('content');
    let [currentEducationList, updateEducationList] = useState([]);

    function setSection()
    {
        if(currentSection === 'content') return <ContentSection currentEducationList={currentEducationList} updateEducationList={updateEducationList} />
        else if(currentSection === 'customize') return <CustomizeSection/>
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