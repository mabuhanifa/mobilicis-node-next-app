import { useEffect, useState } from "react";
import Table from "./Table";

const options = [
  { value: 1, label: "Query 1" },
  { value: 2, label: "Query 2" },
  { value: 3, label: "Query 3" },
  { value: 4, label: "Query 4" },
  { value: 5, label: "Query 5" },
];

const Select = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  console.log(selectedOption);
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target);
  };
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:5000/api/users/${selectedOption}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data.data);
    };
    fetchData();
  }, [selectedOption]);

  return (
    <div>
      <div>
        <select
          value={selectedOption ? selectedOption : ""}
          onChange={handleChange}
        >
          <option value=""> Select an option </option>
          {options
            .map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
            .slice(0, 5)}
        </select>
      </div>
      <div>
        <Table data={data} />
      </div>
    </div>
  );
};

export default Select;
