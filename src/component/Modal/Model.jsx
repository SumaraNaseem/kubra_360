import React,{ useState } from 'react';
import { ImCross } from "react-icons/im";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'; // Import eye icons

function Modal({ isModalOpen, closeModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = React.useState('');
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between login and registration modes

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validation schemas for login and registration
  const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const registrationValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  return (
    <div className="z-40">
      {isModalOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleBackgroundClick}
        >
          <div className="bg-custon-right-side-bg px-6 mx-3 lg:mx-0 -mt-3 lg:mt-0 py-3 rounded-xl h-[400px]  overflow-scroll  shadow-lg w-[400px] lg:w-[660px]">
            <div className='flex justify-end items-center'>
              <ImCross onClick={closeModal} className='dark:bg-black  bg-white rounded-full p-2 text-[30px] text-white' />
            </div>
            <div className='flex justify-center items-center'>
              <img src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1727980998/WhatsApp_Image_2024-10-03_at_23.37.42_4b7305c4_nfutdo.jpg" alt="logo" className='h-[50px] w-[200px]' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
              <div className='my-7'>
                <img src='https://cdn.cloudd.site/theme/khelo-bharat_theme/khelo-bharat/assets/images/login-img-new-dark.png' alt='Login' />
                <p className='font-[700] text-[22px] font-montserrat text-center text-custom-yellow'>100% FAST Withdrawal</p>
                <img src='https://cdn.cloudd.site/content/assets/images/login-payment-dark.png?v=1.0.4' alt='Footer' className='h-[20px] w-full' />
              </div>
              <div className='my-7'>
              <Formik
  initialValues={{
    email: '',
    password: '',
    confirmPassword: '', // Added for registration
    keepMeSignedIn: false,
  }}
  validationSchema={isLoginMode ? loginValidationSchema : registrationValidationSchema}
  onSubmit={(values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  }}
>
  {({ isSubmitting }) => (
    <Form className="space-y-3 mt-3">
      <div className='my-6 relative '>
        <label htmlFor="email" className="block absolute top-1 text-[12px] left-4 text-custom-yellow">
          {isLoginMode ? "Enter the Username" : "Enter Your Email"}
        </label>
        <Field
          type="email"
          name="email"
          id="email"
          className="border-[1px] border-gray-700 bg-black rounded-3xl text-[14px] px-4 pt-5 pb-2 w-full text-gray-300"
        />
        <ErrorMessage name="email" component="div" className="text-red-500 text-sm px-3" />
      </div>

      {!isLoginMode && (
         <div className="my-6 flex relative justify-center">
           <label htmlFor="email" className="block absolute z-10 top-1 text-[12px] left-4 text-custom-yellow">
          Enter the Country Code
        </label>
         <PhoneInput
           country={'us'} // Set default country
           value={phone}
           onChange={(phone) => setPhone(phone)}
           enableSearch={true} // Enable search for country
           onlyCountries={['us', 'gb', 'in', 'ca', 'au', 'fr', 'de']} // You can add more countries here
           inputStyle={{
            //  width: '100%',
             backgroundColor: '#000000', // Custom background color
             border: '1px solid #374151', // Custom border color (yellow)
             borderRadius: '1.5rem', // Rounded corners
             color:' #D1D5DB', // Custom text color
             paddingLeft: '50px', // Padding for flag space
             paddingTop: '1.8rem', // Custom padding for the input
             paddingBottom: '1.8rem',
             fontSize: '14px', // Custom font size
           }}
           buttonStyle={{
             backgroundColor: 'transparent', // Transparent background for the button
             border: 'none', // Remove default border
             borderRadius:'34px',
           }}
          
           dropdownStyle={{
            //  backgroundColor: '#222222', // Custom background for dropdown
             color: 'black', // Custom text color for dropdown
             borderRadius: '0.5rem', // Rounded dropdown corners
           }}
           searchStyle={{
             color: '#000', // Text color for search input
           }}
           containerClass="w-full" // Custom container style
         />
       </div>
      )}

      <div className="my-6 relative">
        <label htmlFor="password" className="block absolute top-1 text-[12px] left-4 text-custom-yellow">
          {isLoginMode ? "Enter the Password" : "Create a Password"}
        </label>
        <Field
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          className="border-[1px] border-gray-700 bg-black rounded-3xl text-[14px] px-4 pt-7 pb-2 w-full text-gray-300"
        />
        <div
          className="absolute top-8 right-4 cursor-pointer text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
        </div>
        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
      </div>

      {isLoginMode && (
        <div className="flex items-center">
          <Field
            type="checkbox"
            name="keepMeSignedIn"
            id="keepMeSignedIn"
            className="appearance w-4 h-4 rounded-sm !checked:bg-yellow-500 border border-gray-300 cursor-pointer"
          />
          <label htmlFor="keepMeSignedIn" className="text-sm px-2 text-gray-400">
            Keep me signed in
          </label>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            boxShadow: `rgba(255, 255, 255, 0.3) 0px 10px 20px, rgba(255, 255, 255, 0.1) 0px 5px 15px`,
          }}
          className="bg-custom-yellow font-[600] text-[18px] font-montserrat text-black p-3 rounded-xl w-full"
        >
          {isLoginMode ? "Sign In" : "Register"}
        </button>
      </div>

      {!isLoginMode && (
        <button
          type="submit"
          style={{
            boxShadow: `rgba(255, 255, 255, 0.3) 0px 10px 20px, rgba(255, 255, 255, 0.1) 0px 5px 15px`,
          }}
          className="bg-custom-yellow font-[600] text-[18px] font-montserrat text-black p-3 rounded-xl w-full"
        >
          Login with Demo User 
        </button>
     )} 

      <div className="text-center mt-4">
        <span className="text-gray-300">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}
        </span>{" "}
        <span
          className="text-custom-yellow cursor-pointer"
          onClick={() => setIsLoginMode(!isLoginMode)}
        >
          {isLoginMode ? "Register" : "Login"}
        </span>
      </div>
    </Form>
  )}
</Formik>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
