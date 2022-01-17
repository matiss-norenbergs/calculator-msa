import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {
  return (
    <div className="content">
      <div className="calc">
        <div className="screen">
          <Screen />
        </div>

        <div className="buttons">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
