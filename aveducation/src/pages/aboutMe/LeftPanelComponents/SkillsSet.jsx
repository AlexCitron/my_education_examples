export default function SkillsSet() {
    return (
        <div>
            <p className='border-1 py-2 mt-5 text-2xl font-semibold text-center'>Навыки:</p>
            <p className="font-semibold text-black mt-3">Общие: </p>
            <ul className='pl-5 pt-1 list-disc'>
                <li>Деловая переписка</li>
                <li>Управление проектами</li>
                <li>Планирование</li>
                <li>IDEs: WebStorm, PyCharm, VSC</li>
            </ul>
            <p className="font-semibold text-black mt-3">Профессиональные: </p>
            <ul className="pl-5 pt-1 list-disc">
                <li>Владение: JS/TS/Python</li>
                <li>Владение: React/Redux</li>
                <li>Владение: HTML/CSS/Tailwind </li>
                <li>Владение: SQL </li>
            </ul>
            <p className="font-semibold text-black mt-3">Личные качества: </p>
            <ul className="pl-5 pt-1 list-disc mt-3">
                <li>Целеустремленность и быстрая обучаемость</li>
                <li>Трудолюбие, аккуратность и пунктуальность</li>
                <li>Коммуникабельность</li>
                <li>Умение работать в команде</li>
            </ul>
        </div>
    )
}