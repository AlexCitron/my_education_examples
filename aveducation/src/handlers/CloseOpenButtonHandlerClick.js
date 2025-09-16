export default function CloseOpenButtonHandlerClick(sectionName, setIsOpen) {
    setIsOpen((prev) => ({
        ...prev,
        [sectionName]: !prev[sectionName]}))

}