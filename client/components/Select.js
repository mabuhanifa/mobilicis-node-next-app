import { useState } from "react";

const options = [
  { value: 1, label: "Query 1" },
  { value: 2, label: "Query 2" },
  { value: 3, label: "Query 3" },
  { value: 4, label: "Query 4" },
  { value: 5, label: "Query 5" },
];

const Select = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 1,
    label: "Query 1",
  });

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      value={selectedOption ? selectedOption.value : ""}
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
  );
};

export default Select;
