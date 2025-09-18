import NavMenuLink from "../UI/NavMenuLink.jsx";

export function Header() {

    return (
        <header className='flex py-8 px-8 justify-between header bg-blue-200 shadow-md max-w-2xl m-auto rounded-md'>
            <img className="h-6" src={"/logo.svg"} alt={'logo'}/>
            <ul className='flex gap-14'>
                <li><NavMenuLink to={'/eStore'}>Home</NavMenuLink></li>
                <li><NavMenuLink to={'/eStore/about'}>About</NavMenuLink></li>
                <li><NavMenuLink to={'/eStore/cart'}>Cart</NavMenuLink></li>
            </ul>
        </header>
)
}