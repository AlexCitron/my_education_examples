export default function HomePage() {

    return (
        <div>
            <div className='mt-10'>
                <h2 className='text-center font-bold text-2xl text-shadow-md'>Welcome to My Educational SPA Projects Showcase! </h2>
                <div className='mx-15 mt-10'>
                    <div className="my-2">
                        <h3 className='mt-5 text-xl text-shadow-md font-semibold'>This Collection</h3>
                        <p className='mx-5 mt-3'>Hello and welcome to my portfolio of Single Page Applications (SPA) developed during my journey
                            into JavaScript, TypeScript, and React. Each project serves as a demonstration of various
                            concepts and techniques I’ve learned throughout my studies.</p>
                    </div>
                    <div>
                        <h3 className='mt-5 text-xl text-shadow-md font-semibold'>Featured Projects</h3>
                        <p className='mx-5 mt-3' >Here you can explore a variety of applications showcasing different aspects of modern web development:</p>
                        <ul className='list-disc mx-15 my-3'>
                            <li><span className='font-semibold'>React Fundamentals</span> — basic components and state management</li>
                            <li><span className='font-semibold'>Routing Systems</span> — React Router implementation</li>
                            <li><span className='font-semibold'>State Management</span> — Redux and Context API usage</li>
                            <li><span className='font-semibold'>TypeScript Integration</span> — type-safe applications - to be implemented</li>
                        </ul>
                    </div>
                    <h3 className='mt-5 text-xl text-shadow-md font-semibold'>Technologies Used</h3>
                    <div>
                        <ul className='list-disc mx-10 text-md my-3'>
                            <li className='font-semibold'>Core Technologies:
                                <ul className='mt-2 mx-5 list-disk list-disc font-normal'>
                                    <li>JavaScript/TypeScript</li>
                                    <li>React.js</li>
                                    <li>React Router</li>
                                    <li>Redux</li>
                                    <li>Context API</li>
                                </ul>
                            </li>
                            <li className='font-semibold my-3'>Additional Tools:
                                <ul className='mt-2 mx-5 list-disk list-disc font-normal'>
                                    <li>ESLint</li>
                                    <li>Prettier</li>
                                </ul>
                            </li>
                            <li className='font-semibold my-3'>IDE-s used:
                                <ul className='mt-2 mx-5 list-disk list-disc font-normal'>
                                    <li>WebStorm</li>
                                    <li>Visual Studio Code</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mt-5 text-xl text-shadow-md font-semibold'>How to Explore</h3>
                        <p className='mx-5 mt-3' >Each project is designed to be self-contained and demonstrates specific features. You can navigate through the applications to see:</p>
                        <ul className='list-disc mx-15 my-3'>
                            <li>Component architecture</li>
                            <li>State management patterns</li>
                            <li>Data flow implementation</li>
                            <li>Error handling</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mt-5 text-xl text-shadow-md font-semibold'>Future Enhancements</h3>
                        <p className='mx-5 mt-3' >This collection is continuously evolving as I learn new concepts and techniques. Upcoming updates will include:</p>
                        <ul className='list-disc mx-15 my-3'>
                            <li>Fix all styles with tailwind after migration to this new SPA</li>
                            <li>Fix API-key using for weather app, now it's broken to not compromise existing one</li>
                            <li>Realize hidden API-key use for weather APP </li>
                            <li>Fix picture displaying at e-store app</li>
                            <li>Fix picture displaying at e-store app</li>
                            <li>Use and external web source to store products info for e-store</li>
                            <li>More complex applications</li>
                            <li>Improved code quality</li>
                            <li>New technologies exploration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}