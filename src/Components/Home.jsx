import { Box, Flex, Grid, SimpleGrid, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  GetData,
  getBarChartdata,
  getPieChartdata,
  getrevanue,
} from "../redux/Slices/Analyst.slice";
// import Header from "./Header";
import { useBreakpointValue } from "@chakra-ui/react";

import {  ScaleLoader } from "react-spinners";
import BarGraph from "./BarChart";
import PieGraph from "./PieChart";

import LineGraph from "./LineChart";
import Header from "./Header";
import NavBar from "./NavBar";
import Selector from "./common/Selector";
const Home = () => {
  const nav = useBreakpointValue({ base: false, lg: true });
  const [year, setYear] = useState("");
  const [yearSelected, setYearSelected] = useState(false);
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

  const handleChartData = (e, key) => {
    console.log(e.target.value, key);
    setYearSelected(true);
  };

  const togglediabled = () => {
    setYearSelected(true);
  };
  return (
    <Box
      width={nav ? "80%" : "95%"}
      marginLeft={"auto"}
      marginRight={"1.5rem"}
      margin={nav ? "" : "auto"}
    >
      <NavBar />
      <Box display={"flex"} justifyContent={"flex-end"} p={5}>
        <Selector handleYear={handleYear} placeholder={"Choose a Year"} />
      </Box>
      {loading ? (
        <Center mt={20}>
          <ScaleLoader color="#36d7b7" />
        </Center>
      ) : (
        <React.Fragment>
          <Grid
            templateRows={{ base: "repeat(2,1fr)", lg: "1fr" }}
            templateColumns={{ base: "repeat(2,1fr)", lg: `repeat(3,1fr)` }}
            gap={{ base: 2, md: 10 }}
            justifyContent={"space-between"}
            w={"100%"}
            borderRadius={8}
          >
            {data?.map((items, index) => {
              return <Header key={index} {...items} />;
            })}
          </Grid>
          <Box overflowX="hidden">
            <SimpleGrid
              mt={10}
              borderRadius={8}
              columns={[1, 1, 2]}
              spacing="40px"
              w={"100%"}
            >
              <>
                {visitors.length > 0 && (
                  <Box>
                    <Flex gap={10}>
                      <Selector
                        handleYear={togglediabled}
                        identifier={"visitors"}
                        placeholder={"Choose a Year"}
                      />
                      <Selector
                        handleYear={handleChartData}
                        placeholder={"Choose a Month"}
                        yearSelected={yearSelected}
                      />
                    </Flex>
                    <Box
                      background="var(--primary-bg)"
                      boxShadow="var(primary-bs)"
                      backdropFilter={"--bg-filter"}
                      borderRadius={10}
                      mt={5}
                    >
                      <BarGraph visitors={visitors} />
                    </Box>
                  </Box>
                )}
                {sales.length > 0 && (
                  <Box>
                    <Flex gap={10}>
                      <Selector
                        handleYear={togglediabled}
                        placeholder={"Choose a Year"}
                        identifier={"sales"}
                      />
                      <Selector
                        handleYear={handleChartData}
                        placeholder={"Choose a Month"}
                      />
                    </Flex>
                    <Box
                      background="var(--primary-bg)"
                      boxShadow="var(primary-bs)"
                      backdropFilter={"--bg-filter"}
                      borderRadius={10}
                      mt={5}
                    >
                      <PieGraph sales={sales} />
                    </Box>
                  </Box>
                )}
                {revanue.length > 0 && (
                  <Box>
                    <Flex gap={10}>
                      <Selector
                        handleYear={togglediabled}
                        placeholder={"Choose a Year"}
                        identifier={"revanue"}
                      />

                      <Selector
                        w={"45%"}
                        handleYear={handleChartData}
                        placeholder={"Choose a Month"}
                        size="lg"
                      />
                    </Flex>
                    <Box
                      background="var(--primary-bg)"
                      boxShadow="var(primary-bs)"
                      backdropFilter={"--bg-filter"}
                      borderRadius={10}
                      mt={5}
                    >
                      <LineGraph revenue={revanue[0]} />
                    </Box>
                  </Box>
                )}
              </>
            </SimpleGrid>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Home;
