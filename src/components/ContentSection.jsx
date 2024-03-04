import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";

export default function ContentSection()
{
    return(
        <div className="content-section">
            <PersonalDetails/>
            <Education/>
            <Experience/>
        </div>
    );
}