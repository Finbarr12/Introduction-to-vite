import axios from "axios";
import Swal from "sweetalert2";

export const RegisterAdmin = async ({
  name,
  password,
  email,
  confirmPassword,
}: any) => {
  await axios
    .post("http://localhost:1112/api/adminsignup", {
      name,
      password,
      email,
      confirmPassword,
    })
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      Swal.fire({
        icon: "error",
        title: "email used",
        timer: 3000,
        timerProgressBar: true,
      });
      return res.data;
    });
};

export const loginAdmin = async ({ email, password }: any) => {
  return axios
    .post("http://localhost:1112/api/adminsignin", {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};
