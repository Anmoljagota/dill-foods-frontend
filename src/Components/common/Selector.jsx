import React from "react";
import { Select } from "@chakra-ui/react";
const Selector = ({ handleYear, placeholder, identifier, yearSelected }) => {
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Select
      placeholder={placeholder}
      bg={"black"}
      color={"white"}
      onChange={(e) => handleYear(e, identifier)}
      disabled={placeholder === "Choose a Month" && !yearSelected}
    >
      {placeholder !== "Choose a Month" ? (
        <>
          <option value="2024" style={{ background: "black" }}>
            2024
          </option>
          <option value="2023" style={{ background: "black" }}>
            2023
          </option>
          <option value="2022" style={{ background: "black" }}>
            2022
          </option>
        </>
      ) : (
        Month.map((ele) => {
          return (
            <option key={ele} value={ele} style={{ background: "black" }}>
              {ele}
            </option>
          );
        })
      )}
    </Select>
  );
};

export default Selector;
