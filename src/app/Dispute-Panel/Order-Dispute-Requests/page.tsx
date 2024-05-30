'use client'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";

function Page() {
  const [open, setOpen] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  }

  const handleClosePopup = () => {
    setOpen(false);
  }

  return (
    <div className="relative w-[90vw] overflow-auto md:w-full  shadow-md sm:rounded-lg p-4">
      <div className='flex justify-between w-full py-3 '>
        <div>
          <h1 className="text-lg font-semibold text--700">Ride Disputes</h1>
        </div>
        <div style={{textAlign:'center'}}>
          <Button onClick={handleOpenPopup} color="primary" variant="contained">Add Dispute Reason</Button>
          <Dialog open={open} onClose={handleClosePopup} fullWidth maxWidth="sm">
            <DialogTitle>User Registeration<IconButton onClick={handleClosePopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton></DialogTitle>
            <DialogContent>
              <div className="max-w-md mx-auto overflow-x-scroll">
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="disputeType">Service</label>
                    <select id="disputeType" className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option value="rideIssue">select</option>
                      <option value="paymentIssue">Payment Issue</option>
                      <option value="behaviorIssue">Behavior Issue</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="disputeType">Dispute Type</label>
                    <select id="disputeType" className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option value="rideIssue">select</option>
                      <option value="paymentIssue">Payment Issue</option>
                      <option value="behaviorIssue">Behavior Issue</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="searchName">Reason</label>
                    <input type="text" id="searchName" className="w-full border border-gray-300 rounded-md px-3 py-2"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="disputeType">Dispute Type</label>
                    <select id="disputeType" className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option value="rideIssue">select</option>
                      <option value="paymentIssue">Payment Issue</option>
                      <option value="behaviorIssue">Behavior Issue</option>
                    </select>
                  </div>
                  <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 md:col-start-2  w-full">Add Dispute Reason</button>

                </form>
              </div>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
      </div>
      <hr/>
      <div>
        <div>
          <div className="flex justify-between  overflow-auto md:w-full">
            <div className="flex gap-3 m-3">
              <div className="text-sm text-gray-500 bg-slate-300 text-center px-5 py-2 rounded-sm hover:shadow-lg">pdf</div>
              <div className="text-sm text-gray-500 bg-slate-300 text-center px-5 py-2 rounded-sm hover:shadow-lg">Excell</div>
              <div className="text-sm text-gray-500 bg-slate-300 text-center px-5 py-2 rounded-sm hover:shadow-lg">CSV</div>
              <div className="text-sm text-gray-500 bg-slate-300 text-center px-5 py-2 rounded-sm hover:shadow-lg">pdf</div>
            </div>
            <div className="flex gap-3 m-3">
              <div className="relative">
                <input type="text" placeholder="Search..." className="border border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/>
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                  <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-auto ">
      <table className="w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto overflow-hidden">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">S.No.</th>
            <th scope="col" className="px-6 py-3">Booking Id</th>
            <th scope="col" className="px-6 py-3">Raised By</th>
            <th scope="col" className="px-6 py-3">Dispute Type</th>
            <th scope="col" className="px-6 py-3">Reason</th>
            <th scope="col" className="px-6 py-3">Comments</th>
            <th scope="col" className="px-6 py-3">Refund Amount</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Table body content */}
          <tr>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">TRNX496277</td>
            <td className="px-6 py-4">Amrit Das</td>
            <td className="px-6 py-4">User</td>
            <td className="px-6 py-4">PROVIDER RUDE AND ARROGANT</td>
            <td className="px-6 py-4">We Issues Refund</td>
            <td className="px-6 py-4">रू80</td>
            <td className="px-6 py-4">Closed</td>
            <td className="px-6 py-4">Action buttons</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="flex justify-between items-center flex-col lg:flex-row lg:w-full">
      <p className="mb-4 lg:mb-0">Showing 21 to 28 of 28 entries</p>
      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">Previous</button>
        <div className="hidden lg:flex">
          {[1, 2, 3].map(page => (
            <div key={page} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">{page}</div>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">Next</button>
      </div>
    </div>





    </div>
  );
}

export default Page;
