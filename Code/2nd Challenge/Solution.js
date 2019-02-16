const colors = ['red', 'green', 'black', 'blue', 'brown'];

let i=0;

const circle = (i)=>{
  return <div className={"circle "+colors[i]}></div>;
}
const changeClr =()=>{
ReactDOM.render(circle(i), document.getElementById('root'));
  (i+1<colors.length)?i++:i=0;
}

setInterval(changeClr, 2000);
