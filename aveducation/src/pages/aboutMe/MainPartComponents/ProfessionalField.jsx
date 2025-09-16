import CloseOpenButton from "../../../components/CloseOpenButton.jsx";
import CloseOpenButtonHandlerClick from "../../../handlers/CloseOpenButtonHandlerClick.js";

export default function ProfessionalField({isOpen, setIsOpen}) {
    return (
        <div>
            <div className="border-1 flex justify-between mt-5 px-5 py-2">
                <span className='text-2xl font-semibold'>Профессиональные области:</span>
                <CloseOpenButton isOpen={isOpen.ProfessionalField} onClick={() => CloseOpenButtonHandlerClick("ProfessionalField", setIsOpen)} />
            </div>
            {isOpen.ProfessionalField && (
                <div >
                    <p className="mt-3 font-semibold">Морские перевозки, траспортная логистика:</p>
                    <ul className='mt-2 px-5'>
                        <li>Оформление судозахода - гос.органы и представительство в порту.</li>
                        <li>Органиазция снабжения, тех. обслуживания и пр. судна во время стоянки в порту.</li>
                    </ul>
                    <p className="mt-3 font-semibold">Информационные технологии:</p>
                    <ul className='mt-2 px-5'>
                        <li>Ведущий специалист удаленной технической поддержки</li>
                        <li>Системотехник отдела информационных технологий в г. Москва.</li>
                        <li>ИО начальника ОИТ в г. Москва.</li>
                    </ul>
                    <p className="mt-3 font-semibold">Авиастроение:</p>
                    <ul className='mt-2 px-5'>
                        <li>инженер-конструктор отдел прочности (outsource for Boeing)</li>
                        <li>инженер-проектировщик конструкторский отдел (outsource for Airbus)</li>
                    </ul>
                </div>
            )}
        </div>
    )
}