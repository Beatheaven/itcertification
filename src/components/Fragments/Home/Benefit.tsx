import ButtonPrimary from "../../Elements/Button/ButtonPrimary";

export default function Benefit() {
  return (
    <div className="bg-[#fafafa] min-h-screen flex items-center justify-center">
      <div className="container flex flex-col lg:flex-row-reverse justify-around  ">
        <figure className="rounded-md">
          <img src="/images/jpg/sample.jpg" alt="Sagara" className="min-w-full lg:max-w-xl py-10 rounded-xl" />
        </figure>

        <div className="space-y-5 w-full lg:w-[22rem]">
          <div>
            <h2 className="text-[#A51525] font-bold text-[40px]">03</h2>
          </div>
          <div>
            <h3 className="font-roboto-flex text-[40px]">Apply Your Strengths Throughout Your Life</h3>
            <p className="font-roboto text-[15px]">Now it's time to aim your CliftonStrengths at anything that comes your way. Use our resources and tools to better aim your strengths at success.</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <ButtonPrimary>How It Works</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
