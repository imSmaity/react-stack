import { useState } from "react";
import Button from "./Button";
import "./styles.css";

export default function App() {
  const [stack, setStack] = useState([]);
  const [data, setData] = useState("");
  const functionGroup = {
    dataHandle: function (e) {
      setData(e.target.value);
    },
    pushing: function () {
      if (stack.length < 5) {
        let newStack = stack;
        newStack.push(data);
        setStack(newStack);
        setData("");
      } else {
        alert("Stack is full");
      }
    },
    poping: function () {
      stack.pop();
      setStack([...stack]);
    },
    peek: function () {
      alert(stack);
    },
    isEmpty: function () {
      alert(stack.length === 0);
    },
    isFull: function () {
      alert(stack.length === 5);
    },
    clear: function () {
      setStack([]);
    }
  };
  const buttonPropertics = [
    {
      name: "Push",
      action: functionGroup.pushing
    },
    {
      name: "Pop",
      action: functionGroup.poping
    },
    {
      name: "Peek",
      action: functionGroup.peek
    },
    {
      name: "isEmpty",
      action: functionGroup.isEmpty
    },
    {
      name: "isFull",
      action: functionGroup.isFull
    },
    {
      name: "Clear",
      action: functionGroup.clear
    }
  ];

  return (
    <div className="App">
      <input type="text" value={data} onChange={functionGroup.dataHandle} />
      <br />
      <br />
      {buttonPropertics.map((value, index) => {
        return <Button key={index} name={value.name} onClick={value.action} />;
      })}

      <h5>{stack.length === 0 && "Stack is empty!"}</h5>
      {stack.map((value, index) => {
        return (
          <div key={index}>
            <div style={{ border: "1px solid black", textAlign: "center" }}>
              {value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
