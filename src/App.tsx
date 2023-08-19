import { useEffect, useState } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        const randomWholeNumber = Math.floor(Math.random() * 25);
        const randomWholeNumber2 = Math.floor(Math.random() * 25);
        let sum = Number(randomWholeNumber) - Number(randomWholeNumber2);
        console.log(randomWholeNumber);
        console.log(randomWholeNumber2);
        console.log('result ' + Number(sum));
        setNum1(randomWholeNumber);
        setNum2(randomWholeNumber2);
        setResult(sum);
    }, []);

    const [input, setInput] = useState('');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    function checker() {
        if (Number(input) == result) {
            console.log('Correct');
            return;
        }
        console.log('Wrong !');
    }
    return (
        <div className='h-screen bg-whiteBg flex flex-col items-center'>
            <h1 className='text-4xl font-mulish font-bold'>Short Math </h1>
            <h2 className='text-2xl font-space mt-10'>
                URL Shortener with simple Math quiz
            </h2>
            <h2 className='text-xl font-space mt-10'>
                Solve math problem below to continue !
            </h2>
            <div className='flex items-center p-0 mt-16 justify-around w-1/3'>
                <h3 className='text-6xl font-space font-bold '>
                    {num1} - {num2} :
                </h3>
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    type='number'
                    placeholder='0'
                    className='h-fit text-6xl w-1/5 bg-whiteBg outline-none font-space font-bold'
                />
            </div>
            <button
                onMouseUp={checker}
                className='bg-black text-white text-2xl p-5 rounded-md font-space'
            >
                Continue
            </button>
        </div>
    );
}

export default App;
