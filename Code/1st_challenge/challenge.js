class MyComponent extends React.Component {
  
  constructor() {
    super();
    this.state = {
      names: ['name 1', 'name 2', 'name 3'],
    }
  }
  
  addName = () => {
    // this function is correct
    const name = document.querySelector("#input").value;
    if(name.length === 0){
      alert("insert a valid name");
      return;
    }
    let names = this.state.names;
    names.push(name);
    this.setState({names})
  }
  MyItems = ()=>{
        const {names} = this.state;
    const items = [];
     for (const [index, value] of names.entries()) {
            items.push(<li key={index}>{value}</li>)
          }
    return items;
  }
  render () {

    return (
      <div>
        <label>Name: </label>
        <input type="text" id="input" />
        <button onClick={this.addName}>Add</button>
        <br/>
        <ul>{
         this.MyItems()
         }
          </ul>
      </div>
    );
  } 
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));


