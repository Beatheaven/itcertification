import ButtonPrimary from "../../Elements/Button/ButtonPrimary";

export default function SampeReport() {
  return (
    <div className="bg-[#fafafa] min-h-full flex items-center justify-center">
      <div className="container flex flex-col lg:flex-row justify-around">
        <div className="flex justify-center">
          <figure>
            <img src="/images/jpg/sample.jpg" alt="Sagara" className="min-w-full lg:max-w-xl py-10 rounded-xl" />
          </figure>
        </div>

        <div className="space-y-5 w-full lg:w-[22rem]">
          <div>
            <h2 className="text-[#A51525] font-bold text-[40px]">02</h2>
          </div>
          <div>
            <h3 className="font-roboto-flex text-[40px]">Get Your Personalized Results</h3>
            <p className="font-roboto text-[15px]">Your customized CliftonStrengths reports and guides will give you an "aha" moment as you experience new ways to understand what makes you so unique.</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <ButtonPrimary>View Sample Test</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
