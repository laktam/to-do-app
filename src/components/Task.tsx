import { Paper } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import relativeTime from "dayjs/plugin/relativeTime";
// var relativeTime = require("dayjs/plugin/relativeTime");

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

type Props = {
  content: string;
  dueDate: Dayjs | undefined;
};

export function Task(props: Props) {
  const [isDone, setIsDone] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    dayjs.extend(relativeTime);

    const updateRemainingTime = () => {
      const now = dayjs();
      console.log(now.to(props.dueDate, true));

      setTimeRemaining(now.to(props.dueDate, true)); // Ensure the result is not negative
      // setTimeRemaining();
      console.log("calculation updated");
    };
    updateRemainingTime();
    let interval = setInterval(updateRemainingTime, 3600000); //hour = 3600000
  }, []);

  const handleTaskDone = () => {
    setIsDone(true);
  };

  return isDone ? (
    <></>
  ) : (
    <Div>
      <Paper sx={{ width: "350px" }}>
        <Container>
          <Content>{props.content}</Content>
          <SubContainer>
            <Time>
              {/* {timeRemaining >= 24
                ? timeRemaining % 24
                  ? `${Math.floor(timeRemaining / 24)} day(s) and ${
                      timeRemaining % 24
                    } hour(s)  left`
                  : `${Math.floor(timeRemaining / 24)} day(s) left`
                : `${timeRemaining} hour(s) left`} */}
              {timeRemaining}
              {" left"}
            </Time>
            <Done onClick={handleTaskDone}>done</Done>
          </SubContainer>
        </Container>
      </Paper>
      {/* {timeRemaining === 0 ? <Missed>task due date is missed</Missed> : <></>} */}
    </Div>
  );
}
