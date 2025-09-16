import PhotoAndSalary from "./PhotoAndSalary.jsx";
import Contacts from "./Contacts.jsx";
import SkillsSet from "./SkillsSet.jsx";
import Languages from "./Languages.jsx";

export default function LeftPanel() {
    return (

    <div className="
    w-max-[300px]
    bg-gray-100
    px-10 pt-10">
        <PhotoAndSalary />
        <Contacts />
        <SkillsSet />
        <Languages />
    </div>
    )
}

