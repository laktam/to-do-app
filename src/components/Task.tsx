import { Paper } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import relativeTime from "dayjs/plugin/relativeTime";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import CloseImage from "../images/closeButton.png";
import { Context } from "../App";

const Container = styled.div`
  margin: 8px;
  // background-color: #fff; //#d6e6f2
  border-radius: 6px;
  padding: 10px 10px 4px 10px;
`;
const SubContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div``;
const Time = styled.div`
  background-color: #e4e6eb;
  border-radius: 20px;
  padding: 3px 11px;
  font-size: 15px;
`;
const Done = styled.button`
  border-style: none;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 15px;
  color: white;
  background-color: rgb(32, 120, 244); //#769fcd;
`;
const Div = styled.div`
  position: relative;
`;
const Missed = styled.div`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.5); /* Gray with 50% opacity */
  font-size: 20px;
`;
const ClearButton = styled.button`
  position: absolute;
  border-radius: 50%;
  top: 4px;
  right: 4px;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  id: number;
  content: string;
  dueDate: Dayjs | undefined;
};

export function Task(props: Props) {
  const [isDone, setIsDone] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [isMissed, setIsMissed] = useState(false);
  const [elevation, setElevation] = useState(1);

  const taskContext = useContext(Context);

  useEffect(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(isSameOrAfter);

    const updateRemainingTime = () => {
      const now = dayjs();
      if (props.dueDate !== undefined) {
        console.log(props.dueDate);
        if (dayjs(props.dueDate).isAfter(now)) {
          setTimeRemaining(now.to(props.dueDate, true));
          console.log("calculation updated");
        } else {
          setIsMissed(true);
        }
      }
    };
    updateRemainingTime();
    let interval = setInterval(updateRemainingTime, 60000); //hour = 3600000

    //clean up function
    //executed when the component unmout
    //or when the dependencies change (before the new effect is applied)
    return () => {
      console.log("timer is exited before unmouting");
      clearInterval(interval);
    };
  }, [isMissed]); //?????????

  const handleTaskDone = () => {
    const newTaskList = taskContext.taskList.filter((item) => {
      return item.id !== props.id;
    });
    taskContext.setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
    setIsDone(true);
  };

  return isDone ? (
    <></>
  ) : (
    <Div
      onMouseEnter={() => {
        setElevation(9);
      }}
      onMouseLeave={() => {
        setElevation(1);
      }}
    >
      <Paper sx={{ position: "relative" }} elevation={elevation}>
        {/* width: "350px", */}
        <Container>
          <Content>{props.content}</Content>
          <SubContainer>
            <Time>{!isMissed ? `${timeRemaining} left` : "no time left"}</Time>
            <Done onClick={handleTaskDone}>done</Done>
          </SubContainer>
        </Container>
        {isMissed ? (
          <Missed>
            task due date is missed
            <ClearButton onClick={handleTaskDone}>
              <img style={{ height: "70%", width: "auto" }} src={CloseImage} />
            </ClearButton>
          </Missed>
        ) : (
          <></>
        )}
      </Paper>
    </Div>
  );
}
