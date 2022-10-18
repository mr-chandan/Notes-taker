import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setnotes] = useState({
    title: "",
    content: ""
  });

  function handelchange(event) {
     const {name,value} = event.target;

     setnotes((prev)=>{
      return {
        ...prev,
        [name]:value
      }
     })
  }


  function Submit(event){
     props.onadd(notes)
     event.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange={handelchange} name="title" placeholder="Title" value={notes.title} />
        <textarea onChange={handelchange} name="content" placeholder="Take a note..." rows="3" value={notes.content} />
        <button onClick={Submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
