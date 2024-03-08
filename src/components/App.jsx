import ContentCustomizeBtn from "./ContentCustomizeBtn";
import ClearLoadButton from "./ClearLoadBtn";
import ContentSection from "./ContentSection";
import CustomizeSection from "./CustomizeSection";
import { useState } from "react";
import CV from "./CV";

export default function Application(){
    const [currentSection, nextSection] = useState('content');
    let [currentEducationList, updateEducationList] = useState([]);
    let [currentExperienceList, updateExperienceList] = useState([]);
    const [currentLayout, nextLayout] = useState('top');
    const [currentColor, nextColor] = useState('#0E374E');
    const [currentFont, nextFont ] = useState('sans-serif');
    const [currentName, nextName] = useState('');
    const [currentEmail, nextEmail] = useState('');
    const [currentPhone, nextPhone] = useState('');
    const [currentAddress, nextAddress] = useState('');

    function setSection()
    {
        if(currentSection === 'content') return <ContentSection 
        currentEducationList={currentEducationList}
        updateEducationList={updateEducationList}
        currentExperienceList={currentExperienceList} 
        updateExperienceList={updateExperienceList}
        currentName={currentName}
        currentPhone={currentPhone}
        currentEmail={currentEmail}
        currentAddress={currentAddress}
        nextName={nextName}
        nextPhone={nextPhone}
        nextEmail={nextEmail}
        nextAddress={nextAddress} />
        else if(currentSection === 'customize') return <CustomizeSection
        currentLayout={currentLayout} nextLayout={nextLayout} 
        currentColor={currentColor} nextColor={nextColor} 
        currentFont={currentFont} nextFont={nextFont} />
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
    <div className='cv-container'>
      <CV 
      currentEducationList={currentEducationList}
      updateEducationList={updateEducationList} 
      currentExperienceList={currentExperienceList} 
      updateExperienceList={updateExperienceList}
      currentLayout={currentLayout} 
      nextLayout={nextLayout} 
      currentColor={currentColor} 
      nextColor={nextColor} 
      currentFont={currentFont} 
      nextFont={nextFont}
      currentName={currentName}
      currentPhone={currentPhone}
      currentEmail={currentEmail}
      currentAddress={currentAddress}
      nextName={nextName}
      nextPhone={nextPhone}
      nextEmail={nextEmail}
      nextAddress={nextAddress}
      />
    </div>
    </>
    );
}