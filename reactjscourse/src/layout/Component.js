export default function Component() {
const ss ={
color:'red',
background:'black'
};
    return (
      <>
        <div id="ss" style={ss}>Hello, World!</div>
        <div>{unused()}</div>
        <button onClick={sami}>sss</button> 
      </>
    );
}


function unused() {
    return "This function is not used";
}

function sami() {
 if ((document.getElementById("ss").style.color === "red")) {
   document.getElementById("ss").style.color = "blue";
   document.getElementById("ss").innerHTML = "blue";
 } else {
   document.getElementById("ss").style.color = "red";
   document.getElementById("ss").innerHTML = "Hello, World!";
 }
}
