import { useRef, useState } from "react";
import "./App.css";

function App() {
  const sliderValue = useRef();
  const [value, setValue] = useState(0);

  const handleChange = () => {
    setValue(sliderValue.current.value);
  };
  return (
    <div className="App">
      <header>
        <h1 className="display-1">Welcome To Data Generator</h1>
      </header>
      <main>
        <div className="form-group row d-flex align-items-center4">
          <div className="form-group w-25">
            <select
              style={{ borderStyle: "solid" }}
              className="custom-select w-75 h-50"
            >
              <option defaultValue={"choose"}>Choose...</option>
              <option value="en">England</option>
              <option value="po">Poland</option>
              <option value="no">Norway</option>
            </select>
          </div>

          <div className="form-group w-25">
            <div className="slidecontainer">
              <input
                type="range"
                min="1"
                ref={sliderValue}
                max="10"
                onChange={handleChange}
                value={value}
                className="slider"
                id="myRange"
              />
              <p>{value}</p>
            </div>
          </div>

          <div className="form-group w-25">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group w-25">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
        </div>

        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
