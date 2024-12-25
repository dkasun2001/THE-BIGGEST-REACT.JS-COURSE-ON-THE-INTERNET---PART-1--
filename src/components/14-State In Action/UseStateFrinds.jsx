import { useState } from "react";

const UseStateFrinds = () => {
  const [friends, setFriends] = useState(["Dinusha", "Kasun"]);

  const addOneFriend = () => setFriends([...friends, "Kamal"]);
  const removeOneFriend = () => setFriends(friends.filter(friend => friend !== "Dinusha"));
  const updateOneFriend = () => setFriends(friends.map(friend => friend === "Dinusha" ? "Dinusha Perera" : friend));

  return (
    <section>
      <h1>Use State Friends</h1>
      <ul>
        {friends.map((friend, index) => {
          return <li key={index}>{friend}</li>;
        })}
      </ul>
      <button onClick={addOneFriend}>Add Friend</button>
      <button onClick={removeOneFriend}>Remove one friend</button>
      <button onClick={updateOneFriend}>Update one friend</button>
    </section >
  );
};

export default UseStateFrinds;
