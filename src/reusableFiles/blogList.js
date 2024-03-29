import { Link } from "react-router-dom";

const Blogs = ({ blogs, title }) => {
  return (
    <div className="blogs-container">
      <h2 style={{
        color: "#fff",
        backgroundColor: "#ff3366",
        padding: "5px 10px",
        width: "fit-content",
        borderRadius: "10px"
      }}>{ title }</h2>
      {blogs.map(blog => (
          <Link to={`/blogs/${blog.id}`}>
          <div className="blog-preview" key= { blog.id }>
            <h2>{blog.title}</h2>
            <h4 style={{marginTop: "5px"}}>written by { blog.author}</h4>
            </div>
          </Link>
        
      ))}
    </div>
  );
}

export default Blogs;