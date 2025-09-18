import {useSearchParams} from "react-router-dom";

export default function ESearchPage() {
    const [searchParams, setSearchParams] = useSearchParams()

    const search = searchParams.get('q') || ""

    function updateSearchParams(e) {
        setSearchParams({ q: e.target.value })
    }


    return (
        <div className={'search-page'}>
            <h1>Search Results</h1>
            <p>Search term: {search}</p>

            <input type="text" value={search} placeholder={'Input search term'} onChange={updateSearchParams} />
        </div>
    )
}