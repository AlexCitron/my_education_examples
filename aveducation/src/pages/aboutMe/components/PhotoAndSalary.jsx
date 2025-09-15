export default function PhotoAndSalary() {
    return (
        <>
            <div className='border-1 w-50 h-50 mx-auto rounded-xl'>
                <img src="photo.jpg" alt="my_poto"/>
            </div>
            <p className="text-2xl font-semibold pt-5 text-center">Востроконов Алексей Леонидович</p>
            <p className='border-4 border-amber-400 rounded-sm mt-2'></p>
            <div className='mt-5'>
                <p className='font-semibold'>Возраст: 38 лет</p>
                <p className="font-semibold mt-3">Желаемые вакансии: </p>

                <ul className='list-disc pl-5 pt-1'>
                    <li>front-end junior разработчик</li>
                    <li>Product Manager, помощник PM</li>
                </ul>
                <p className='mt-3'><span className='font-semibold'>Заработная плата:</span> <span>80 000 - 120 000 руб</span></p>
            </div>
        </>
    )
}