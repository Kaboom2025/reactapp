import ListGroup from "./components/ListGroup";

function App() {
  const foods = ["Apple", "Orange", "Lelon", "melon"];
  const handleSelectItem = (food: string) => {
    console.log(food);
  };
  return (
    <div>
      <ListGroup
        foods={foods}
        heading={"Foods"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
