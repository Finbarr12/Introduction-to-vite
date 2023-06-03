import { Suspense } from "react";
import styled from "styled-components";
import logo from "../Assets/BusinessLogo.png";
import work from "../Assets/work.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAdmin } from "../Api/Api";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispatch } from "../Global/Store";
import { adminLogin } from "../Global/ReduxState";
import { adminLogout } from "../Global/ReduxState";

const Signin = () => {
  const dispatch = UseAppDispatch();

  const navigate = useNavigate();

  const userSchema = yup
    .object({
      email: yup.string().required("please enter an email"),
      password: yup.string().required("please enter a password"),
    })
    .required();
  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,

    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  const posting = useMutation({
    mutationKey: ["createduser"],
    mutationFn: loginAdmin,

    onSuccess: (myData) => {
      console.log("user", myData);
      dispatch(adminLogin(myData.data));
      Swal.fire({
        title: "Admin looged in sucessfully",
        html: "redirecting to Dashboard",
        timer: 1000,
        timerProgressBar: true,

        willClose: () => {
          navigate("/dashboard");
        },
      });
    },
    onError: (myData: any) => {
      console.log("err", myData.data);
      Swal.fire({
        icon: "error",
        title: "User dosen't exist",
        text: "Try again",
        timer: 2000,
        timerProgressBar: true,
      });
    },
  });

  const Submit = handleSubmit(async (data: any) => {
    console.log(data);

    posting.mutate(data);

    // console.log(data);
  });

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Container>
        <Card onSubmit={Submit}>
          <Left bg="#19797a">{/* <Wrap></Wrap> */}</Left>
          <Right>
            <img src={logo} alt="" />
            <h2>
              <i>Welcome... Sign in</i>
            </h2>
            <p>Please fill in the required fields...</p>

            <input
              type="text"
              placeholder="Input a valid e-mail"
              {...register("email")}
            />
            <input
              type="password"
              placeholder="Password..."
              {...register("password")}
            />
            <div>
              Don't have an account?{" "}
              <NavLink
                to="/signadmin"
                style={{ textDecoration: "underline", color: "blue" }}
              >
                <span>Create One</span>
              </NavLink>
            </div>

            <button type="submit" style={{ cursor: "pointer" }}>
              Sign in
            </button>
            <div
              onClick={() => {
                dispatch(adminLogout());
              }}
            ></div>
          </Right>
        </Card>
      </Container>
    </Suspense>
  );
};

export default Signin;

const Right = styled.div`
  background-color: white;
  display: flex;
  align-items: center;

  flex-direction: column;

  p {
    margin: 0;
  }

  h2 {
    margin: 0;
    font-size: 29px;
  }
  div {
    margin-top: 15px;
  }

  button {
    width: 90%;
    height: 40px;
    background-color: #0f3738;
    outline: none;
    border: 0;
    margin-top: 30px;
    color: white;
    font-size: 16px;
    border-radius: 5px;
  }
  input {
    width: 85%;
    height: 40px;
    border: none;
    margin: 10px;
    background-color: #f5f5f5;
    outline-color: #0f3738;
    padding-left: 20px;

    ::placeholder {
      font-size: 15px;
    }
  }
`;

const Left = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${work});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(25px);
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    margin: 0;
    color: white;
    font-size: 29px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-color: #929999; */
`;

const Card = styled.form`
  width: 750px;
  height: 450px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 450px);
  border-radius: 20px;
  box-shadow: rgba(90, 88, 88, 0.24) 0px 3px 8px;
  @media screen and (max-width: 500px) {
    height: 1000px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
