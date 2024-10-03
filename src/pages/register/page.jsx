import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CountryPhoneInput = () => {
  const [phone, setPhone] = React.useState('');

  return (
    // <div className="flex flex-col items-center gap-4">
    //   <div className="w-full max-w-xs">
    //     <label className="text-yellow-500 text-[18px] mb-1">Enter your Username</label>
    //     <input
    //       type="text"
    //       className="w-full p-2 bg-black text-yellow-500 border border-yellow-500 rounded focus:outline-none"
    //       placeholder="Enter your Username"
    //     />
    //   </div>

    //   <div className="w-full max-w-xs">
    //     <label className="text-yellow-500 text-[18px] mb-1">Enter your Mobile Number</label>
    //     <PhoneInput
    //       country={'in'} // Default country
    //       value={phone}
    //       onChange={phone => setPhone(phone)}
    //       inputClass="w-full p-2 bg-black text-yellow-500 border border-yellow-500 rounded focus:outline-none"
    //       buttonClass="bg-black text-yellow-500 border border-yellow-500"
    //       searchClass="text-black"
    //     />
    //   </div>
    // </div>
    <div className='grid grid-cols-12'>
    <div className="col-span-4">
        Content for the first column with width 6
    </div>
    <div className="col-span-8">
        Content for the second column with width 6
    </div>
</div>
  );
};

export default CountryPhoneInput;
