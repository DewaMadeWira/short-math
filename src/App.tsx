import { useEffect, useState } from 'react';
import './App.css';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import { Redirect } from 'wouter';
import { motion } from 'framer-motion';

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
            const { data } = await axios.get(
                `https://url-shortener-pied-ten.vercel.app//${params}`
            );

            return data as Data;
        },
    });

    useEffect(() => {
        let random = Math.floor(Math.random() * 2);
        const randomWholeNumber = Math.floor(Math.random() * 25);
        const randomWholeNumber2 = Math.floor(Math.random() * 25);
        let sum = 0;
        if (random == 0) {
            sum = Number(randomWholeNumber) - Number(randomWholeNumber2);
            setOperation('-');
        } else if (random == 1) {
            sum = Number(randomWholeNumber) + Number(randomWholeNumber2);
            setOperation('+');
        }

        console.log(randomWholeNumber);
        console.log(randomWholeNumber2);

        console.log(operation + 'random :' + random);
        console.log('result ' + Number(sum));
        setNum1(randomWholeNumber);
        setNum2(randomWholeNumber2);
        setResult(sum);
    }, []);

    const [input, setInput] = useState('');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('');

    if (isLoading) {
        return (
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='h-screen flex justify-center items-center flex-col px-5 text-center'
            >
                <h1 className='font-mulish text-6xl font-bold'>Loading..</h1>
            </motion.div>
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
        } else {
            toast({
                title: 'Incorrect Answer ',
                description: 'Try again ! you can do it.',
                className: 'bg-purple',
            });
        }
    }
    return (
        <div className='h-screen bg-whiteBg flex flex-col items-center justify-center'>
            {/* {isLoading ? console.log('loading') : console.log('finished')} */}
            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-5xl sm:text-4xl font-mulish font-bold'
            >
                Short Math{' '}
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className='text-2xl text-center font-space mt-10'
            >
                URL Shortener with simple Math quiz
            </motion.h2>
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-xl text-center font-space mt-10'
            >
                Solve math problem below to continue !
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className='flex items-center p-0 mt-16 justify-center md:1/2  lg:w-1/3'
            >
                <h3 className='text-5xl font-space font-bold '>
                    {num1} {operation} {num2} :
                </h3>
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    type='number'
                    placeholder='0'
                    className='h-fit text-5xl w-1/4  bg-whiteBg outline-none font-space font-bold'
                />
            </motion.div>
            <motion.button
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                onMouseUp={checker}
                className='rounded-md bg-purple mt-10 text-white font-space'
            >
                <span className='block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-black p-3 text-xl transition-all hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0'>
                    {' '}
                    Continue URL{' '}
                </span>
            </motion.button>
            <motion.h4
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='text-xl font-mulish font-bold  mt-10'
            >
                <span className='text-black/70'>
                    Made By :{' '}
                    <a
                        href='https://github.com/DewaMadeWira'
                        className='text-black hover:underline transition-all'
                    >
                        Dewa
                    </a>{' '}
                </span>{' '}
            </motion.h4>
        </div>
    );
}

export default App;
