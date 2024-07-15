// App.js
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProfile } from "./UserProfile";
import UserProfile1 from "./UserProfile1";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>User Profiles</h1>
        <UserProfile userId={1} />
        <UserProfile userId={2} />
        <UserProfile userId={3} />
      </div>
    </QueryClientProvider>
    // <>
    //   <QueryClientProvider client={queryClient}>
    //     <UserProfile1 />
    //   </QueryClientProvider>
    // </>
  );
}

export default App;
