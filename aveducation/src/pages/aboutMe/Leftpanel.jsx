export default function LeftPanel() {
    return (

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
    )
}

