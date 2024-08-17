import Card from "../../Elements/Card";
import mentors from "../../Fragments/Home/data/mentor.json";

export default function Join() {
  return (
    <section className="bg-[url('/images/svg/FrameHome.svg')] object-none object-left bg-no-repeat">
      <div className="container p-10 lg:p-16">
        <div className="flex flex-col lg:flex-row">
          <figure className="flex justify-center">
            <img src="/images/jpg/asset-1.jpg" className="my-5 lg:my-0 w-full max-w-sm bg-slate-300 rounded-md mr-0 lg:mr-5 object-cover object-top" alt="Sagara" />
          </figure>

          <div className="space-y-5 md:space-y-5 lg:space-y-16 flex flex-col justify-center">
            <p className="font-roboto-flex font-extrabold text-3xl lg:text-[40px] leading-tight">
              Join with <span className="text-[#A51535]">1,234,567</span> Developers in Sagara IT Certification Program to Thrive at Work and Everywhere Else
            </p>
            <div className="font-roboto-flex">
              <p className=" font-extrabold text-3xl lg:text-[40px] leading-tight">
                You Are Unique. <br /> You Are Powerful. <br /> Be Confident With Who You Are.
              </p>
              <div>
                <p className="text-[15px] font-normal">Understanding your strengths unlocks your potential and leads you to greater performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-0 gap-10 items-center justify-center mt-24">
          {mentors.map((item, i) => {
            return (
              <Card className="flex flex-col shadow-xl items-center w-[264px] h-[380px] text-center space-y-5" key={i}>
                <div className="flex flex-col h-screen justify-center items-center space-y-5">
                  <div className="">
                    <img src={item.img} alt="" className="w-32 h-32 bg-gray-500 rounded-full object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="text-[#858585]">{item.name}</h4>
                    <h3 className="font-barlow font-bold text-2xl text-[#A51535]">{item.role}</h3>
                  </div>
                  <div className="">
                    <p className="text-[15px] text-[#212121] italic">"{item.quote}"</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
