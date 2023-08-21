import { useEffect, useState } from 'react';
import './App.css';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import { Redirect } from 'wouter';

// interface Data {
//     id: number;
//     full_url: string;
//     short_url: string;

// }

type ParamsType = {
    params: string;
};

interface Data {
    full_url: string;
}

function App({ params }: ParamsType) {
    const { toast } = useToast();
    const { data, isLoading } = useQuery({
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/${params}`);

            return data as Data;
        },
    });

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
        console.log(data);
    }, []);

    const [input, setInput] = useState('');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center flex-col px-5 text-center'>
                <h1 className='font-mulish text-6xl font-bold'>Loading..</h1>
            </div>
        );
    }

    if (data?.full_url == '') {
        return (
            <div className='h-screen flex justify-center items-center flex-col px-5 text-center'>
                <h1 className='font-mulish text-8xl font-bold'>404</h1>
                <h2 className='font-space text-4xl'>
                    Your url cannot be found ! return to home.
                </h2>
            </div>
        );
    }
    // const { data, isLoading } = useQuery({
    //     queryFn: async () => {
    //         const { data } = await axios.get('http://localhost:8080/');
    //         return [data] as Data[];
    //     },
    // });

    function checker() {
        if (data == null) {
            return 'something went wrong';
        }
        if (Number(input) == result) {
            // return console.log('true');

            setTimeout(() => {
                // 👇️ redirects to an external URL
                window.location.replace(data.full_url);
            }, 500);

            // clearTimeout(timeout);

            toast({
                title: 'Correct !',
                description: 'You will be redirected soon',
                className: 'bg-purple',
            });

            // return (
            //     <div className='h-screen flex justify-center items-center text-6xl font-space'>
            //         Redirecting...
            //     </div>
            // );
            // return (<Redirect to={`/redirect/${data.full_url}`}></Redirect>)
        }
        toast({
            title: 'Incorrect Answer ',
            description: 'Try again ! you can do it.',
            className: 'bg-purple',
        });
    }
    return (
        <div className='h-screen bg-whiteBg flex flex-col items-center justify-center'>
            {/* {isLoading ? console.log('loading') : console.log('finished')} */}
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
                className='rounded-md bg-purple mt-10 text-white font-space'
            >
                <span className='block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-black p-3 text-xl transition-all hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0'>
                    {' '}
                    Continue URL{' '}
                </span>
            </button>
        </div>
    );
}

export default App;
