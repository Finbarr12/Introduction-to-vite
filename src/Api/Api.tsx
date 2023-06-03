import axios from "axios";
import Swal from "sweetalert2";

export const RegisterAdmin = async ({
  name,
  password,
  email,
  confirmPassword,
}: any) => {
  await axios
    .post("https://realfurniture.onrender.com/api/adminsignup", {
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
    .post("https://realfurniture.onrender.com/api/adminsignin", {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};

// export const AllProduct: any = async () => {
//   await axios.get("http://localhost:1112/api/products").then((res) => {
//     // return res.data;
//     console.log("this is data", res.data);
//   });
// };

// export const DeletePro = async (id: any) => {
//   await axios.get(`http://localhost:1112/api/delete/${id}`).then((res) => {
//     return res.data;
//   });
// };
