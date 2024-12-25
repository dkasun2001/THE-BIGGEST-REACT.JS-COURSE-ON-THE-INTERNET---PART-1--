import { CgProfile } from "react-icons/cg";

const ProfileCard = () => {
  const style = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
    marginTop: "10px",
  };
  return (
    <div style={style}>
      <CgProfile />
      <h1>Profile Card</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet optio
        necessitatibus asperiores, dolor quas officia suscipit qui at fugiat sit
        eaque quae! Sapiente dolore necessitatibus quia aliquid officiis vero
        sunt.
      </p>
    </div>
  );
};

export default ProfileCard;
