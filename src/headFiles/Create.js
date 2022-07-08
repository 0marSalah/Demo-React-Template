import useFetch from "../reusableFiles/useFetch"

const Create = () => {
  const { isPending } = useFetch()

  return ( 
    <div className="create">
      { isPending && <div style={{
        color: "#ff3366",
        width: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "800"
      }}>Loading...</div> }
      <h1>Add A New Blog</h1>
    </div>
  );
}

export default Create;