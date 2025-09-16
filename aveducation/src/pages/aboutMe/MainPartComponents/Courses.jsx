import CloseOpenButton from "../../../components/CloseOpenButton.jsx";
import CloseOpenButtonHandlerClick from "../../../handlers/CloseOpenButtonHandlerClick.js";

export default function Courses({isOpen, setIsOpen}) {
    return (
        <div>
            <div className="border-1 flex justify-between mt-5 px-5 py-2">
                <p className='text-2xl font-semibold'>Курсы:</p>
                <CloseOpenButton isOpen={isOpen.Courses} onClick={() => CloseOpenButtonHandlerClick("Courses", setIsOpen)} />
            </div>
            {isOpen.Courses && (
                <>
                    <ul className='py-3'>
                        <li className='pt-2'>
                            <p><span className='font-semibold'>Python (платформа Stepik):</span></p>
                            <ul className="list-disc px-10">
                                <li>базовые элементы</li>
                                <li>функциональное программирование</li>
                                <li>ООП</li>
                                <li>web парсинг, Django, инди CSS, HTML</li>
                            </ul>
                        </li>
                        <li className='pt-2'>
                            <p><span className='font-semibold'>JS/TS (платформа Stepik):</span></p>
                            <ul className="list-disc px-10">
                                <li>базовые элементы и функциональное программирование</li>
                                <li>ООП</li>
                                <li>Node.js</li>
                                <li>React/Redux</li>
                                <li>Tailwind</li>
                            </ul>
                        </li>
                    </ul>
                </>
            )}

        </div>
    )
}