import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../Global/Store";

const DashHeader = () => {
  const admin = useAppSelector((state) => state.loginUser);
  return (
    <Container>
      <Hold>
        <Circle>
          <span>{admin?.name.charAt(0)}</span>
        </Circle>
        <p>{admin?.name}</p>
      </Hold>
    </Container>
  );
};

export default DashHeader;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  p {
    margin-left: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #0f3738;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f3738;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0%;
`;
