import Navbar from "./Navbar";
import Entries from "./Entries";
import Data from "./data";

function App() {
  const entries = Data.map(item => {
    return <Entries 
              key={item.id}
              {...item}
            />
  })
  return (
    <div className="App">
        <div className="journal--container shadow">
          <Navbar />
          {entries}
        </div>
    </div>
  );
}

export default App;
