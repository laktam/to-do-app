import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Task } from "./Task";
import {
  DateField,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
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

type TaskContent = {
  id: number;
  content: string;
  dueDate: Dayjs | undefined;
};

type Props = {
  setTaskList: any;
  taskList: TaskContent[];
};
export function CreateTask(props: Props) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState<Dayjs | undefined>(dayjs());

  const handleTaskChange = (event: any) => {
    setTask(event.target.value);
  };
  const createNewTask = () => {
    if (task !== "") {
      const newTask = {
        id: props.taskList[props.taskList.length - 1].id + 1,
        content: task,
        dueDate: date,
      };
      props.setTaskList([...props.taskList, newTask]);
      localStorage.setItem(
        "taskList",
        JSON.stringify([...props.taskList, newTask])
      );
      setTask("");
    }
  };

  return (
    <div>
      <TextArea value={task} onChange={handleTaskChange} />
      <Container>
        <DatePicker>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="due date"
              // value={date}
              // defaultValue={date}
              onChange={(newDate) => {
                if (newDate !== null) {
                  setDate(newDate as Dayjs);
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
