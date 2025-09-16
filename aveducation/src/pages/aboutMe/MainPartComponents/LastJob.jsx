import CloseOpenButton from "../../../components/CloseOpenButton.jsx";
import CloseOpenButtonHandlerClick from "../../../handlers/CloseOpenButtonHandlerClick.js";

export default function LastJob({isOpen, setIsOpen}) {
    return (
        <div>
            <div className="border-1 flex justify-between mt-5 px-5 py-2">
                <p className='text-2xl font-semibold'>Последнее место работы:</p>
                <CloseOpenButton isOpen={isOpen.LastJob} onClick={() => CloseOpenButtonHandlerClick("LastJob", setIsOpen)} />
            </div>
            {isOpen.LastJob && (
                <>
                    <p className='italic mt-3'>Март 2019 - Июнь 2025 <span className='font-semibold'>(6 лет и 4 месяца)</span></p>
                    <ul className='py-3'>
                        <li className='pt-2'>
                            <p><span className='font-semibold'>Организация:</span> ООО «Джи Эй Си Шиппинг энд Лоджистикс»</p>
                        </li>
                        <li className='pt-2'>
                            <p><span className='font-semibold'>Должность:</span> Судовой агент 1-ой категории</p>
                        </li>
                        <li className='pt-2'>
                            <p><span className='font-semibold'>Обязанности:</span></p>
                                <ul className='ml-10 list-disc'>
                                    <li> Организация и контроль судозахода иностранного судна в порт</li>
                                    <li> Посредничество и представление интересов клиента при взаимодействии судовой администрации с портовыми службами и государственными органами</li>
                                    <li> Ведение деловой переписки с клиентами, контрагентами и заказчиками</li>
                                    <li> Информирование клиентов и заказчиков</li>
                                    <li> Согласование сопутствующих расходов с клиентом и заказчиком</li>
                                    <li> Поиск и организация снабжения, ремонта и пр.</li>
                                </ul>
                        </li>
                    </ul>
                </>
            )}
        </div>
    )
}