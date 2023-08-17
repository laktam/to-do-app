import { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const TextArea = styled.textarea``;
const AddTask = styled.button`
  font-size: 20px;
`;

type Props = {
  taskList: string[];
};
export function CreateTask(props: Props) {
  const [task, setTask] = useState("");

  const handleTaskChange = (event: any) => {
    setTask(event.target.value);
  };
  const createNewTask = () => {};

  return (
    <Container>
      <TextArea value={task} onChange={handleTaskChange} />
      <AddTask onClick={createNewTask}>+</AddTask>
    </Container>
  );
}
