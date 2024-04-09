import React, { useState } from "react";
import { Box, Input, Select, Button, Table, Thead, Tbody, Tr, Th, Td, Flex, Spacer, Heading } from "@chakra-ui/react";
import { FaSearch, FaSort } from "react-icons/fa";

const data = [
  { id: 1, name: "John Doe", age: 30, city: "New York" },
  { id: 2, name: "Jane Smith", age: 25, city: "London" },
  { id: 3, name: "Bob Johnson", age: 35, city: "Paris" },
  { id: 4, name: "Alice Brown", age: 28, city: "New York" },
  { id: 5, name: "Charlie Davis", age: 32, city: "London" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCityFilter = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredData = data.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const cityMatch = selectedCity ? item.city === selectedCity : true;
    return nameMatch && cityMatch;
  });

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        User Table
      </Heading>
      <Flex mb={4}>
        <Input placeholder="Search by name" value={searchTerm} onChange={handleSearch} mr={4} />
        <Select placeholder="Filter by city" value={selectedCity} onChange={handleCityFilter}>
          <option value="">All</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
        </Select>
        <Spacer />
        <Button leftIcon={<FaSearch />}>Search</Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th cursor="pointer" onClick={() => handleSort("name")}>
              Name {sortColumn === "name" && <FaSort />}
            </Th>
            <Th cursor="pointer" onClick={() => handleSort("age")}>
              Age {sortColumn === "age" && <FaSort />}
            </Th>
            <Th cursor="pointer" onClick={() => handleSort("city")}>
              City {sortColumn === "city" && <FaSort />}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.age}</Td>
              <Td>{item.city}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
