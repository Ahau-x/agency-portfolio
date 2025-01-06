const Video = () => {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
      <video controls height={"100%"}>
        <source src="/detection.mov" />
      </video>
    </div>
  );
};

export default Video;
