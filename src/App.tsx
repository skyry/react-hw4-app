import { MessageComponent } from "./components/MessageComponent";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Network error");
  return response.json();
};

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">MessageComponent App</h1>
      <MessageComponent promise={fetchUsers()} />
    </div>
  );
};

export default App;
