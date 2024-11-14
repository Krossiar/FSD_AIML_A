import qBank from "./qBank";
function App() {
  return (
    <div>
      <h1>My Quiz Application</h1>
      <br></br> 
      Question {qBank.id}.{qBank.question}<br/>
      <input type="radio" name="opt"/>{qBank.option1}<br/>
      <input type="radio" name="opt"/>{qBank.option2}<br/>
      <input type="radio" name="opt"/>{qBank.option3}<br/>
      <input type="radio" name="opt"/>{qBank.option4}<br/>
      <input type="button" value="Previous"/>
      <input type="button" value="Next"/>
    </div>
    
  );
}
export default App;
