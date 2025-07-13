import {MessageComponent, fetchUsers} from "./components/MessageComponent";
import ErrorBoundary from "./components/ErrorBoundary";
import {Suspense} from "react";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">Message Component App</h1>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <MessageComponent promise={fetchUsers()} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
