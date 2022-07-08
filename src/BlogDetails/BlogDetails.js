import { useParams } from "react-router-dom";
import useFetch from "../reusableFiles/useFetch"

const BlogDetails = () => {
  const {id} = useParams()
  const { isPending, error, data: blog } = useFetch(`http://localhost:8000/blogs/${id}`)


  return (
    <div className="blog-deatails">
      { isPending && <div style={{
        color: "#ff3366",
        width: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "800"
      }}>Loading...</div> }
      {error && {error}}
      <p>{ blog && (
        <article>
          <h2 style={{color: "#ff3366", marginBottom: "5px"}}>{ blog.title }</h2>
          <h4>Written By { blog.author }</h4>
          <section style={{marginTop: "5px", fontSize: "16px"}}>
            { blog.body }
          </section>
        </article>
      )}</p>
    </div>
  );
}

export default BlogDetails;