import React, { useContext, useEffect, useState } from 'react'
import { CreateContext } from '../../auth/context/CreateContext';

const Contacts = () => {
  const [user, setUser] = useState([]);
  const { token } = useContext(CreateContext);
  const adminUser = async () => {
    try {
      const response = await fetch("http://localhost:3002/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      alert("error", error);
    }
  };

  useEffect(() => {
    adminUser();
  }, []);

  return (
    <>
      {user.map((users) => (
        <div>
          <h1>{users.username}</h1>
        </div>
      ))}
    </>
  );
}

export default Contacts
