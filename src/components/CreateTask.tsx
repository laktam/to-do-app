import { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const TextArea = styled.textarea``;
export function CreateTask() {
  const [task, setTask] = useState("");

  const handleTaskChange = (event: any) => {
    setTask(event.target.value);
  };

  return (
    <Container>
      <TextArea value={task} onChange={handleTaskChange} />
    </Container>
  );
}
