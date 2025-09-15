import PhotoAndSalary from "./components/PhotoAndSalary.jsx";
import Contacts from "./components/Contacts.jsx";
import SkillsSet from "./components/SkillsSet.jsx";
import Languages from "./components/Languages.jsx";

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

