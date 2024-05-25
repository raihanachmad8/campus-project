const Jumbotron: React.FC = () => {
    return (
        <>
            <section id='jumbotron' className='W-full h-screen bg-cover bg-center saturate-150'
                style={{ backgroundImage: `url('/images/landing.jpg')` }}>
                    <div className='absolute z-10 top-0 left-0 w-full h-full bg-black opacity-50' />
                <div className='absolute z-20 w-full flex flex-col items-center justify-center h-full '>
                    <h1 className='md:text-6xl text-3xl font-bold select-none text-white'>Welcome to <span className='text-indigo-400'>Our Base</span></h1>
                    <a
                        href='#about'
                        draggable={false}
                        className='select-none px-4 py-2 mt-4 font-medium text-white bg-indigo-500 rounded hover:bg-indigo-700'>
                        Read More
                    </a>
                </div>
            </section>
        </>
    );
}

export default Jumbotron;