import logo from './logo.svg';
import './App.css';
import ygodata from './data/ygojson.json';

function App() {
  return (
    <div className="App">
      {
        ygodata.map((card) => {
          if (card["Total Quantity"] > 0) {
            return (
              <div>
                <p>
                {card["Total Quantity"]}
                </p>

                <p>
                  {card["Product Name"]}
                </p>

                <p>
                  {card["TCG Market Price"]}
                </p>
              </div>
            )
          }
        })
      }
    </div>
  );
}

export default App;
