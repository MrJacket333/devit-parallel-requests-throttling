import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useServerResponsesStore = create(
  devtools(
    (set) => ({
      serverResponses: [],
      addResponse: (response) => set((state) => ({ serverResponses: [...state.serverResponses, response] })),
      clearResponses: () => set({ serverResponses: [] }),
    }),
    { name: 'Server Responses Store' }
  )
);

export default useServerResponsesStore;