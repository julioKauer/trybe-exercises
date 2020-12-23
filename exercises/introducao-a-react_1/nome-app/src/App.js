import './App.css';
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  return (
    <ul>
    {[1,2,3,4,5].map(num => task(num))}
    </ul>
  );
}

export default App;
