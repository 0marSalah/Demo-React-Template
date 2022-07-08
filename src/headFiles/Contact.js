import useFetch from "../reusableFiles/useFetch"
const Contact = () => {
  const { isPending } = useFetch()
  return ( 
    
    <div className="contact">
      { isPending && <div style={{
        color: "#ff3366",
        width: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "800"
      }}>Loading...</div> }
      <h1>Contact Us</h1>
      <p>FaceBook</p>
      <p>LinkedIn</p>
    </div>
   );
}
 
export default Contact;