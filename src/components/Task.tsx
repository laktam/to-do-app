import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  padding: 10px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Content = styled.div``;
const Time = styled.div``;
const Done = styled.button``;

type Props = {
  content: string;
  dueDate: string;
};

export function Task(props: Props) {
  return (
    <Container>
      <Content>{props.content}</Content>
      <SubContainer>
        <Time>{props.dueDate}</Time>
        <Done>done</Done>
      </SubContainer>
    </Container>
  );
}
