export default function CloseOpenButton({isOpen, onClick}) {
    return (
        <button
        className={`
            text-2xl
            hover:text-blue-600
            cursor-pointer
            transition-all
            duration-300
            ease-in-out
            ${!isOpen ? 'rotate-90 text-black' : "text-blue-600"}
        `}
        onClick={onClick}
        >V</button>
    )
}

