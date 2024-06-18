import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Tapredirection from "./Components/Tapredirection";
import PaymentForm from "./Tapcontent/PaymentForm";
import Nvigate from "./Tapcontent/Nvigate";



const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (

  <QueryClientProvider client={queryClient}>

      <Nvigate/>
  </QueryClientProvider>
  );
};

export default App;
