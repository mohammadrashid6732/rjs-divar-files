import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//configs//
import defaultOptions from "./configs/reactQuery";
//layouts//
import Layouts from "./layouts/Layouts";
//router//
import Router from "./router/Router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layouts>
          <Router />
          <Toaster />
        </Layouts>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
