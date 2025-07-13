import React, { use } from "react";

function fetchUsers(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users123")
        .then(res => {
          if (!res.ok) reject(new Error("Network error"));
          else res.json().then(resolve).catch(reject);
        })
        .catch(reject);
    }, 2000);
  });
}

interface MessageComponentProps {
  promise: Promise<any[]>;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ promise }) => {
  const users = use(promise);
  return (
    <div className="alert alert-info mt-3">
      <ul className="list-unstyled mt-3">
        {users.map((user: any) => (
          <li key={user.id} className="mb-3">
            <strong>User: {user.name}</strong><br/>
            <span>Email: {user.email}</span> <br/>
            <span>Phone: {user.phone}</span> <br/>
            <span>Username: {user.username}</span><br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MessageComponent, fetchUsers };
