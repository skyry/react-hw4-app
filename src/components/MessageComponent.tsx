import React, {useEffect, useState} from "react";

interface MessageComponentProps {promise: Promise<any[]>;}

const MessageComponent: React.FC<MessageComponentProps> = ({ promise }) => {
  const [users, setUsers] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    promise
      .then(result => {
        setTimeout(() => {if (isMounted) setUsers(result);}, 2000);
      })
      .catch(err => {
        setTimeout(() => {if (isMounted) setError(err.message);}, 2000);
      });
    return () => {isMounted = false; };}, [promise]);

  if (error) {
    return <div className="alert alert-danger mt-3">Error: {error}</div>;
  }

  return (
    <div className="alert alert-info mt-3">
      {!users && "Loading..."}
      {users && (
        <ul className="list-unstyled mt-3">
          {users.map(user => (
            <li key={user.id} className="mb-3">
              <strong>User: {user.name}</strong><br/>
              <span>Email: {user.email}</span> <br/>
              <span>Phone: {user.phone}</span> <br/>
              <span>Username: {user.username}</span><br/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export {MessageComponent};
