export default function Languages() {
    return (
        <>
            <p className='border-1 py-2 mt-5 text-2xl font-semibold text-center'>Знание языков:</p>
            <div>
                <div className='flex gap-10 mt-5'>
                    <p>английский</p>
                    <div className="bg-white p-1 my-2 w-full rounded-xl"></div>
                </div>
                <p className='text-right'>хороший</p>
            </div>
            <div>
                <div className='flex gap-10 mt-5'>
                    <p>французский</p>
                    <div className="bg-white p-1 my-2 w-full rounded-xl"></div>
                </div>
                <p className='text-right'>хороший</p>
            </div>
        </>
    )
}