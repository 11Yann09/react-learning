function Wrapper({ children }) {
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "400px",
        padding: "10px",
        margin: "25px auto",
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
