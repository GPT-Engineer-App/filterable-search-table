import { Box, Button, FormControl, FormLabel, Input, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";

function Admin({ names, setNames }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = { id: names.length + 1, name, age, city };
    setNames([...names, newName]);
    setName("");
    setAge("");
    setCity("");
  };

  const handleDelete = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Age</FormLabel>
          <Input value={age} onChange={(e) => setAge(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input value={city} onChange={(e) => setCity(e.target.value)} />
        </FormControl>
        <Button type="submit">Add Name</Button>
      </form>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>City</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {names.map((name) => (
            <Tr key={name.id}>
              <Td>{name.name}</Td>
              <Td>{name.age}</Td>
              <Td>{name.city}</Td>
              <Td>
                <Button onClick={() => handleDelete(name.id)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Admin;