export const ErrorsHandler = ({ errors, messages }) => {
    return (<>
        {errors && Object.entries(errors).map(([field]) => (
            <span key={field} className="error-message text-red-500 text-sm">{messages[field]}</span>
        ))}
    </>)
}