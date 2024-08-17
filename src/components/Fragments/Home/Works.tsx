import ButtonPrimary from "../../Elements/Button/ButtonPrimary";

export default function Works() {
  return (
    <div className="bg-[#fafafa] min-h-screen flex items-center justify-center">
      <div className="container flex flex-col lg:flex-row-reverse justify-around">
        <div className="flex justify-center">
          <figure>
            <img src="/images/jpg/sample.jpg" alt="Sagara" className="min-w-full lg:max-w-xl py-10 rounded-xl" />
          </figure>
        </div>

        <div className="space-y-5 w-full lg:w-[22rem]">
          <div>
            <h2 className="text-[#A51525] font-bold text-[40px]">01</h2>
          </div>
          <div>
            <h3 className="font-roboto-flex text-[40px]">Take the Sagara Certification Program Assessment</h3>
            <p className="font-roboto text-[15px]">During this hour-long assessment, you'll see 177 paired statements and choose which ones best describe you.</p>
          </div>
          <div className="flex justify-center items-center md:justify-start">
            <ButtonPrimary>How It Works</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
