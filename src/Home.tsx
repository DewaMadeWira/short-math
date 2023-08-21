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

interface Data {
    short_url: string;
}

function Home() {
    const { toast } = useToast();
    const [input, setInput] = useState('');

    const mutation = useMutation({
        mutationFn: async () => {
            const { data } = await axios.post(`http://localhost:8080/`, {
                fullUrl: input,
            });
            return data as Data;
        },
    });
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
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    type='text'
                    placeholder='https://google.com/'
                    className='h-fit text-4xl bg-whiteBg outline-none mt-10 font-space 
                    font-bold w-fit'
                />

                <button
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
                </button>

                {mutation.data == null ? (
                    <></>
                ) : (
                    <div className='text-center'>
                        <h4 className='text-3xl font-mulish font-bold  mt-10'>
                            <span className=''>Your shortened link :</span>{' '}
                        </h4>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <h4
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
                                        className='text-3xl font-space font-bold  mt-10 hover:cursor-pointer '
                                    >
                                        {`${window.location.href}${mutation.data.short_url}`}
                                    </h4>
                                </TooltipTrigger>
                                <TooltipContent className='bg-black text-white border-none font-space mt-[100rem]'>
                                    <p>Click to copy</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
