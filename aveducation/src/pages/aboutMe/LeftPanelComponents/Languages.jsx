export default function Languages() {
    return (
        <>
            <p className='border-1 py-2 mt-5 text-2xl font-semibold text-center'>Владение языками:</p>
            <div className=' flex justify-between'>
                <div className='mt-5 grid grid-cols-2 w-full' >
                    <p>английский</p>
                    <div className='flex-col pt-3'>
                        <div className="bg-gray-300 rounded-full h-2 w-full overflow-hidden">
                            <div className="bg-black h-full w-6/10 rounded-xl"></div>
                        </div>
                        <p className='text-sm text-center'>B1 Intermediate</p>
                    </div>
                    <p>французский</p>
                    <div className='flex-col pt-3'>
                        <div className="bg-gray-300 rounded-full h-2 w-full overflow-hidden">
                            <div className="bg-black h-full w-4/10 rounded-xl"></div>
                        </div>
                        <p className='text-sm text-center'>A2-B1 Pre-intermediate</p>
                    </div>
                </div>
            </div>
        </>
    )
}