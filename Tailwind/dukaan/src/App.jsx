
import './App.css'
import Navbar from './components/Navbar'
import PayoutCard from './components/PayoutCard'
import RevenueCard from './components/RevenueCard'
import Sidebar from './components/Sidebar'
import './index.css'
function App() {

  return (
    <>
      {/* <Navbar /> */}
      <div>


        <div className=''>
          <Sidebar />

        </div>



        <div className='grid grid-cols-3 gap-4 mr-10 ml-60'>

          <div>

            <PayoutCard title="Next Payout" amount={2312.23} countOrder={23} nextPayment={"Today, 4:00 PM"} />
          </div>
          <div>
            <RevenueCard title={"Amount Pending"} amount={92000.12} countOrder={13} />

          </div>
          <div>
            <RevenueCard title={"Amount Processed"} amount={9865487.12} />

          </div>

          {/* <div className='grid grid-cols-1'>

        </div> */}


        </div>
      </div>

    </>
  )
}

export default App
