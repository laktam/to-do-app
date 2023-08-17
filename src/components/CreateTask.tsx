import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Task } from "./Task";

const Container = styled.div``;
const TextArea = styled.textarea``;
const AddTask = styled.button`
  font-size: 20px;
`;

type Props = {
  setTaskList: any;
  taskList: ReactNode[];
};
export function CreateTask(props: Props) {
  const [task, setTask] = useState("");

  const handleTaskChange = (event: any) => {
    setTask(event.target.value);
  };
  const createNewTask = () => {
    const newTask = <Task content={task} dueDate={"to update"} />;
    props.setTaskList([...props.taskList, newTask]);
    setTask("");
  };

  return (
    <Container>
      <TextArea value={task} onChange={handleTaskChange} />
      <AddTask onClick={createNewTask}>+</AddTask>
    </Container>
  );
}
