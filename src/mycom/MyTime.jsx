
function MyTime(){
  return (<div className="myt">{new Date().toLocaleTimeString()}</div>);
} //new Date가 생성자임

export default MyTime;