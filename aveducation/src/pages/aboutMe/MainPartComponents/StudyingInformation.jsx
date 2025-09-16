import CloseOpenButton from "../../../components/CloseOpenButton.jsx";
import CloseOpenButtonHandlerClick from "../../../handlers/CloseOpenButtonHandlerClick.js";

export default function StudyingInformation({isOpen, setIsOpen}) {
    return (
        <div>
            <div className="border-1 flex justify-between mt-5 px-5 py-2">
                <p className='text-2xl font-semibold'>Образование:</p>
                <CloseOpenButton isOpen={isOpen.StudyingInformation} onClick={() => CloseOpenButtonHandlerClick("StudyingInformation", setIsOpen)} />
            </div>
            {
                isOpen.StudyingInformation && (
                    <>
                        <ul className='py-3'>
                            <li className='pt-2'>
                                <p><span className='font-semibold'>ВУЗ:</span> Южный Федеральный Университет (Таганрогский Радио-Технический Университет)</p>
                            </li>
                            <li className='pt-2'>
                                <p><span className='font-semibold'>Год окончания:</span> 2011</p>
                            </li>
                            <li className='pt-2'>
                                <p><span className='font-semibold'>Специальность:</span> Самолето- и Вертолетостроение</p>
                            </li>
                        </ul>
                    </>
                )
            }
        </div>
    )
}
