import "./App.css";
import { useState } from "react";
import { Reorder } from "framer-motion";

function App() {
  const [rowItem, setRowItem] = useState([
    {
      key: 1,
      item: [
        {
          id: 1,
          name: "a",
        },
        {
          id: 2,
          name: "b",
        },
        {
          id: 3,
          name: "c",
        },
      ],
    },
    {
      key: 2,
      item: [
        {
          id: 1,
          name: "a",
        },
        {
          id: 2,
          name: "b",
        },
        {
          id: 3,
          name: "c",
        },
      ],
    },
    {
      key: 3,
      item: [
        {
          id: 1,
          name: "a",
        },
        {
          id: 2,
          name: "b",
        },
        {
          id: 3,
          name: "c",
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            JSON.stringify(rowItem)
          }
        </div>
        <Reorder.Group
          values={rowItem}
          onReorder={setRowItem}
          axis="y"
          style={{ listStyleType: "none" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {rowItem.map((d, idx) => (
              <Reorder.Item value={d} key={d.key}>
                <div
                  style={{
                    padding: 20,
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10,
                    borderStyle: "solid",
                    margin: 10,
                  }}
                >
                  <Reorder.Group
                    values={d.item}
                    onReorder={(newOrder) => {
                      let itemRow = rowItem
                      itemRow[idx].item = newOrder
                      setRowItem([...itemRow])
                    }}
                    axis="x"
                    style={{ listStyleType: "none" }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {d.item.map((data, index) => (
                        <Reorder.Item value={data} key={data.id}>
                          <div
                            style={{
                              padding: 20,
                              borderColor: "white",
                              borderWidth: 2,
                              borderRadius: 10,
                              borderStyle: "solid",
                              margin: 10,
                            }}
                          >
                            <p>Item {data.name}</p>
                          </div>
                        </Reorder.Item>
                      ))}
                    </div>
                  </Reorder.Group>
                  {/* <Reorder.Group
                    values={item}
                    onReorder={setItem}
                    axis="x"
                    style={{ listStyleType: "none" }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {item.map((data, index) => (
                        <Reorder.Item value={data} key={index}>
                          <div
                            style={{
                              padding: 20,
                              borderColor: "white",
                              borderWidth: 2,
                              borderRadius: 10,
                              borderStyle: "solid",
                              margin: 10,
                            }}
                          >
                            <p>Item {index}</p>
                          </div>
                        </Reorder.Item>
                      ))}
                    </div>
                  </Reorder.Group> */}
                </div>
              </Reorder.Item>
            ))}
          </div>
        </Reorder.Group>
      </header>
    </div>
  );
}

export default App;
