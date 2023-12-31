import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  /// const foods = ["Apple", "Orange", "Lelon", "melon"];
  ///const handleSelectItem = (food: string) => {
  ///  console.log(food);
  ///};
  return (
    <div>
      <Button onClick={() => console.log("clicked")}> yo</Button>

      {/*<ListGroup
        foods={foods}
        heading={"Foods"}
        onSelectItem={handleSelectItem}
  />*/}
    </div>
  );
}

export default App;
