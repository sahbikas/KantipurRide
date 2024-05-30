'use client'
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Switch } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"

function Page() {
  const [open, setOpen] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  }

  const handleClosePopup = () => {
    setOpen(false);
  }

  const [user, setUser] = useState({
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

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setUser(prevUser => ({
//         ...prevUser,
//         picture: e.target.files[0]
//       }));
//     }
//   };

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

  const validateForm = (user: any): boolean => {
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
        <div style={{ textAlign: 'center' }}>
          <Button onClick={handleOpenPopup} color="primary" variant="contained">Add Dispute Reason</Button>
          <Dialog open={open} onClose={handleClosePopup} fullWidth maxWidth="sm">
            <DialogTitle>User Registration<IconButton onClick={handleClosePopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton></DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
                {/* Your form fields */}
              </form>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
      </div>
      <hr />
      <div>
        {/* Your table content */}
      </div>
      <div className="flex justify-between items-center my-2 flex-col lg:flex-row lg:w-full">
        <p className=" lg:mb-0">Showing 21 to 28 of 28 entries</p>
        <div className="flex ">
          {/* Pagination buttons */}
        </div>
      </div>
    </div>
  );
}

export default Page;
