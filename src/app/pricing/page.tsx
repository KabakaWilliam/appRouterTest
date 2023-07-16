import PricingForm from "@/components/PricingForm";

const page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-[#222222]">
      <div className="w-[372px] h-[332px] border  shadow rounded-[12px] leading-5 p-6">
        <PricingForm className="w-[322px] h-[248px]" />
        <div className="text-sm h-[18px] w-[322px] mt-4 flex items-center justify-center">
          You wont be charged yet
        </div>
      </div>
    </div>
  );
};

export default page;
