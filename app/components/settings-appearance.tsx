export default function AppearancePage() {
  return (
    <div>
      <div className="p-6 rounded-lg bg-[#191919] flex-grow text-white min-h-screen w-[100%] mx-auto">
        {/* Alerts Section */}
        <div className="mb-6 p-4 bg-[#191919] rounded-lg">
          <h2 className="text-lg mb-3">Set your interface appearance</h2>
          <div className="flex justify-between items-center text-gray-300 border border-gray-600 p-4 rounded-md ">
            <span>Appearance</span>
            <span className="pr-[300px]">Dark Mode</span>
            <span className="flex gap-2">
              <div className="bg-white h-[30px] w-[30px] rounded-[50%] border-green-600 border-2"></div>
              <div className="bg-customDark3 h-[30px] w-[30px] rounded-[50%] border-green-600 border-2">
                <div className="bg-green-600 relative h-[14px] w-[14px] rounded-[50%] border-green-600 border-2 text-customDark3 bottom-[4px] left-[16px]">
                  <div className="absolute pb-1 pr-2 mr-3 h-[1px] w-[10px] text-xs  text-white bottom-[12px]">
                    &#10004;
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}