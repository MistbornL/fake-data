import { useRef, useState } from "react";
import "./App.css";
import us from "./dummyData/us.json";
import sp from "./dummyData/sp.json";
import pol from "./dummyData/pol.json";
import { generatePhone } from "./helper/phone";
import { generateAddress } from "./helper/address";
import { generateFullName } from "./helper/fullname";
import { CSVLink, CSVDownload } from "react-csv";
function App() {
  const sliderValue = useRef();
  const [value, setValue] = useState(0);
  const [chooseValue, setChooseValue] = useState("Choose...");
  const [contacts, setContacts] = useState([]);
  const [region, setRegion] = useState();
  var num = 10;

  let tempContacts = [];
  const handleChange = () => {
    setValue(sliderValue.current.value);
  };

  function generateContacts(country, num) {
    if (country) {
      for (let i = 0; i < num; i++) {
        let temp = [];
        temp.push(Math.random() * 9999999999);
        temp.push(generateFullName(country));
        if (chooseValue === "POL") {
          temp.push("Poland");
        }
        if (chooseValue === "SP") {
          temp.push("Spain");
        }
        if (chooseValue === "USA") {
          temp.push("USA");
        }
        temp.push(generatePhone(country));
        temp.push(generateAddress(country));
        tempContacts.push(temp);
        setContacts(tempContacts);
      }
    } else {
      alert("Choose country");
    }
  }

  function check(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      generateContacts(region, num);
    }
  }

  const handleScroll = (e) => {
    check(e);

    num += 4;
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
              onChange={(e) => {
                setChooseValue(e.target.value);
                if (e.target.value === "USA") {
                  setRegion(us);
                } else if (e.target.value === "SP") {
                  setRegion(sp);
                } else if (e.target.value === "POL") {
                  setRegion(pol);
                }
              }}
            >
              <option defaultValue={chooseValue}>Choose...</option>
              <option value="USA">USA</option>
              <option value="SP">Spain</option>
              <option value="POL">Poland</option>
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
            </div>
          </div>

          <div className="form-group w-25 d-flex align-items-center justify-content-center ">
            <h1>{value}</h1>
          </div>

          <div className="form-group w-25">
            <button className="btn btn-primary">
              <CSVLink
                style={{ textDecoration: "none", color: "white" }}
                data={contacts}
                target="_blank"
              >
                export csv
              </CSVLink>
            </button>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              generateContacts(region, num);
            }}
          >
            Generate
          </button>
        </div>

        <div
          style={{ overflow: "scroll", maxHeight: "455px" }}
          onScroll={handleScroll}
        >
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FullName</th>
                <th scope="col">Country</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => {
                return (
                  <tr key={contact[0]}>
                    <th scope="row">{contact[0]}</th>
                    <td>{contact[1]}</td>
                    <td>{contact[2]}</td>
                    <td>{contact[3]}</td>
                    <td>{contact[4]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
