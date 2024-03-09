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

    let educationArrayExample = [
      {
        id: 0,
        school: 'London City University',
        degree: 'Bachelors in Economics',
        startDate: '08/2020',
        endDate: 'present',
        location: 'New York City, US'
      },
      {
        id: -2,
        school: 'Hidden University',
        degree: "Master's Degree in Math",
        startDate: '08/2020',
        endDate: 'present',
        location: 'New York City, US'
      }
    ];
    
    let experienceArrayExample = [
      {
        id: 0,
        company: 'Umbrella Inc.',
        position: 'UX & UI Designer',
        startDate: '08/2020',
        endDate: 'present',
        location: 'New York City, US',
        description: `Designed and prototyped 
                      user interface patterns for various 
                      clients in various industries, ranging
                      from self-service apps within the 
                      telecommunications-sector to mobile
                      games for IOS and Android`
      },
      {
        id: 1,
        company: 'Black Mesa Labs',
        position: "UX Research Assistant",
        startDate: '04/2018',
        endDate: '02/2019',
        location: 'Berlin, Germany',
        description: `Supported senior
                      researchers on accessibility 
                      standards for the open web. 
                      Created and usability tested 
                      wireframes and prototypes. 
                      Produced interactive documentation 
                      for quick onboarding of new researchers.`
      }
    ];


    function resetStatesOnDefault(){
      nextSection('content');
      updateEducationList([]);
      updateExperienceList([]);
      nextLayout('top');
      nextColor('#0E374E');
      nextFont('sans-serif');
      nextName('');
      nextEmail('');
      nextPhone('');
      nextAddress('');
    }

    function setStatesOnExample(){
      nextSection('content');
      updateEducationList(educationArrayExample);
      updateExperienceList(experienceArrayExample);
      nextLayout('top');
      nextColor('#0E374E');
      nextFont('sans-serif');
      nextName('Josephine Meyers');
      nextEmail('josephine.meyers@mail.uk');
      nextPhone('+44 3245 5521 5521');
      nextAddress('London, UK');
    }

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
      <ClearLoadButton resetStatesOnDefault={resetStatesOnDefault}
        setStatesOnExample={setStatesOnExample} />
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