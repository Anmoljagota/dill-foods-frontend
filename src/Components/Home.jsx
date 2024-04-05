import { Box, Flex, Grid, Select, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  GetData,
  getBarChartdata,
  getPieChartdata,
  getrevanue,
} from "../redux/Slices/Analyst.slice";
// import Header from "./Header";
import { useBreakpointValue } from "@chakra-ui/react";

import { BounceLoader } from "react-spinners";
import BarGraph from "./BarChart";
import PieGraph from "./PieChart";

import LineGraph from "./LineChart";
import Header from "./Header";
import NavBar from "./NavBar";
const Home = () => {
  const nav = useBreakpointValue({ base: false, lg: true });
  const [year, setYear] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData(year));
    dispatch(getBarChartdata(year));
    dispatch(getPieChartdata(year));
    dispatch(getrevanue(year));
  }, [year]);
  const { data, visitors, sales, loading, revanue } = useSelector(
    (visitorsdata) => {
      return visitorsdata.Data;
    }
  );
  console.log(data, "iam visitors");

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <Box
      width={nav ? "80%" : "95%"}
      marginLeft={"auto"}
      marginRight={"1.5rem"}
      margin={nav ? "" : "auto"}
    >
      <NavBar />
      <Box w={"100%"} display={"flex"} justifyContent={"flex-end"} p={5}>
        <Select
          placeholder="Choose a Year"
          bg={"black"}
          width={"20%"}
          color={"white"}
          onChange={handleYear}
        >
          <option value="2024" style={{ background: "black" }}>
            2024
          </option>
          <option value="2023" style={{ background: "black" }}>
            2023
          </option>
          <option value="2022" style={{ background: "black" }}>
            2022
          </option>
        </Select>
      </Box>
      <Grid
        templateRows={{ base: "repeat(2,1fr)", lg: "1fr" }}
        templateColumns={{ base: "repeat(2,1fr)", lg: `repeat(4,1fr)` }}
        gap={{ base: 2, md: 3 }}
        justifyContent={"space-between"}
        w={"100%"}
      >
        {data?.map((items, index) => {
          return index < 4 && <Header key={index} items={items} />;
        })}
      </Grid>

      <SimpleGrid
        columns={[1, 1, 2]}
        spacing="40px"
        border={"1px solid red"}
        w={"100%"}
      >
        {loading ? (
          <BounceLoader color="#36d7b7" />
        ) : (
          <>
            {visitors.length > 0 && (
              <Box
                background="var(--primary-bg)"
                boxShadow="var(primary-bs)"
                backdropFilter={"--bg-filter"}
                borderRadius={10}
              >
                <BarGraph visitors={visitors} />
              </Box>
            )}
            {sales.length > 0 && (
              <Box
                background="var(--primary-bg)"
                boxShadow="var(primary-bs)"
                backdropFilter={"--bg-filter"}
                borderRadius={10}
              >
                <PieGraph sales={sales} />
              </Box>
            )}
            {revanue.length > 0 && (
              <Box
                background="var(--primary-bg)"
                boxShadow="var(primary-bs)"
                backdropFilter={"--bg-filter"}
                borderRadius={10}
                w={"100%"}
              >
                <LineGraph revenue={revanue[0]} />
              </Box>
            )}
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
