import './App.css'
import Navbar from './components/Navbar'
import PayoutCard from './components/PayoutCard'
import RevenueCard from './components/RevenueCard'
import Sidebar from './components/Sidebar'
import './index.css'

function App() {
  return (
    <>
      <div className="flex">

        <Sidebar />

        <div className="flex flex-col flex-grow">

          <Navbar />

          <div className="p-6 mt-4 ml-4">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default App
