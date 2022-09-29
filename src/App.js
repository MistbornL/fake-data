import { useRef, useState } from "react";
import "./App.css";
import us from "./dummyData/us.json";
import sp from "./dummyData/sp.json";
import pol from "./dummyData/pol.json";
function App() {
  const sliderValue = useRef();
  const [value, setValue] = useState(0);

  const [contacts, setContacts] = useState([]);
  const [region, setRegion] = useState(us);

  let tempContacts = [];
  const handleChange = () => {
    setValue(sliderValue.current.value);
  };
  function generateFullName(country) {
    let randName = Math.floor(Math.random() * country.names.length);
    let randMidName = Math.floor(Math.random() * country.middleNames.length);
    let randLastName = Math.floor(Math.random() * country.lastNames.length);
    return [
      country.names[randName],
      country.middleNames[randMidName],
      country.lastNames[randLastName],
    ].join(" ");
  }

  function generateAddress(country) {
    let randCity = Math.floor(Math.random() * country.cities.length);
    let randStreet = Math.floor(Math.random() * country.streets.length);
    let randHouse = Math.floor(Math.random() * 1000);
    let randApartment = Math.floor(Math.random() * 1000);
    return [
      `${country.cities[randCity]} city`,
      `${country.streets[randStreet]} street`,
      `${randHouse} / ${randApartment}`,
    ].join(", ");
  }

  function generatePhone(country) {
    let phone = "";
    let randCode = Math.floor(Math.random() * country.phoneCodes.length);
    phone += country.phoneCodes[randCode];
    for (let i = 0; i < 7; i++) {
      const randInt = Math.floor(Math.random() * 10);
      phone += randInt;
    }
    return phone;
  }

  function generateContacts(country, num) {
    for (let i = 0; i < num; i++) {
      let temp = [];
      temp.push(Math.random() * 9999999999);
      temp.push(generateFullName(country));
      if (country === pol) {
        temp.push("Poland");
      }
      if (country === sp) {
        temp.push("Spain");
      }
      if (country === us) {
        temp.push("USA");
      }
      temp.push(generatePhone(country));
      temp.push(generateAddress(country));
      tempContacts.push(temp);
      setContacts(tempContacts);
    }
  }
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
                setRegion(e.target.value);
              }}
            >
              <option defaultValue={region}>Choose...</option>
              <option value="USA">USA</option>
              <option value="SP">Spain</option>
              <option value="Pol">Poland</option>
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
          <button
            className="btn btn-primary"
            onClick={() => {
              generateContacts(region, 10);
            }}
          >
            Generate
          </button>
        </div>

        <table class="table table-dark">
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
      </main>
    </div>
  );
}

export default App;
