import { MdStyle } from "react-icons/md";

const StyledCard = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        color: "darkblue",
      }}
    >
      <MdStyle />
      <h1>Styled Card</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet optio
        necessitatibus asperiores, dolor quas officia suscipit qui at fugiat sit
        eaque quae! Sapiente dolore necessitatibus quia aliquid officiis vero
        sunt.
      </p>
    </div>
  );
};

export default StyledCard;
