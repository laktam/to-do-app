import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Task } from "./Task";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const TextArea = styled.textarea`
  width: 400px;
  height: 80px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 3px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;
const AddTask = styled.button`
  margin: 10px;
  font-size: 28px;
  border-radius: 45%;
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
    if (task !== "") {
      const newTask = <Task content={task} dueDate={"to update"} />;
      props.setTaskList([...props.taskList, newTask]);
      setTask("");
    }
  };

  return (
    <Container>
      <TextArea value={task} onChange={handleTaskChange} />
      <AddTask onClick={createNewTask}>+</AddTask>
    </Container>
  );
}
