"use client";

import Image from "next/image";
import Layout from "./components/mainLayout";
import {
  ChangeEventHandler,
  Dispatch,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import Nav from "./components/Nav";
import axios from "axios";

export default function Home() {
  interface FormData {
    topText: string;
    botText: number;
  }

  interface Memes {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
    captions: number;
  }

  const [formData, setFormData] = useState({ topText: "", botText: "" });
  const [data, setData] = useState([] as Memes[]);
  const [imgNum, setImgNum] = useState(0);

  const changeHandler: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnMouseOver = () => {};
  const fetchData = async () => {
    await axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setData(res.data.data["memes"]);
      // console.log(res.data.data["memes"][imgNum].url);
    });
  };
  const generateRandomImg = () => {
    setImgNum(Math.floor(Math.random() * 100));
  };
  useEffect(() => {
    fetchData();
    generateRandomImg();
  }, []);
  return (
    <div className="bg-[#F5F5F5]  min-h-screen flex flex-col ">
      {" "}
      <header>
        <Nav />
      </header>
      <Layout cn="  p-5 h-full flex-grow flex flex-col items-center justify-evenly max-lg:min-w-full   w-7/12   mx-auto  ">
        <div className="flex-col w-full  flex ">
          <div className="flex flex-row gap-2  ">
            <div className="flex flex-col w-1/2  ">
              <label className=" text-black" htmlFor="topText">
                Top Text
              </label>
              <input
                className="h-[45px] px-2 border border-[#D1D5DB] rounded-md  text-[#6B7280]"
                name="topText"
                placeholder="Enter top text"
                type="text"
                value={formData.topText}
                onChange={changeHandler}
              />
            </div>
            <div className="flex flex-col w-1/2 ">
              <label className="text-black" htmlFor="botText">
                Bottom text
              </label>
              <input
                className="h-[45px] px-2 border border-[#D1D5DB] rounded-md  text-[#6B7280]"
                name="botText"
                placeholder="Enter bottom text"
                type="text"
                value={formData.botText}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button
            className="w-full h-[50px] bg-[#711F8D] rounded-md  m-5 mx-auto"
            type="submit"
            onClick={generateRandomImg}
          >
            Get a new meme image
          </button>
        </div>
        <div className="relative w-10/12 mx-auto  ">
          {data.length && (
            <div className=" w-10/12 mx-auto">
              <div className="flex  justify-center ">
                {" "}
                <h1 className="absolute top-4 font-extrabold text-[32px] text-stroke-3  max-w-full text-center px-5">
                  {formData.topText}
                </h1>
                <h1 className="absolute bottom-4 font-extrabold text-[32px] text-stroke-3 max-w-full text-center px-5">
                  {formData.botText}
                </h1>
              </div>
              <Image
                className=" w-full object-contain"
                src={data[imgNum].url}
                alt="meme photo"
                width={500}
                height={500}
                onMouseOver={handleOnMouseOver}
              />
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}
