export const Button = ({ type, disabled, children }) => (
    <button 
        type={type}
        disabled={disabled}
        className="bg-green-500 hover:bg-green-400 disabled:bg-gray-400 text-shadow-violet-100 px-2 rounded w-full md:w-1/2"
    >
        <span className="text-white">{children}</span>
    </button>
)
