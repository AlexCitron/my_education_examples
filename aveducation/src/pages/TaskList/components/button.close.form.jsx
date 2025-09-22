export default function ButtonCloseOpenForm ({isOpen, onClick}) {
    const mainClass = `w-10 h-10  bg-transparent flex items-baseline justify-evenly
    cursor-pointer transition-all duration-300 ease-in-out transform absolute top-5 right-5 text-blue-500`
    const className = mainClass  + (isOpen ? ' rotate-45 text-red-500' : '')
    return (
        <button className={className}
                onClick={onClick}>
            <span className='text-3xl font-bold '>+</span>
        </button>
    )
}
