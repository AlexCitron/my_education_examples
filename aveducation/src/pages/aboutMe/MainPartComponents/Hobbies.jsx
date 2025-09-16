import CloseOpenButton from "../../../components/CloseOpenButton.jsx";
import CloseOpenButtonHandlerClick from "../../../handlers/CloseOpenButtonHandlerClick.js";

export default function Hobbies({isOpen, setIsOpen}) {
    return (
        <div>
            <div className="border-1 flex justify-between mt-5 px-5 py-2">
                <p className='text-2xl font-semibold'>Досуг и хобби:</p>
                <CloseOpenButton isOpen={isOpen.Hobbies} onClick={() => CloseOpenButtonHandlerClick("Hobbies", setIsOpen)} />
            </div>
            {isOpen.Hobbies && (
                <>
                    <ul className="list-disc mx-10 mt-5">
                        <li>Волейбол</li>
                        <li>Тренажерный зал</li>
                        <li>Чтение книг</li>
                        <li>3d - моделирование</li>
                    </ul>
                </>
            )}
        </div>
    )
}