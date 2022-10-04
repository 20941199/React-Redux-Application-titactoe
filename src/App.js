import './App.css';

function App() {
  return (
    <div>
      Clicked ID is :<span id="clicked"></span>
      <br/>
      Current Player:<span id="current">?</span>
      <br/>
      Winner : <span id="winner">?</span>
      <br/>
      <table border="1">
      <colgroup>
      <col className='col'/>
      <col className='col'/>
      <col className='col'/>
      <col className='col'/>
      </colgroup>
      <thead>
        <tr>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >A</td>
          <td ><input type="button" id="A1" onClick="checkID()" className="idle" value=" " /></td>
          <td ><input type="button" id="A2" onClick="checkID()" className="idle" value=" "/></td>
          <td ><input type="button" id="A3" onClick="checkID()" className="idle" value=" "/></td>
        </tr>
        <tr>
          <td >B</td>
          <td ><input type="button" id="B1" onClick="checkID()" className="idle" value=" "/></td>
          <td ><input type="button" id="B2" onClick="checkID()" className="idle" value=" "/></td>
          <td ><input type="button" id="B3" onClick="checkID()" className="idle" value=" "/></td>
        </tr>
        <tr>
          <td >C</td>
          <td ><input type="button" id="C1" onClick="checkID()" className="idle" value=" "/></td>
          <td ><input type="button" id="C2" onClick="checkID()" className="idle" value=" "/></td>
          <td ><input type="button" id="C3" onClick="checkID()" className="idle" value=" "/></td>
        </tr>
      </tbody>
      </table>		
      <br/>
        <input type = "button" id="reset" onClick="location.reload()" value="Reset"/>
    </div>
  );
}

export default App;
