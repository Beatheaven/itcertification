import { ButtonOutlineSecondary, ButtonPrimary } from "../../Elements/Button/";

export default function Hero() {
  return (
    <section className="bg-[url('/images/webp/hero-banner.webp')] bg-cover bg-center">
      <div className="container py-5 ">
        <div className="p-10 w-full max-w-none lg:max-w-4xl leading-10 space-y-5 text-center lg:text-left">
          <div className="leading-5 text-white mb-20">
            <h1 className="uppercase font-barlow font-extrabold text-3xl lg:text-6xl ">live your best life using your strengths</h1>
            <p className="text-base md:text-xl w-full max-w-2xl">Meet some of the people who have completed the Sagara Technology and use their results to maximize their potential at work and everywhere else.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-5">
            <div className="w-full max-w-full lg:max-w-xs">
              <ButtonOutlineSecondary width="100%">Get Modul</ButtonOutlineSecondary>
            </div>
            <div className="w-full max-w-full lg:max-w-xs">
              <ButtonPrimary width="100%">Get Certification</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
