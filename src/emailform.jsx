import React from 'react'
import "./App.css"
export default function Emailform(props) {
  return (
    <div>
       <p id="dataname" className='email'>
       Subject: Student Leave Application <br></br><br></br>

       Dear {props.repname}, <br></br> 

        I hope this email finds you well. I am writing to formally request a leave of absence from {props.startdate} to {props.enddate} from my academic responsibilities as a student at {props.uniname}.

        The reason for my leave is {props.reason}. I assure you that this leave is necessary 
        to address the situation effectively and that I am committed to returning promptly to resume my studies.<br></br>

        During my absence, I will ensure to catch up on missed assignments, lectures, and any other academic obligations to minimize any disruption to my studies. I will also be reachable via email for any urgent matters or clarification needed regarding my coursework.

       I kindly request your approval for this leave and would appreciate it if you could provide any necessary instructions or documentation required for the leave process.<br></br><br></br>

       Thank you for your understanding and consideration.<br></br><br></br>

       Sincerely,<br></br>
       {props.yourname}<br></br>
       {props.classname}
     </p>
    </div>
  )
}
