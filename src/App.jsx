import Header from "./components/Header";
import Todo from "./components/Todo";
import './App.css'
// import Todo from "./Todo";

function App() {
  // function Toolbar({ onPlayMovie, onUploadImage }) {
  //   return (
  //     <div>
  //       <button onClick={onPlayMovie}>Play Movie</button>
  //       <button onClick={onUploadImage}>Upload Image</button>
  //     </div>
  //   );
  // }

  return (
    <>
    {/* <Todo /> */}
    <Header />
    <Todo />
    </>
  );
}

export default App;
