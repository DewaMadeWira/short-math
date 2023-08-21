import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

interface Data {
    short_url: string;
}

function Home() {
    const { toast } = useToast();
    const [input, setInput] = useState('');

    const mutation = useMutation({
        mutationFn: async () => {
            const { data } = await axios.post(
                `https://url-shortener-pied-ten.vercel.app/`,
                {
                    fullUrl: input,
                }
            );
            return data as Data;
        },
    });
    return (
        <div className='h-screen bg-whiteBg flex flex-col items-center justify-center px-5'>
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

            <div className='flex flex-col  items-center px-2 mt-16 justify-around'>
                <motion.h3
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-3xl sm:text-6xl font-space font-bold text-center'
                >
                    Add your link here
                </motion.h3>
                <motion.input
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    type='text'
                    placeholder='https://google.com/'
                    className='h-fit text-2xl bg-whiteBg outline-none mt-10 font-space 
                    font-bold w-fit mx-auto'
                />

                <motion.button
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.67 }}
                    onClick={() => {
                        if (input == '') {
                            toast({
                                title: 'Text cannot be empty !',
                                description: 'Add your link before submitting',
                                className: 'bg-purple ',
                            });
                            return;
                        }
                        mutation.mutate();
                        if (mutation.isLoading) {
                            if (mutation.isError) {
                                toast({
                                    title: 'Invalid links !',
                                    description:
                                        'Please provide a valid link (http://...)',
                                    className: 'bg-purple ',
                                });
                                return;
                            }
                            if (mutation.isError) {
                                toast({
                                    title: 'Success !',
                                    description: '',
                                    className: 'bg-purple ',
                                });
                            }
                        }
                        // setInput('');
                    }}
                    className='rounded-md bg-purple mt-10 text-white font-space'
                >
                    <span className='block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-black p-3 text-xl transition-all hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0'>
                        {' '}
                        Create URL{' '}
                    </span>
                </motion.button>

                {mutation.data == null ? (
                    <></>
                ) : (
                    <motion.div className='text-center'>
                        <motion.h4
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-3xl font-mulish font-bold  mt-10'
                        >
                            <span className=''>Your shortened link :</span>{' '}
                        </motion.h4>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <motion.h4
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.55 }}
                                        onClick={() => {
                                            toast({
                                                title: 'Text copied !',
                                                description:
                                                    'Share your link to other!',
                                                className: 'bg-purple ',
                                            });
                                            navigator.clipboard.writeText(
                                                `${window.location.href}${mutation.data.short_url}`
                                            );
                                        }}
                                        className='text-2xl font-space   mt-10 hover:cursor-pointer '
                                    >
                                        {`${window.location.href}${mutation.data.short_url}`}
                                    </motion.h4>
                                </TooltipTrigger>
                                <TooltipContent className='bg-black text-white border-none font-space mt-[100rem]'>
                                    <p>Click to copy</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </motion.div>
                )}
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
        </div>
    );
}

export default Home;
