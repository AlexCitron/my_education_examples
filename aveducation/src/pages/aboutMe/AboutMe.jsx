export default function AboutMe() {
    return (
        <div className="flex w-full">
            <div className="w-100 bg-gray-100 px-10 pt-10">
                <div className='border-1 w-50 h-50 mx-auto rounded-xl'>
                    <img src="photo.jpg" alt="my_poto"/>
                </div>
                <p className="text-2xl font-semibold pt-5 text-center">Востроконов Алексей Леонидович</p>
                <p className='border-4 border-amber-300 rounded-sm mt-2'></p>
                <div className='mt-5'>
                    <p className='font-semibold'>Возраст: 38 лет</p>
                    <p className="py-2 mt-2 font-semibold">Желаемые вакансии:</p>
                        <p> front-end junior разработчик</p>
                        <p> Product Manager, помощник PM</p>
                    <p className='mt-5 font-semibold'>Заработная плата: 80 000 - 120 000 руб</p>
                    <p className='border-1 py-2 mt-5 text-2xl font-semibold text-center'>Контакты:</p>
                    <div className='flex gap-3 px-1 mt-3'>
                        <img className='h-6' src="/phone.svg" alt="phone"/>
                        <p>+7 989 775 16 09</p>
                        <img className='h-6' src="/whatsapp.svg" alt="WAPP"/>
                        <img className='h-6' src="/telegram.svg" alt="Telegramm"/>
                    </div>
                    <div className='flex gap-3 px-1 mt-3'>
                        <img className="h-6" src="/email.svg" alt="email"/>
                        <p>avostr@mail.ru</p>
                    </div>
                    <p className='border-1 py-2 mt-5 text-2xl font-semibold text-center'>Знание языков:</p>
                    <div>
                        <div className='flex gap-10 mt-5'>
                            <p>русский</p>
                            <div className="bg-white p-1 my-2 w-full rounded-xl"></div>
                        </div>
                            <p className='text-right'>родной</p>
                    </div>
                    <div>
                        <div className='flex gap-10 mt-5'>
                            <p>английский</p>
                            <div className="bg-white p-1 my-2 w-full rounded-xl"></div>
                        </div>
                            <p className='text-right'>хороший</p>
                    </div>
                    <div>
                        <div className='flex gap-10 mt-5'>
                            <p>французский</p>
                            <div className="bg-white p-1 my-2 w-full rounded-xl"></div>
                        </div>
                        <p className='text-right'>хороший</p>
                    </div>
                </div>
            <div>
                <p className='border-1 py-2 mt-5 text-2xl font-semibold text-center'>Навыки:</p>
                <p className="font-semibold text-amber-600 mt-3">Общие: </p>
                <ul className='pl-10 pt-1 list-disc'>
                    <li>Деловая переписка</li>
                    <li>Ведение переговоров</li>
                    <li>Управление проектами</li>
                </ul>
                <p className="font-semibold text-amber-600 mt-3">Профессиональные: </p>
                <ul className="pl-10 pt-1 list-disc">
                    <li>Деловая переписка</li>
                    <li>Ведение переговоров</li>
                    <li>Управление проектами</li>
                </ul>
                <p className='border-1 py-2 mt-5 text-2xl font-semibold text-center'>Личные качества:</p>
                <ul className="pl-10 pt-1 list-disc mt-3">
                    <li>Целеустремленность и быстрая обучаемость</li>
                    <li>Трудолюбие, аккуратность и пунктуальность</li>
                    <li>Общительность и командная работа</li>
                </ul>
            </div>
            </div>

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

        </div>

    )
}