import { useState } from "react";
import styled from "styled-components";
import { BsImageFill } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Static/Loading";

const DashUpload = () => {
  const [Image, SetImage] = useState<any>();
  const [preview, setPreview] = useState<any>();
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const handleImageUpload = (event: any) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     SetImage(reader.result);
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const ImageUpload = async (e: any) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("Image", Image);
  //   await axios
  //     .post("http://localhost:1112/api/createproduct", formData, {})
  //     .then((res) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Uploaded successfully",
  //         timer: 2000,
  //         timerProgressBar: true,
  //       });
  //       return res.data;
  //       console.log(res.data);
  //     })
  //     .catch((res) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Failed to upload",
  //         timer: 2000,
  //         timerProgressBar: true,
  //       });
  //       res.data;
  //     });
  // };

  const handleImage = (e: any) => {
    const file = e.target.files![0];
    console.log(file);
    const previewUrl = URL.createObjectURL(file);
    e.preventDefault();
    SetImage(file);
    setPreview(previewUrl);
    console.log(preview);
  };

  const uploadData = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData();

    formData.append("Image", Image);
    formData.append("name", name);
    formData.append("Category", Category);
    formData.append("desc", desc);

    await axios
      .post(`https://realfurniture.onrender.com/api/createproduct`, formData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Uploaded successfully",
          timer: 2000,
          timerProgressBar: true,
        });
        return res.data;
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to upload",
          timer: 2000,
          timerProgressBar: true,
        });
        console.log("error :", error);
      });
    setIsLoading(false);
  };
  return (
    <Container>
      {isLoading ? (
        <Load>
          <Loading />
        </Load>
      ) : null}
      <h2>
        <i>Upload Furnitures</i>
      </h2>
      <Holder>
        <Form>
          <div>
            <h4>Upload</h4>
          </div>
          <Line
            style={{
              border: Image ? "3px dotted transparent" : "3px dotted #113738",
            }}
          >
            <Input
              id="id"
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
            {Image && <ImagePreview src={preview} alt="Uploaded" />}
            {Image ? null : <BsImageFill size={35} />}
          </Line>
          <label htmlFor="id">Upload Furniture Image</label>

          <Inputs
            type="text"
            placeholder="Type of Furniture"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Select
            onChange={(e: any) => {
              setCategory(e.target.value);
            }}
          >
            <option disabled selected>
              Select Furniture type
            </option>
            <option>Home</option>
            <option>Office</option>
            <option>Church</option>
          </Select>
          <TextA
            placeholder="Description about the product"
            onChange={(e: any) => {
              setDesc(e.target.value);
            }}
          />
          <button onClick={uploadData}>Upload</button>
        </Form>
      </Holder>
    </Container>
  );
};

export default DashUpload;

const Load = styled.div`
  position: absolute;
  height: calc(100vh + 23px);
  width: calc(100% - 300px);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Select = styled.select`
  width: 95%;
  height: 30px;
  outline-color: #164344;
  margin-top: 20px;
`;

const TextA = styled.textarea`
  width: 90%;
  height: 50px;
  resize: none;
  margin-top: 20px;
  padding-left: 10px;
`;

const Inputs = styled.input`
  width: 90%;
  height: 30px;
  border: 1px solid gray;
  outline: none;
  outline-color: #ddf9fa;
  margin-top: 30px;
  border-radius: 3px;
  padding-left: 10px;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Input = styled.input`
  /* width: 100%;
  height: 100%;
  display: none; */
  display: none;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  width: 95%;
  height: 150px;
  /* border: 4px dotted gray; */
  margin-top: 20px;
  background-color: #fdfafa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 300px;
  min-height: 100px;
  /* background-color: red; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 40px;
  /* background-color: #164344; */
  /* color: white; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    width: 100%;
    height: 40px;
    background-color: #113738;
    color: white;
    border-radius: 3px;
    transition: all 350ms ease-in-out;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    :hover {
      transform: scale(0.9);
    }
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 40px;
    background-color: #113738;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }

  h4 {
    font-size: 29px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }
`;

const Container = styled.div`
  h2 {
    font-size: 38px;
    margin-left: 30px;
  }
`;
