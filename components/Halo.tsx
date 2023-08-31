export default function Halo({ children }) {
    return (
        <div className='relative w-full group'>
            <div className='absolute transition duration-1000 rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-cyan-400 to-cyan-600 blur group-hover:opacity-100 group-hover:duration-200'></div>
            {children}
        </div>
    );
}
