import './App.css'
import Navbar from './components/Navbar'
import PayoutCard from './components/PayoutCard'
import RevenueCard from './components/RevenueCard'
import Sidebar from './components/Sidebar'
import Transactions from './components/Transactions'
import './index.css'
import { useState } from 'react'
function App() {
  const [selected, setSelected] = useState("This Month")
  return (
    <>
      <div className="flex">

        <Sidebar />

        <div className="flex flex-col flex-grow">

          <Navbar />

          <div className="p-6 mt-4 ml-4">
            <div className='flex justify-between p-2 mb-3'>
              <div className='text-2xl font-medium'>
                Overview
              </div>
              <div className='text-md font-semibold'>
                <select className='p-2 bg-white-200 text-md border border-gray-3a00' onChange={(e) => {
                  const select = e.target.value;
                  setSelected(select)

                }} name="This Month" id="">
                  <option value="This Month">This Month</option>
                  <option value="Prev Month">Prev Month</option>
                  <option value="Next Month">Next Month</option>
                </select>
              </div>

            </div>


            <div className='grid grid-cols-3 gap-4'>

              <div>
                <PayoutCard title="Next Payout" amount={2312.23} countOrder={23} nextPayment={"Today, 4:00 PM"} />
              </div>

              <div>
                <RevenueCard title={"Amount Pending"} amount={92000.12} countOrder={13} />
              </div>

              <div>
                <RevenueCard title={"Amount Processed"} amount={9865487.12} />
              </div>
            </div>
            <div className='mt-10'>
              <Transactions period={selected} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
