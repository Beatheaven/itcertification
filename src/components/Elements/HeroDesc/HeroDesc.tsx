interface myComponentProps {
  title: string;
}

export default function HeroDesc({ title }: myComponentProps) {
  return (
    <section className="bg-[url('/images/png/hero-desc.png')] bg-cover bg-center h-[352px] text-white">
      <div className="container px-5 lg:px-24 flex items-center h-full">
        <h1 className="font-barlow font-bold text-5xl lg:text-6xl uppercase w-72">{title}</h1>
      </div>
    </section>
  );
}
