import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../Global/Store";
import logo from "../Assets/BusinessLogo.png";
import {
  AiOutlineCloudUpload,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";

import { GiCancel } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { adminLogout } from "../Global/ReduxState";
import Swal from "sweetalert2";
import { UseAppDispatch } from "../Global/Store";

const DashHeader = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };
  const admin = useAppSelector((state) => state.loginUser);
  return (
    <Container>
      <img src={logo} alt="" />
      <Hold>
        <Circle>
          <span>{admin?.name.charAt(0)}</span>
        </Circle>
        <p>{admin?.name}</p>
      </Hold>
      {show ? (
        <Icon size={30} onClick={Toggle} />
      ) : (
        <Icon2 size={30} onClick={Toggle} />
      )}
      {show ? (
        <Drop>
          <NavLink to="/dashboard" onClick={Toggle}>
            <Holder>
              <Icons size={30} />
              <p>Home</p>
            </Holder>
          </NavLink>
          <NavLink to="/dashboard/uploads" onClick={Toggle}>
            <Holder>
              <Icons2 size={30} />
              <p>Upload Furnitures</p>
            </Holder>
          </NavLink>
          <Holder
            style={{ marginTop: "40px" }}
            onClick={() => {
              Swal.fire({
                title: "Are you sure you want to LogOut",
                icon: "warning",
                html: `<p style = "color:red; margin:0">Changes cannot be retrieved!!!!!!</p>`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`,
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Logged out successfully",
                    icon: "success",
                    timer: 2000,
                    timerProgressBar: true,
                  });
                  dispatch(adminLogout());
                  navigate("/signinadmin");
                } else if (result.isDenied) {
                  Swal.fire({
                    title: "Changes are not saved",
                    icon: "info",
                    timer: 2000,
                    timerProgressBar: true,
                  });
                }
              });
            }}
          >
            <Icons3 size={30} />
            <p>Log Out</p>
          </Holder>
        </Drop>
      ) : null}
    </Container>
  );
};

export default DashHeader;

const Icons3 = styled(BiLogOut)``;

const Icons2 = styled(AiOutlineCloudUpload)``;

const Holder = styled.div`
  display: flex;
  color: white;
  align-items: center;

  p {
    font-size: 18px;
    margin-left: 20px;
  }
`;

const Icons = styled(AiOutlineHome)``;

const Drop = styled.div`
  width: 200px;
  height: 250px;
  background-color: #0f3738;
  position: absolute;
  top: 95%;
  right: 10%;
  padding-left: 20px;
`;

const Icon = styled(GiCancel)`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    margin-right: 20px;
  }
`;
const Icon2 = styled(AiOutlineMenu)`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    margin-right: 20px;
  }
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  p {
    margin-left: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
  }
  @media screen and (max-width: 900px) {
    margin: 0;
    display: none;
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

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    display: none;

    @media screen and (max-width: 900px) {
      display: flex;
      height: 60px;
    }
  }
`;
