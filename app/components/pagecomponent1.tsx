


export default function Pagecomponent() {
 

    return (
        <div className="w-[636px] h-[770px] bg-[#252525] border border-[#373737] rounded-md p-6 text-white">
        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
        <form className="space-y-4">
          <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
            <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">Card number</span>
          </div>
          <div className="flex space-x-4">
            <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
              <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">Expiration date</span>
            </div>
            <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
              <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">Security code</span>
            </div>
          </div>
          <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
            <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">Name on the card</span>
          </div>
          <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
            <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">Billing address</span>
          </div>
          <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
            <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">Apartment, Suite, Unit, etc. (optional)</span>
          </div>
          <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
            <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">Country</span>
          </div>
          <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
            <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">City</span>
          </div>
          <div className="flex space-x-4">
            <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
              <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">State/Province/Region</span>
            </div>
            <div className="flex justify-between items-center w-[580px] h-[50px] border-[#5A5A5A] border-[1.5px] rounded-md">
              <span className="pl-5 font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">Zip/Postal Code</span>
            </div>
          </div>
          <p className="text-sm text-gray-400">
          Services are subscription based. After the first 2 years, the subscription will automatically renew annually for an additional 1-year term, and you’ll be charged the then-applicable renewal price unless you cancel it. Price is subject to change, but we’ll always send you a notification email prior to charging. You can manage your subscription (extend, upgrade, cancel auto-renewal) at any time from your Nord Account using our instructions.
        
        
        <br/>
        <br/>
        By purchasing this subscription and clicking Continue, you agree to the terms of service, auto-renewal terms, electronic document delivery, and acknowledge the privacy policy.
          </p>
       
        </form>
        </div>
    );
  }


