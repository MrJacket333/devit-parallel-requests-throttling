export const sendRequest = (requestIndex) =>
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestIndex }),
    })
