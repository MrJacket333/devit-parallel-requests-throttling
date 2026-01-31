import { RequestSendingForm } from "@molecules/RequestSendingForm/RequestSendingForm"
import { useHandleRequestSending } from "./hooks/useHandleRequestSending";

export const RequestSendingSection = () => {

    const handleRequestSending = useHandleRequestSending();

    return <RequestSendingForm onSubmit={handleRequestSending} />
}