///inline styles

const rootStyle={
  
    width:"150px",
    height:"150px",
    background:"black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"100px",
    color:"gold",
    flexDirection:"column-reverse",
    position:"relative",
    boxShadow:"10px 5px 25px black"
    
}

///createElment


const span=React.createElement("span",null,"")

$(document).ready(function(){
    $("span").css("width","100%")
   ;
  });



//object


const obj={
    a:1,
    b:2,
    c:3,
    d:10,
    e:20,
    f:100
}



///function

function App(){
       const keys = Object.keys(obj);
        return <div class="div"   style={rootStyle} >{span}  {obj[keys[ keys.length * Math.random() << 0]]} </div>; 
    
}



  ///render


ReactDOM.render(<App/>,document.getElementById("root"))