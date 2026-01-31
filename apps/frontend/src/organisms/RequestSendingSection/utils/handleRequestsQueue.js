import { sendRequest } from "@api/request"

export const handleRequestsQueue = async (generator, resolve, requestCallback) => {
    const requestIndex = generator.next().value;

    if (!requestIndex) {
        return resolve();
    }

    const response = await sendRequest(requestIndex);

    let responseData = {
        responseStatus: response.status,
    };

    if (response.ok) {
        const responseBody = await response.json();
        responseData.responseTime = parseInt(response.headers.get('X-Response-Time')) ?? 0;
        responseData.requestIndex = responseBody.requestIndex;
    } else {
        responseData.requestIndex = requestIndex;
    }

    requestCallback(responseData);

    handleRequestsQueue(generator, resolve, requestCallback);
}