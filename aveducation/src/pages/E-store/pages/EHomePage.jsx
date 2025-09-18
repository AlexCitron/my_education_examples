import {useLocation} from "react-router-dom";

export default function EHomePage() {

    const location = useLocation();
    console.log(location)
    return (
        <div className={'home-page'}>
            <h2>Home Page</h2>
            <p>{location?.state?.login}</p>
        </div>
    )
}