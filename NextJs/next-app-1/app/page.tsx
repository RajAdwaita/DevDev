// import { PrismaClient } from "@prisma/client"
import axios from "axios";
import client from '@/db'

// const client = new PrismaClient();


// async function getUserDetails() {
//   // await new Promise((r) => setTimeout(r, 4000))
//   const response = await axios.get('http://localhost:3000/api/user');
//   // const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details');
//   return response.data;
// }


async function fetchData() {
  const user = await client.user.findFirst();

  return {
    username: user?.username,
    password: user?.password
  }
}

// async component

export default async function Home() {
  // const userDetails = await getUserDetails();
  const userDetails = await fetchData();
  return (

    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex-row border-2 border-black  p-8 ">

          <div>{userDetails.username}</div>
          <div>{userDetails.password}</div>
          {/* <div>{userDetails.address.city}</div> */}
        </div>
      </div>
    </>
  );
}
