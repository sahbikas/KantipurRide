'use client'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
function Page() {
  const [open, setOpen] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  }

  const handleClosePopup = () => {
    setOpen(false);
  }

  interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    mobile: string;
    gender: 'Male' | 'Female';
    contaryName: string;
    cityName: string;
    picture: File | null;
  }
  
  
    const [user, setUser] = useState<User>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobile: '',
      gender: 'Male',
      contaryName: '',
      cityName: '',
      picture: null,
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser(prevUser => ({
        ...prevUser,
        [name]: value
      }));
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        setUser(prevUser => ({
          ...prevUser,
          picture: files[0]
        }));
      }
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Custom form validation logic
      if (validateForm(user)) {
        // Proceed with form submission
        console.log('Form submitted successfully:', user);
      } else {
        console.log('Form validation failed.');
      }
    };
  
    const validateForm = (user: User): boolean => {
      // Perform your validation logic here
      if (user.password !== user.confirmPassword) {
        alert('Passwords do not match.');
        return false;
      }
      // Add more validation rules as needed
      return true;
    };
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
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="mb-12 lg:flex gap-20">
        <div className="mb-3">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleChange} required className="mt-1 p-2 block w-full border-2 border-green-800 rounded-md shadow-sm  focus:ring-indigo-800 focus:border-indigo-800" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleChange} required className="mt-1 p-2 block w-full border-2 border-green-800 rounded-md shadow-sm  focus:ring-indigo-800 focus:border-indigo-800" />
        </div>
      </div>
      <div className="mb-12 lg:flex gap-3">
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="text" id="email" name="email" value={user.email} onChange={handleChange} required className="mt-1 p-2 block w-full border-2 border-green-800 rounded-md shadow-sm  focus:ring-indigo-800 focus:border-indigo-800" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" value={user.password} onChange={handleChange} required className="mt-1 p-2 block w-full border-2 border-green-800 rounded-md shadow-sm  focus:ring-indigo-800 focus:border-indigo-800" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required className="mt-1 p-2 block w-full border-2 border-green-800 rounded-md shadow-sm  focus:ring-indigo-800 focus:border-indigo-800" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="mb-3">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
          <input type="text" id="mobile" name="mobile" value={user.mobile} onChange={handleChange} required className="mt-1 p-2 block w-full border-2 border-green-800 rounded-md shadow-sm  focus:ring-indigo-800 focus:border-indigo-800" />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Gender:</label>
          <div className="mt-1 flex">
            <div className="flex items-center mr-4">
              <input type="radio" id="male" name="gender" value="Male" checked={user.gender === 'Male'} onChange={handleChange} className="mr-2" />
              <label htmlFor="male" className="text-sm font-medium text-gray-700">Male</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="female" name="gender" value="Female" checked={user.gender === 'Female'} onChange={handleChange} className="mr-2" />
              <label htmlFor="female" className="text-sm font-medium text-gray-700">Female</label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 lg:flex gap-20">
        <div className="mb-4">
          <label htmlFor="contaryName" className="block font-semibold mb-2">Contary Name</label>
          <select id="contaryName" name="contaryName" value={user.contaryName} onChange={handleChange} required className="border p-2 w-full">
            <option value="">Select Dispute Type</option>
            <option value="rideIssue">Ride Issue</option>
            <option value="paymentIssue">Payment Issue</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="cityName" className="block font-semibold mb-2">City Name</label>
          <select id="cityName" name="cityName" value={user.cityName} onChange={handleChange} required className="border p-2 w-full">
            <option value="">Select Dispute Type</option>
            <option value="rideIssue">Ride Issue</option>
            <option value="paymentIssue">Payment Issue</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="picture" className="block text-sm font-medium text-gray-700">Picture:</label>
        <input type="file" id="picture" name="picture" onChange={handleFileChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Add User</button>
    </form>
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
      <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">S.No.</th>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Mobile</th>
            <th className="border border-gray-300 px-4 py-2">Rating</th>
            <th className="border border-gray-300 px-4 py-2">Wallet Amount</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* User data goes here */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">User</td>
            <td className="border border-gray-300 px-4 py-2">Demo</td>
            <td className="border border-gray-300 px-4 py-2">demo@demo.com</td>
            <td className="border border-gray-300 px-4 py-2">+9779876543210</td>
            <td className="border border-gray-300 px-4 py-2">5</td>
            <td className="border border-gray-300 px-4 py-2">रू 0</td>
            <div>
      <Switch {...label} defaultChecked />
      
    </div>


            <td className="border border-gray-300 px-4 py-2">
              <button className="bg-red-500 text-white font-semibold py-1 px-2 rounded hover:bg-red-600 mr-2">Delete</button>
              <button className="bg-blue-500 text-white font-semibold py-1 px-2 rounded hover:bg-blue-600">Update</button>
            </td>
          </tr>
          {/* Add more rows for other users/providers  */}
        </tbody>
      </table>
    </div >
      </div>
      <div className="flex justify-between items-center my-2 flex-col lg:flex-row lg:w-full">
      <p className=" lg:mb-0">Showing 21 to 28 of 28 entries</p>
      <div className="flex ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">Previous</button>
        <div className="hidden lg:flex">
          {[1, 2, 3].map(page => (
            <div key={page} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">{page}</div>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">Next</button>
      </div>
    </div>

{/* <label className="switch">
<input className="status_enable switch-warning" type="checkbox" checked=""></input>
</label> */}

    </div>
  );
}

export default Page;
