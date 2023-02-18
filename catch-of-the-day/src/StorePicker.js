import React from "react";
import { getFunName } from "./helpers"

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;



// //Constructor MEHTOD
// class StorePicker extends React.Component {
//   //Method that runs before storepicker comoient is create----Can't run anything in constructor before you call super
//   constructor() {
//     //super runs component that we are extendng first
//     super()
//     //now we can bind all the methods
//     //overwrite the mehtod on it and then attach binding to
//     //ref this inside of go to stroer as the storepicker instance
//     this.goToStore = this.goToStore.bind(this);
//     console.log(this)
//   }
//   myInput = React.createRef();
//   goToStore (event) {
//     //Store form from submit
//     event.preventDefault();
//     //2. Get text from input
    
//     //3. Change page to store whatever they entereed
//     console.log("going to")
//   }
//   render() {
//     console.log(this);
//     return (
//         <form className="store-selector" onSubmit={this.goToStore}>
//           <h2>Please Enter A Store</h2>
//           <input type="text" ref={this.myInput} requred placeholder="Store Name" defaultValue={getFunName()} />
//           <button type="submit">Visit Store </button>
//         </form>
//     )
//   }
// }