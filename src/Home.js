import { useState} from "react"

const Home = () => {

  let [name, setName] = useState("Omar")
  let [age, setAge] = useState(20)

  const handleClick = () => {
    setName("Amr")
    setAge(age + 1)
  }
  
  return ( 
    <div className="home">
      <h2>Home Page</h2>
      <p>{ name } is { age } Years Old</p>
      <button onClick={() => handleClick()}>click me</button>
    </div>
    );
}

export default Home;
