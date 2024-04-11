import { MouseEvent, useState } from "react";
interface Props {
  items: string[];
  headings: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectedItem }: Props) {
  //   let items = ["Delhi", "Mumbai", "Bangalore", "Hyderabad"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];
  const message = items.length === 0 ? <p>No Items Found</p> : null;
  const getMessage = () => {
    return items.length === 0 ? <p>No Items Found</p> : null;
  };

  // Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log("clicked", event);
  };
  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Item found</p>;
  //       </>
  //     );
  //   }
  return (
    <>
      <h1>{headings}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
