import { RequestSendingSection } from '@organisms/RequestSendingSection/RequestSendingSection';
import { ServerLogsSection } from '@organisms/ServerLogsSection/ServerLogsSection';

const App = () => (
  <div className="app">
    <h1 className="text-3xl text-center text-gray-900">DevIT parallel requests</h1>
    <RequestSendingSection />
    <ServerLogsSection />
  </div>
);

export default App
