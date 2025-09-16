import CloseOpenButton from "../../../components/CloseOpenButton.jsx";
import CloseOpenButtonHandlerClick from "../../../handlers/CloseOpenButtonHandlerClick.js";

export default function PreviousJob({isOpen, setIsOpen}) {
    return (
        <div>
            <div className="border-1 flex justify-between mt-5 px-5 py-2">
                <p className='text-2xl font-semibold'>Предыдущие места работы:</p>
                <CloseOpenButton isOpen={isOpen.PreviousJob} onClick={() => CloseOpenButtonHandlerClick("PreviousJob", setIsOpen)} />
            </div>
            {isOpen.PreviousJob && (
            <>
                <ul className='py-3 border-b-1'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Организация:</span> AО «РУСАВИАИНТЕР» Март 2019 - Июнь 2019 <span className='font-semibold'>(3 месяца)</span></p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Должность:</span> Инженер – конструктор</p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Обязанности:</span></p>
                        <ul className='ml-10 list-disc'>
                            <li>Разработка эскизной и рабочей КД для модификации интерьера самолётов.
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className='py-3 border-b-1'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Организация:</span> ООО «АвиаОК» Октябрь 2016 - Декабрь 2018 <span className='font-semibold'>(2 года 2 месяца)</span></p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Должность:</span> Инженер – проектировщик
                        </p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Обязанности:</span></p>
                        <ul className='ml-10 list-disc'>
                            <li>Разработка эскизной и рабочей КД для семейства самолетов Airbus (СКВ, стык секций, фитинги для монтажа второстпенных систем).</li>
                        </ul>
                    </li>
                </ul>
                <ul className='py-3 border-b-1'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Организация:</span> АО «Тандер» Апрель 2016 - Июнь 2016 <span className='font-semibold'>(2 месяца)</span></p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Должность:</span> ИО начальника ОИТ</p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Обязанности:</span></p>
                        <ul className='ml-10 list-disc'>
                            <li>Оперативное руководство работниками подразделения.</li>
                            <li>Анализ и корректировка проекта технических заданий, планов и графиков проведения работ по внедрению новых аппаратных и программных средств вычислительной техники, техническому обслуживанию.</li>
                            <li>Осуществление настройки, опытной эксплуатации и поэтапного введения в действие аппаратных и программных средств вычислительной техники.</li>
                            <li>Составление заявок на ремонт неисправного, а также на приобретение нового и модернизацию устаревшего аппаратного оборудования серверов и кассовых станций, а также сетевого оборудования.</li>
                            <li>Определение текущей потребности в персонале подразделения, формирование заявки на подбор персонала, участие в отборе персонала.</li>
                            <li>Организация и контроль процесса адаптации персонала в соответствии со стандартами компании, приём решения по результатам прохождения испытательного срока вновь принятых работников.</li>
                        </ul>
                    </li>
                </ul>
                <ul className='py-3 border-b-1'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Организация:</span> АО «Тандер» Ноябрь 2015 - Апрель 2016 <span className='font-semibold'>(6 месяцев)</span></p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Должность:</span> Системотехник ОИТ</p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Обязанности:</span></p>
                        <ul className='ml-10 list-disc'>
                            <li>Техническое обслуживание и модернизация программных и аппаратных средств информационных систем.</li>
                            <li>Настройка, отладка, ввод в эксплуатацию и контрольные проверки работоспособности аппаратных и программных средств информационных систем (обеспечение работы офиса и магазинов различного формата, от монтажа ЛВС до ввода в эксплуатацию, поддержка ПО конечных пользователей, текущий аппаратный и программный ремонт).</li>
                        </ul>
                    </li>
                </ul>
                <ul className='py-3 border-b-1'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Организация:</span> АО «Тандер» Март 2014 - Ноябрь 2015 <span className='font-semibold'>(1 год 7 месяцев)</span></p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Должность:</span> Ведущий специалист удаленной технической поддержки</p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Обязанности:</span></p>
                        <ul className='ml-10 list-disc'>
                            <li>Обучение и контроль работы специалистов.</li>
                            <li>Сставление рабочих инструкций для специалистов. </li>
                            <li>Построение бизнес-процессов по взаимодействию со смежными службами.</li>
                            <li>Установка, удаление, настройка программных средств под управлением ОС windows и ОС linux.</li>
                            <li>Удаленное решение проблем, связанных с программными средствами пользователей. </li>
                        </ul>
                    </li>
                </ul>
                <ul className='py-3 border-b-1'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Организация:</span> АО «Тандер» Июнь 2013 - Март 2014 <span className='font-semibold'>(9 месяцев)</span></p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Должность:</span> Специалист удаленной технической поддержки</p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Обязанности:</span></p>
                        <ul className='ml-10 list-disc'>
                            <li>Установка, удаление, настройка программных средств под управлением ОС windows и ОС linux.</li>
                            <li>Удаленное решение проблем, связанных с программными средствами пользователей. </li>
                        </ul>
                    </li>
                </ul>
                <ul className='py-3'>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Организация:</span> ООО «Научно Инженерная Компания» август 2011 - июнь 2013 <span className='font-semibold'>(1 год 10 месяцев)</span></p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Должность:</span> Инженер – конструктор (отдел прочности)</p>
                    </li>
                    <li className='pt-2'>
                        <p><span className='font-semibold'>Обязанности:</span></p>
                        <ul className='ml-10 list-disc'>
                            <li>Расчет на статическую прочность металлоконструкций, связанных со сборкой, обслуживанием и ремонтом летательных аппаратов.</li>
                            <li>Составление отчетов по прочности на английском языке (наземное оборудование, предназначенное для монтажа, демонтажа, подъема и транспортировки агрегатов и узлов ЛА, фиксаторы выпущенного положения для гидроцилиндров, лестницы, тележки).</li>
                        </ul>
                    </li>
                </ul>
            </>
            )}
        </div>
    )
}