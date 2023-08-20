function Home() {
    return (
        <div className='h-screen bg-whiteBg flex flex-col items-center justify-center'>
            {/* {isLoading ? console.log('loading') : console.log('finished')} */}
            <h1 className='text-4xl font-mulish font-bold'>Short Math </h1>
            <h2 className='text-2xl font-space mt-10'>
                URL Shortener with simple Math quiz
            </h2>

            <div className='flex flex-col items-center px-2 mt-16 justify-around'>
                <h3 className='text-6xl font-space font-bold '>
                    Add your link here
                </h3>
                <input
                    // onChange={(e) => {
                    //     setInput(e.target.value);
                    // }}
                    type='text'
                    placeholder='https://google.com/'
                    className='h-fit text-4xl bg-whiteBg outline-none mt-10 font-space font-bold'
                />
            </div>
        </div>
    );
}

export default Home;
