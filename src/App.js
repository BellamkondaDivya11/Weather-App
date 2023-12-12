import React,{useState} from 'react'

const App = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div style={{margin:"20px"}}>
      <center>
        <div className="card" style={{backgroundImage:"linear-gradient(lightblue,darkblue)", width:"400px",height:"460px",borderRadius:"25px", padding:"8px"}}>
          <div className="card-body">
            <h4 className="card-title" style={{colo:"white",fontSize:"20px"}}>Weather App</h4>
            <form onSubmit={submitHandler} >
              <input style={{borderRadius:"25px" ,height:"30px"}} placeholder="Enter City" size="30" type="text" name="city" onChange={changeHandler} value={city}/> <br /><br />
              <input style={{borderRadius:"25px" ,color:""}} type="submit" value="Get Temperature" />
            </form><br /> <br />
            <div>
              <img src="https://img.freepik.com/premium-vector/cloudy-sun-cloud-cute-weather-realistic-icon-3d-cartoon_363543-491.jpg?w=740" width="150px" heigth="150px"  style={{borderRadius:"50%"}}/> 
               <h1 style={{color:"white"}}>{result}</h1> 
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App