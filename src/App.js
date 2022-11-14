import './App.css';
import FilteredList from './FilteredList';

function App() {

  const productList = [
    { name: "Cute Plant", size: "Medium"},
    { name: "Happy Plant", size: "Large"},
    { name: "Sad Plant", size: "Desktop"},
    { name: "Smart Plant", size: "Medium"},
    { name: "Sleepy Plant", size: "Desktop"}
   ]
   

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <FilteredList list={productList} /> */}
    </div>
  );
}

export default App;
