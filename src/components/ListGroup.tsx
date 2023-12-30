import { Fragment, useState } from "react";
//import { MouseEvent } from "react";

interface listProps {
  foods: string[];
  heading: string;

  onSelectItem: (food: string) => void;
}

function ListGroup({ foods, heading, onSelectItem }: listProps) {
  //hook, state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {foods.length === 0 && <p>No Item found</p>}
      {/*this prints the message and the following thing deoesnt print anything.*/}
      <ul className="list-group">
        {foods.map((food, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={food}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(food);
            }}
          >
            {food}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
