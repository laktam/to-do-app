import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  background-color: grey;
  border-radius: 6px;
  padding: 10px;
`;
const SubContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div``;
const Time = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 5px 10px;
`;
const Done = styled.button`
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 16px;
`;

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
