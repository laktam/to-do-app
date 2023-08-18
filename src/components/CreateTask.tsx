import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Task } from "./Task";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs"; // Import Dayjs type along with dayjs

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  justify-content: space-between;
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
const DatePicker = styled.div`
  background-color: white;
`;

type Props = {
  setTaskList: any;
  taskList: ReactNode[];
};
export function CreateTask(props: Props) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState<Dayjs>();

  const handleTaskChange = (event: any) => {
    setTask(event.target.value);
  };
  const createNewTask = () => {
    if (task !== "") {
      const newTask = (
        <Task content={task} dueDate={date} />
      );
      props.setTaskList([...props.taskList, newTask]);
      setTask("");
      setDate(undefined);
    }
  };

  return (
    <div>
      <TextArea value={task} onChange={handleTaskChange} />
      <Container>
        <DatePicker>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              label="due date"
              value={date}
              onChange={(newDate) => {
                if (newDate !== null) {
                  console.log(newDate);
                  setDate(newDate);
                }
              }}
            />
          </LocalizationProvider>
        </DatePicker>

        <AddTask onClick={createNewTask}>+</AddTask>
      </Container>
    </div>
  );
}
