
import './App.css'
import Navbar from './components/Navbar'
import RevenueCard from './components/RevenueCard'
import Sidebar from './components/Sidebar'
import './index.css'
function App() {

  return (
    <>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <div className='grid grid-cols-3'>

        <RevenueCard title={"Amount Pending"} amount={92000.12} countOrder={13} />
        <RevenueCard title={"Amount Processed"} amount={9865487.12} />
      </div>

    </>
  )
}

export default App
