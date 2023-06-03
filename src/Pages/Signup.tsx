import { Suspense, useState } from "react";
import styled from "styled-components";
import logo from "../Assets/BusinessLogo.png";
import work from "../Assets/work.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import { RegisterAdmin } from "../Api/Api";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const Toggpass = () => {
    setShow(!show);
  };

  const Toggpass2 = () => {
    setShow2(!show2);
  };

  const navigate = useNavigate();

  const userSchema = yup
    .object({
      name: yup.string().required("please enter a name"),
      email: yup.string().required("please enter an email"),
      password: yup.string().required("please enter a password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "passwords must match")
        .required("please confirm your password"),
    })
    .required();
  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,
    formState: { errors },

    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  const posting = useMutation({
    mutationKey: ["createduser"],
    mutationFn: RegisterAdmin,

    onSuccess: (myData) => {
      console.log("user", myData);
      //   dispatch(login(myData.data));
      Swal.fire({
        title: "User registered sucessfully",
        html: "redirecting to login",
        timer: 1000,
        timerProgressBar: true,

        willClose: () => {
          navigate("/signinadmin");
        },
      });
    },
    onError: (myData: any) => {
      console.log("err", myData.data);
      Swal.fire({
        icon: "error",
        title: "Email already exists. try again",
        timer: 2000,
        timerProgressBar: true,
      });
    },
  });

  const Submit = handleSubmit(async (data: any) => {
    posting.mutate(data);
  });
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Container>
        <Card onSubmit={Submit}>
          <Left bg="#19797a"></Left>
          <Right>
            <img src={logo} alt="" />
            <h2>
              <i>Create an account</i>
            </h2>
            <p>Please fill in the required fields...</p>

            <input
              type="text"
              placeholder="Input your full name"
              {...register("name")}
            />
            <p style={{ color: "red" }}>
              {errors?.name && errors?.name?.message}
            </p>
            <input
              type="text"
              placeholder="Input a valid e-mail"
              {...register("email")}
            />
            <p style={{ color: "red" }}>
              {errors?.email && errors?.email?.message}
            </p>
            <HoldPass>
              <Input
                style={{
                  margin: "0",
                  outline: "none",
                  border: "none",
                  background: "transparent",
                }}
                type={show ? "text" : "password"}
                placeholder="Password...."
                {...register("password")}
              />
              <p style={{ color: "red" }}>
                {errors?.password && errors?.password?.message}
              </p>
              {show ? (
                <BiLockOpenAlt
                  style={{ cursor: "pointer" }}
                  onClick={Toggpass}
                />
              ) : (
                <BiLockAlt onClick={Toggpass} style={{ cursor: "pointer" }} />
              )}
            </HoldPass>
            <HoldPass>
              <Input
                style={{
                  margin: "0",
                  outline: "none",
                  border: "none",
                  background: "transparent",
                }}
                type={show2 ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirmPassword")}
              />
              <p style={{ color: "red" }}>
                {errors?.confirmPassword && errors?.confirmPassword?.message}
              </p>
              {show2 ? (
                <BiLockOpenAlt
                  style={{ cursor: "pointer" }}
                  onClick={Toggpass2}
                />
              ) : (
                <BiLockAlt onClick={Toggpass2} style={{ cursor: "pointer" }} />
              )}
            </HoldPass>
            <div>
              Already have an account?{" "}
              <NavLink
                to="/signinadmin"
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  height: "100%",
                }}
              >
                <span>Sign in</span>
              </NavLink>
            </div>
            <button type="submit" style={{ cursor: "pointer" }}>
              Sign up
            </button>
          </Right>
        </Card>
      </Container>
    </Suspense>
  );
};

export default SignUp;

const Input = styled.input``;

const HoldPass = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  outline-color: #0f3738;
  margin: 10px;
  input {
    width: 83%;
    height: 40px;
    border: none;

    ::placeholder {
      font-size: 15px;
    }
  }
`;

const Right = styled.div`
  background-color: white;
  display: flex;
  align-items: center;

  flex-direction: column;

  p {
    margin: 0;
    margin-bottom: 12px;
  }

  h2 {
    margin: 0;
    font-size: 29px;
  }

  button {
    width: 90%;
    height: 40px;
    background-color: #0f3738;
    outline: none;
    border: 0;
    margin-top: 13px;
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
    outline: 0;
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
  height: 500px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 500px);
  border-radius: 20px;
  box-shadow: rgba(90, 88, 88, 0.24) 0px 3px 8px;

  @media screen and (max-width: 500px) {
    height: 1000px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
