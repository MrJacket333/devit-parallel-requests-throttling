import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useSendingRequestsStore = create(
  devtools(
    (set) => ({
      sendingRequests: false,
      setSendingRequests: (sendingRequests) => set({ sendingRequests }),
    }),
    { name: 'Sending Requests Store' }
  )
);

export default useSendingRequestsStore;