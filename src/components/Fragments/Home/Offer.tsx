import Card from "../../Elements/Card";
import pricing from "./data/pricing.json";
import BreadCumb from "../../Elements/BreadCumb/index";

export default function Offer() {
  return (
    <section className="bg-[#fafafa] min-h-full pb-24 flex items-center">
      <div className="container flex flex-col-reverse md:flex-row-reverse justify-around">
        <div className="overflow-x-auto flex space-x-3 shadow-sm ">
          {pricing.map((item, i) => {
            return (
              <Card className="border-2 border-[#BCBCBC] rounded-md p-5 flex flex-col items-start justify-center space-y-5 w-[242.67px] h-[494px]" key={i}>
                <div className="h-6">{item.pricing !== "" ? <BreadCumb>{item.pricing}</BreadCumb> : ""}</div>

                <div>
                  <h2 className="font-barlow font-bold text-[#353535] text-[18px] w-52">{item.name}</h2>
                </div>
                <div>
                  <p className="text-right font-extrabold text-[27px] text-[#A51535]">{item.price}</p>
                </div>
                <div>
                  <ol className="list-disc p-3">
                    {item.description.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ol>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="space-y-5 w-[22rem] my-10">
          <h2 className="font-barlow font-extrabold text-[36px] md:text-[40px] text-[#A51535]">Find the Program That's Right for You</h2>
        </div>
      </div>
    </section>
  );
}
