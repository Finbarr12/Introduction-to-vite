import styled from "styled-components";
import logo from "../assets/chyrealrm.png";
import { AiOutlineHome, AiOutlineCloudUpload } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { UseAppDispatch } from "../Global/Store";
import { adminLogout } from "../Global/ReduxState";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Side = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  return (
    <Container>
      <img src={logo} alt="" />
      <NavLink
        to="/dashboard"
        style={({ isActive }) => {
          return {
            background: isActive ? "#f5f5f5" : "",
            textDecoration: "none",
            color: isActive ? "red" : "",
            width: "100%",
            height: "50px",
          };
        }}
      >
        <Holder style={{ marginTop: "24px" }}>
          <Icon size={26} />
          <span>Home</span>
        </Holder>
      </NavLink>
      <NavLink
        to="/dashboard/uploads"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Holder>
          <Icon2 size={26} />
          <span>Upload Furnitures</span>
        </Holder>
      </NavLink>
      <Holder
        style={{ marginTop: "120px" }}
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
        <Icon3 size={26} />
        <span>LogOut</span>
      </Holder>
    </Container>
  );
};

export default Side;

const Icon3 = styled(BiLogOut)`
  margin-left: 30px;
`;

const Icon2 = styled(AiOutlineCloudUpload)`
  margin-left: 30px;
`;

const Icon = styled(AiOutlineHome)`
  margin-left: 30px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  color: white;
  cursor: pointer;
  margin-top: 19px;
  transition: all 350ms ease-in;
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
  }

  span {
    font-size: 20px;
    margin-left: 16px;
  }
`;

const Container = styled.div`
  width: 300px;
  background-color: #0f3738;
  height: 100vh;
  position: sticky;
  top: 0%;

  @media screen and (max-width: 900px) {
    display: none;
  }

  img {
    height: 70px;
    margin-left: 15px;
    margin-top: 15px;
  }
`;
