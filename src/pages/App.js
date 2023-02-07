import { Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState(null);

  const fetchData = () => {
    setData("Loading")
    fetch("http://localhost:3500")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Heading>Welcome to the todos app</Heading>
      <Text>Message from server: {data ? data.message : "Data Not Fetched"}</Text>
      <Button colorScheme={"blue"} onClick={fetchData}>Fetch Data From Server</Button>
    </>
  );
}

export default App;
