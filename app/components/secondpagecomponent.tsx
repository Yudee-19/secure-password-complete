import Image from 'next/image';

export default function Secondcomponent() {
    const profilePic: string = "/images/logo.svg"
    return (
        <div>
      <div className="w-[550px] h-[300px] space-y-6 absolute top-[155px] left-[818px] bg-[#252525] border border-[#5A5A5A] rounded-md p-6 text-white">
        <div className="flex items-center mb-4">
       
          <Image
                  src={profilePic}
                  width={230} 
                  height={230} 
                  alt="Standard Plan Image"
                  className="w-8 h-8 mr-3" 
                />
          <h2 className="text-lg font-semibold">Securepass Standard</h2>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>1 year ($2.49/mo)</span>
            <span>$2.49</span>
          </div>
          
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$0</span>
            
          </div>
          <div className='w-[500px] border-[#373737] mt-2 mb-2 top-[160px] left-[28px] border border-[1px]'></div>
          <div className="flex justify-between  text-lg">
            <span>Total</span>
            <span>$2.49</span>
          </div>
        </div>
        <div className="mt-4 flex items-center border border-[#5A5A5A] rounded-md px-4 py-2">
          <span className="mr-3"></span>
          <input
            type="text"
            placeholder="Coupon code"
            className="bg-transparent outline-none text-white flex-1"
          />
          <button className="border border-[#2ED370] text-[#2ED370] w-[130px] h-[37px]  top-[7px] left-[360px] border border-[1px] rounded-md ">
            Apply
          </button>
        </div>
        
        
      </div>
      <div>
      <div className='w-[550px]   absolute top-[460px] left-[818px]'>
        <button className="w-[550px] pl-5  h-[40px] rounded-md mt-4 bg-[#2ED370] text-black  rounded-sm">
          Checkout
        </button>
        </div>
      

      </div>
      </div>
    );
  }
  