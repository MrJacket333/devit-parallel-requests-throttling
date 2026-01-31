import { useCallback } from "react";
import { useShallow } from 'zustand/react/shallow';
import { requestIndexGenerator } from "../utils/requestIndexGenerator";
import useSendingRequestsStore from "@molecules/RequestSendingForm/store/useSendingRequestsStore";
import useServerResponsesStore from "@molecules/ServerLogsList/store/useServerResponsesStore";
import { handleRequestsQueue } from "../utils/handleRequestsQueue";

export const useHandleRequestSending = () => {
    const setSendingRequests = useSendingRequestsStore((state) => state.setSendingRequests);
    const { addResponse, clearResponses } = useServerResponsesStore(
        useShallow((state) => ({
            addResponse: state.addResponse,
            clearResponses: state.clearResponses
        }))
    );

    const handleRequestsSending = useCallback(({ requestsPerSecond }) => {        
        setSendingRequests(true);
        clearResponses();
        const generator = requestIndexGenerator(1000);
        const requestsPerSecondInt = parseInt(requestsPerSecond);
        const promisesArray = Array.from({ length: requestsPerSecondInt }, () => {
            return new Promise((resolve) => {
                handleRequestsQueue(generator, resolve, (responseData) => addResponse(responseData));
            });
        });

        Promise.all(promisesArray).then(() => {
            setSendingRequests(false);
        });

    }, [addResponse, clearResponses, setSendingRequests]);

    return handleRequestsSending;
}
