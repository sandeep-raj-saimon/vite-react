import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/button";
function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    console.log("clicked");
    // return (
    //   <>
    //     <Alert>
    //       Hello <span>Sandeep </span>
    //     </Alert>
    //   </>
    // );
  };
  return (
    <>
      {/* <div>
        <ListGroup
          items={["Delhi", "Mumbai", "Bangalore", "Hyderabad"]}
          headings="Cities"
          onSelectedItem={handleSelectItem}
        />
      </div> */}
      {/* <div>
        <Alert>{"sandeep"}</Alert>
      </div> */}
      <div>
        <Button color="danger" text={"sandeep"}>
          <>
            <Alert>{"sandeep"}</Alert>
          </>
        </Button>
      </div>
    </>
  );
}

export default App;
