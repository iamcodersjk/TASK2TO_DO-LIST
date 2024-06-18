import React, { useState } from 'react'


const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofitems = () => {
    setItems((oldItems) =>{
      return [...oldItems, inputList];
    });
    setInputList('');
  };
  return (

    <>
    <div className='main_div'>
     <div className="cernter_div">
      <br />
      <h1>TO-DO-LIST</h1>
      <br />
      <input type='text' placeholder='Add an item' value={inputList} onChange={itemEvent} />
      <button onClick={listofitems} > + </button>

      <ol>
       {/* <li> {inputList} </li> */}

      {
        Items.map((itemvalue)=>{
          return (
            <>
            <div className='todo_style'>
              <i class="fa fa-times" aria-hidden="true" />
            <li> {itemvalue} </li>
            </div>
            </>
        )
        })
      }
      </ol>
     </div>

    </div>
    </>
   
  )
}

export default App
