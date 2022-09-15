
import {BsFillSunFill} from 'react-icons/bs';
import {BsFillMoonFill} from 'react-icons/bs';
import {BsFillCloudMoonFill} from 'react-icons/bs';


export const Greetings = () => {
    const date = new Date();
    const hours = date.getHours(); 

  const myStyle = {
    display:'flex',
    gap:"5px",
    alignItems:'center'
  }

  return (
    <>
    {hours>=12? hours>=16? <h2 style={myStyle}>Good Evening! <BsFillMoonFill /> </h2>:<h2 style={myStyle}>Good Afternoon! <BsFillCloudMoonFill /> </h2 >:<h2 style={myStyle}>Good Morning! <BsFillSunFill /></h2>}
    </>
  )
}
