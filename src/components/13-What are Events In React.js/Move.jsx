const Move = () => {
  function moveHandler() {
    alert("Move mouse event triggered");
    console.log("Move mouse event triggered");
  }

  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius totam, vero
      temporibus magni minima eum quis dolores iusto amet nam nihil consequatur
      quisquam. Sed enim corrupti nihil quisquam, eligendi minima?
    </p>
  );
};

export default Move;
