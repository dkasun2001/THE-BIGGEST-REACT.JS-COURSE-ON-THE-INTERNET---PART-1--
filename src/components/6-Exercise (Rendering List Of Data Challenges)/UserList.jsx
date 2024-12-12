const UserList = () => {
  const users = [
    { id: 1, name: "Kasun", age: 23 },
    { id: 2, name: "Tharu", age: 21 },
    { id: 3, name: "Dinu", age: 22 },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <h1>ID: {user.id}</h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
