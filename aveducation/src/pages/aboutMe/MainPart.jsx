export default function MainPart() {
    return (
        <div className="w-full px-2">
            <p className='border-1 py-2 mt-5 text-2xl font-semibold pl-5'>Профессиональные области:</p>
            <p className="mt-3 font-semibold">Морские перевозки, траспортная логистика:</p>
            <ul className='mt-2 px-5'>
                <li>Оформление судозахода - гос.органы и представительство в порту.</li>
                <li>Органиазция снабжения, тех. обслуживания и пр. судна во время стоянки в порту.</li>
            </ul>
            <p className="mt-3 font-semibold">Информационные технологии:</p>
            <ul className='mt-2 px-5'>
                <li>Ведущий специалист удаленной технической поддержки</li>
                <li>Системотехник отдела информационных технологий в г. Москва.</li>
                <li>ИО началиника ОИТ в г. Москва.</li>
            </ul>
            <p className="mt-3 font-semibold">Авиастроение:</p>
            <ul className='mt-2 px-5'>
                <li>инженер-конструктор отдел прочности (outsource for Boeing)</li>
                <li>инженер-проектировщик конструкторский отдел (outsource for Airbus)</li>
            </ul>
            <div>
                <p className='border-1 py-2 mt-5 text-2xl font-semibold pl-5'>Последнее место работы:</p>
                <p className='italic mt-3'>Март 2019 - Июнь 2025 <span className='font-semibold'>(6 лет и 4 месяца)</span></p>
                <ul className='py-3'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Организация:</span> ООО «Джи Эй Си Шиппинг энд Лоджистикс»</p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Должность:</span> Судовой агент 1-ой категории</p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Обязанности:</span>
                            <ul className='ml-10 list-disc'>
                                <li> Организация и контроль судозахода иностранного судна в порт</li>
                                <li> Посредничество и представление интересов клиента при взаимодействии судовой администрации с портовыми службами и государственными органами</li>
                                <li> Ведение деловой переписки с клиентами, контрагентами и заказчиками</li>
                                <li> Информирование клиентов и заказчиков</li>
                                <li> Согласование сопутствующих расходов с клиентом и заказчиком</li>
                                <li> Поиск и организация снабжения, ремонта и пр.</li>
                            </ul>
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <p className='border-1 py-2 mt-5 text-2xl font-semibold pl-5'>Образование:</p>
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
            </div>
            <div>
                <p className='border-1 py-2 mt-5 text-2xl font-semibold pl-5'>Курсы:</p>
                <ul className='py-3'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Python (платформа Stepik):</span>
                            <ul className="list-disc px-10">
                                <li>базовые элементы</li>
                                <li>функциональное программирование</li>
                                <li>ООП</li>
                                <li>web парсинг, Django, инди CSS, HTML</li>
                            </ul>
                        </p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>JS/TS (платформа Stepik):</span>
                            <ul className="list-disc px-10">
                                <li>базовые элементы и функциональное программирование</li>
                                <li>ООП</li>
                                <li>Node.js</li>
                                <li>React/Redux</li>
                                <li>Tailwind</li>
                            </ul>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}