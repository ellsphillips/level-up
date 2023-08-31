import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div
            className={
                'group flex flex-col items-center justify-center space-y-4'
            }
        >
            <p className='flex items-center justify-center text-4xl'>{count}</p>
            <div className={'flex row space-x-8'}>
                <button
                    className='px-4 py-1 text-sm font-medium text-white rounded-md group-hover:duration-200 bg-slate-700 hover:bg-slate-600'
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
                <button
                    className='px-4 py-1 text-sm font-medium text-white rounded-md group-hover:duration-200 bg-slate-700 hover:bg-slate-600'
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
            </div>
            <button
                className='text-gray-500 group-hover:duration-200 hover:text-gray-400'
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    );
}
