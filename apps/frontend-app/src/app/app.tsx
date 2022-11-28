import { Button } from '@project/common-ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 className="text-4xl bg-red-500">Hello</h1>
        <Button>sadsada</Button>
      </div>
    </QueryClientProvider>
  );
}

export default App;
