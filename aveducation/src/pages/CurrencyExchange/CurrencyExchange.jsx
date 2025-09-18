import {useState, useEffect} from "react";

export default function App() {

    const [currencies, setCurrencies] = useState([]) // State to get currency names from API
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [result, setResult] = useState(null);
    const [amount, setAmount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadCurrencies() {
            try{
                const response = await fetch("https://api.frankfurter.dev/v1/currencies");
                const data = await response.json();
                setCurrencies(Object.keys(data));
            } catch {
                setError("Failed to convert currencies from API");
            }
        }
        loadCurrencies();
    }, [])

    /*Fetch API to get exchange rates and final result on amount or currency change*/
    async function getResult() {
        try{
            if (!amount || amount <= 0) {
                setError("Amount should be grater than 0");
                return
            }
            setLoading(true);
            setError(null);
            if (amount && toCurrency === fromCurrency) {
                setResult(amount)
                return
            }
            const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`);
            const { rates } = await response.json();
            setResult((rates[toCurrency] * amount).toFixed(2));
        } catch {
            setError("Failed to convert currencies from API");
        } finally {
            setLoading(false);
        }

    }

    /* render loading during loading*/
    function renderLoading (){
        return <p className='text-blue-500 text-md text-center'>Converting...</p>
    }
    /* render result */
    function renderResult (){
        return <p className='text-2xl text-center'>{`${amount} ${fromCurrency} = ${result} ${toCurrency}`}</p>
    }
    /* render error */
    function renderError (){
        return <p className='text-md text-red-500 text-center'>{error}</p>
    }

    return (
        <div className="bg-white px-5 py-10">
            <h1 className="mb-10 text-xl font-bold text-shadow-lg text-center">Currency exchange calculator</h1>
            <div className='flex flex-col gap-3.5'>
                {error && renderError()}
                <div className='flex flex-col justify-center items-center'>
                    <input
                        type="text"
                        className='p-2.5 text-md w-20 border-gray-300 border-1 rounded-md text-center'
                        placeholder={'Amount'}
                        onChange={(e) => {
                            setError(null)
                            setAmount(e.target.value)
                        }}
                    />
                    <select className='p-2.5 mt-2.5 text-md border-1 border-gray-300 rounded-md'
                            onChange={(e) => {
                        setResult(null)
                        setFromCurrency(e.target.value)}} value={fromCurrency}>
                        {currencies.map(name => <option key={name} value={name}>{name}</option>)}
                    </select>
                    <span className="text-3xl py-2 rotate-90">
                        ➡</span>
                    <select className='p-2.5 text-md border-1 border-gray-300 rounded-md'
                            onChange={(e) => {
                        setResult(null)
                        setToCurrency(e.target.value)}} value={toCurrency}>
                        {currencies.map(name => <option key={name} value={name}>{name}</option>)}
                    </select>
                </div>
                <button className='px-2.5 py-5 text-md rounded-md bg-blue-500 text-white cursor-pointer transition duration-300
                hover:bg-blue-600'
                        onClick={() => getResult()}>Convert</button>
                {loading && renderLoading()}
                {!error && !loading && result && renderResult()}
            </div>
        </div>
    )
}