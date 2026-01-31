import { useFormContext } from 'react-hook-form';

export const FormInput = ({ id, type, label, placeholder, validation }) => {
    const { register } = useFormContext();

    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(id, validation)}
                className="border border-gray-300 rounded px-2 py-1 text-center w-full md:w-1/2 focus:outline-none"
            />
        </>
    )
}