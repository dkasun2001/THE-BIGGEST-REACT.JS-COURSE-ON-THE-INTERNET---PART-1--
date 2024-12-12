const Greeting = () => {
  const greet = "Hello";
  const date = new Date();

  return (
    <div>
      <h1>{greet}</h1>
      <p>
        Date: {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
      </p>
    </div>
  );
};
export default Greeting;
