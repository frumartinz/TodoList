import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({Firtsname: "", Lastname: "", email: ""});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name)
  }
  
  return (
    <div>
        {name.Firtsname} - {name.Lastname}
      <form>
        <div>
            <label>Firtsname: </label>
            <input onChange={(e) => setName({...name, Firtsname: e.target.value})} type="text" value={name.Firtsname} />
        </div>

        <input onChange={(e) => setName({...name, Lastname: e.target.value})} type="text" value={name.Lastname} />

        <input onChange={(e) => setName({...name, email: e.target.value})} type="email" value={name.email} />

        <div>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
