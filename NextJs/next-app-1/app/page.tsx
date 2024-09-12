import axios from "axios";
async function getUserDetails() {
  // await new Promise((r) => setTimeout(r, 4000))
  const response = await axios.get('http://localhost:3000/api/user');
  // const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details');
  return response.data;
}


// async component

export default async function Home() {
  const userDetails = await getUserDetails();
  return (

    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex-row border-2 border-black  p-8 ">

          <div>{userDetails.name}</div>
          <div>{userDetails.age}</div>
          {/* <div>{userDetails.address.city}</div> */}
        </div>
      </div>
    </>
  );
}
