import { Paper } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

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

type Props = {
  content: string;
  dueDate: string | undefined;
};

export function Task(props: Props) {
  const [isDone, setIsDone] = useState(false);

  const handleTaskDone = () => {
    setIsDone(true);
  };

  return isDone ? (
    <></>
  ) : (
    <Paper sx={{ width: "350px" }}>
      <Container>
        <Content>{props.content}</Content>
        <SubContainer>
          <Time>{props.dueDate}</Time>
          <Done onClick={handleTaskDone}>done</Done>
        </SubContainer>
      </Container>
    </Paper>
  );
}
