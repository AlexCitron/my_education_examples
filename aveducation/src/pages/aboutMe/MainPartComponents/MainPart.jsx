import ProfessionalField from "./ProfessionalField.jsx";
import StudyingInformation from "./StudyingInformation.jsx";
import LastJob from "./LastJob.jsx";
import Courses from "./Courses.jsx";
import {useState} from "react";
import PreviousJob from "./PreviousJobs.jsx";
import Hobbies from "./Hobbies.jsx";

export default function MainPart() {
    const [isOpen   , setIsOpen] = useState({
        ProfessionalField: true,
        StudyingInformation: true,
        LastJob: true,
        Courses: true,
        Hobbies: false,
        PreviousJob: false,
    })

    return (
        <div className="w-full px-2">
            <ProfessionalField isOpen={isOpen} setIsOpen={setIsOpen} />
            <StudyingInformation isOpen={isOpen} setIsOpen={setIsOpen}/>
            <LastJob isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Courses isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Hobbies isOpen={isOpen} setIsOpen={setIsOpen}/>
            <PreviousJob isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}