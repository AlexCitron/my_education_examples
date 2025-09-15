export default function SkillsSet() {
    return (
        <div>
            <p className='border-1 py-2 mt-5 text-2xl font-semibold text-center'>Навыки:</p>
            <p className="font-semibold text-amber-600 mt-3">Общие: </p>
            <ul className='pl-5 pt-1 list-disc'>
                <li>Деловая переписка</li>
                <li>Управление проектами</li>
                <li>Планирование</li>
                <li>Клиентоориентированность</li>
                <li>IDEs: WebStorm, PyCharm, VSC</li>
            </ul>
            <p className="font-semibold text-amber-600 mt-3">Профессиональные: </p>
            <ul className="pl-5 pt-1 list-disc">
                <li>Знание: JS/TS/Python</li>
                <li>Знание: React/Redux</li>
                <li>Знание: HTML/CSS/Tailwind </li>
                <li>Знание: SQL </li>
            </ul>
            <p className="font-semibold text-amber-600 mt-3">Личные качества: </p>
            <ul className="pl-5 pt-1 list-disc mt-3">
                <li>Целеустремленность и быстрая обучаемость</li>
                <li>Трудолюбие, аккуратность и пунктуальность</li>
                <li>Коммуникабельность</li>
                <li>Умение работать в команде</li>
            </ul>
        </div>
    )
}