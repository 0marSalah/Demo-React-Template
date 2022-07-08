import useFetch from "../reusableFiles/useFetch"
import Blogs from "../reusableFiles/blogList"; // import blogs file 

const Home = () => {  

  const {data, isPending, error} = useFetch("http://localhost:8000/blogs")

  return ( 
    <div className="home">
      { error && <div style={{
        color: "#f00",
        marginBottom: "10px",
        padding: "10px 20px",
        borderBottom: "1px solid #eee",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "800"
      }}><span style={{color: "red"}}>ERROR :: </span> { error }</div>}
      { isPending && <div style={{
        color: "#ff3366",
        width: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "800"
      }}>Loading...</div> }
      {data && <Blogs blogs = {data} title="All Blogs Here"/>}
    </div>
    );
}

export default Home;
