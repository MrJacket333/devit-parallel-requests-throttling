import useSendingRequestsStore from '@molecules/RequestSendingForm/store/useSendingRequestsStore';
import { ServerLogsList } from '@molecules/ServerLogsList/ServerLogsList';
import useServerResponsesStore from '@molecules/ServerLogsList/store/useServerResponsesStore';

export const ServerLogsSection = () => {
    const isSendingRequests = useSendingRequestsStore((state) => state.sendingRequests);
    const serverResponsesLength = useServerResponsesStore((state) => state.serverResponses.length);
    
    return (isSendingRequests || !!serverResponsesLength) && <ServerLogsList />;
}