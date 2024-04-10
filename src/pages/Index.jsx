import React, { useState } from "react";
import { Box, Input, Select, Button, Table, Thead, Tbody, Tr, Th, Td, Flex, Spacer, Heading } from "@chakra-ui/react";
import { FaSearch, FaSort } from "react-icons/fa";

const Index = ({ names }) => {
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

  const filteredNames = names.filter((name) => {
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedNames = filteredNames.sort((a, b) => {
    return sortDirection === "asc" ? a.localeCompare(b) : b.localeCompare(a);
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
          {sortedNames.map((name) => (
            <Tr key={name}>
              <Td>{name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
