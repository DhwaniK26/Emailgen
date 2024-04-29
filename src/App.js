import { useState,useRef, useEffect } from 'react';
import './App.css';
import { PDFViewer,PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import jsPDF from 'jspdf';
import Emailform from './emailform';
import html2pdf from 'html2pdf.js';


function App() {
  const myref = useRef();
  
  const [txt , settxt] = useState(null);
  const downbutton = useRef(null);
  const datanameref = useRef(null);
  
  useEffect(()=>{
    const button = downbutton.current;
    button.style.display = 'none';

    settxt(<Emailform repname="[Recepient's name]" startdate="[start-date]" enddate="[end-date]" uniname="[University/Institute name]" reason="[Reason for leave]"
    yourname="[Yourname]" classname="[Class-Name]"/>);

  },[])


  function mylastfunc(){
    const element = myref.current;

    html2pdf().from(element).save();
     return true;
  }


 
  const [repnamestate, repnamefunc] = useState(null);
  const [startdatestate, startdatefunc] = useState(null);
  const [enddatestate, enddatefunc] = useState(null);
  const [uninamestate, uninamefunc] = useState(null);
  const [reasonstate, reasonfunc] = useState(null);
  const [yournamestate, yournamefunc] = useState(null);
  const [classnamestate, classnamefunc] = useState(null);
  
  //--------mm1---------
  // useEffect(()=>{
  //   settxt( "my name is " +data+ " i m" + data2);
  // },[data, data2])
 
  //---------mm2-------------
  const handleReplaceText = () => { 
    settxt(<Emailform repname={repnamestate} startdate={startdatestate} enddate={enddatestate} uniname={uninamestate} reason={reasonstate}
    yourname={yournamestate} classname={classnamestate}/>);
    
    //const button3 = document.getElementById('myButton');
    const button3 = downbutton.current;
    button3.style.display = 'inline-block';
  };
  
  
  return (
   <div className='p-3'>
   <fieldset>
   <legend >Fill out the neccessary details here</legend>
   <div className='p-4 m-3' style={{backgroundColor:"#ba55d3 "}} >
    <div className=' d-flex align-items-center justify-content-center flex-wrap'>
      <input type="text" className="col-3 m-3" placeholder="Enter Recipient's name " onChange={(e)=>repnamefunc(e.target.value)}></input> 
      <input type="date"  className="col-3  m-3" placeholder="Enter start date" onChange={(e)=>startdatefunc(e.target.value)}></input> 
      <input type="date"  className="col-3  m-3" placeholder="Enter end date " onChange={(e)=>enddatefunc(e.target.value)}></input> 
      <input type="text"  className="col-3  m-3" placeholder="Enter uniname " onChange={(e)=>uninamefunc(e.target.value)}></input> 
      <textarea rows="2" cols="20"  className="col-3  m-3" placeholder="Enter reason" onChange={(e)=>reasonfunc(e.target.value)}/> 
      <input type="text"  className="col-3  m-3" placeholder="your name " onChange={(e)=>yournamefunc(e.target.value)}></input> 
      <input type="text"  className="col-3  m-3" placeholder="your class " onChange={(e)=>classnamefunc(e.target.value)}></input> <br></br><br></br>
    </div><br></br>
    <div className='d-flex justify-content-center'>
        <button onClick={handleReplaceText} className='mybtn m-2 '>show</button>
        <button id="myButton" ref={downbutton} onClick={mylastfunc} className='mybtn2 m-2'>Download PDF</button>
     </div>
    </div>
    </fieldset>
 
    <div className='m-3 email-div p-4'>

     <p id="dataname" ref={myref} className='email'  style={{ padding: '20px' }}>
       {txt}
     </p>
  
    </div>
     
   </div>
  );
}



export default App;
