import styled from "styled-components";

import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { UseAppDispatch } from "../Global/Store";
import { allProducts } from "../Global/ReduxState";

const DashHome = () => {
  const [data, SetData] = useState([]);
  const dispatch = UseAppDispatch();
  //   const { data } = useQuery({
  //     queryKey: ["allproduct"],
  //     queryFn: AllProduct,
  //   });

  //   console.log(`this is tantack`, Products);

  useEffect(() => {
    axios.get("https://realfurniture.onrender.com/api/products").then((res) => {
      SetData(res.data.data);
      dispatch(allProducts(res.data.data));
    });
  }, [data]);

  const DeletePro = async (_id: any) => {
    await axios
      .delete(`https://realfurniture.onrender.com/api/delete/${_id}`)
      .then((res) => {
        return res.data;
      });
  };

  return (
    <Container>
      <h2>
        <i>All Products</i>
      </h2>
      <MainH>
        {data?.map((props: any) => (
          <Holder key={props?._id}>
            <Boximg>
              <img src={props?.Image} alt="" />
            </Boximg>
            <h4>{props?.name}</h4>
            <span>Category : {props?.Category}</span>

            <pre>{props?.desc}</pre>

            <button
              onClick={() => {
                Swal.fire({
                  title: "Are you sure you want to delete",
                  icon: "warning",
                  html: `<p style = "color:red; margin:0">Changes cannot be retrieved!!!!!!</p>`,
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: "Yes",
                  denyButtonText: `No`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    DeletePro(props._id);
                    Swal.fire({
                      title: "Deleted successfully",
                      icon: "success",
                      timer: 2000,
                      timerProgressBar: true,
                    });
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
              Delete
            </button>
          </Holder>
        ))}
      </MainH>
    </Container>
  );
};

export default DashHome;

const MainH = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h4 {
    margin: 0;
    margin-top: 6px;
    font-size: 18px;
    text-transform: capitalize;
  }
`;

const Boximg = styled.div`
  width: 300px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Holder = styled.div`
  margin-left: 30px;
  /* background-color: red; */

  button {
    width: 80px;
    height: 30px;
    color: white;
    border: 0;
    background-color: red;
    border-radius: 5px;
    margin-top: 7px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  pre {
    margin: 0;
    margin-top: 5px;
    width: 80%;
  }

  span {
    color: #113738;
    font-size: 20px;
    margin-top: 6px;
    font-weight: 700;
  }
`;

const Container = styled.div`
  h2 {
    font-size: 38px;
    margin-left: 30px;
  }
`;
