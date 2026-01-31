import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput } from '@atoms/FormInput/FormInput';
import { Button } from '@atoms/Button/Button';
import { ErrorsHandler } from '@atoms/ErrorsHandler/ErrorsHandler';
import useSendingRequestsStore from './store/useSendingRequestsStore';


export const RequestSendingForm = React.memo(({ onSubmit }) => {
  const methods = useForm();
  const sendingRequests = useSendingRequestsStore((state) => state.sendingRequests);

  return (
    <FormProvider {...methods}>
      <form
        className="input-form flex flex-col p-2 justify-center items-center gap-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormInput
          id="requestsPerSecond"
          type="number"
          label="Parallel requests"
          placeholder="Input a number of parallel requests"
          validation={{ required: true, min: 1, max: 1000 }}
        />
        <ErrorsHandler
          errors={methods.formState.errors}
          messages={{ requestsPerSecond: "Please enter a valid number between 1 and 1000" }}
        />
        <Button type="submit" disabled={sendingRequests}>Start</Button>
      </form>
    </FormProvider>
  )
});
