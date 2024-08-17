export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-[#303030] flex flex-col md:flex-row justify-between items-center p-10">
      <h2 className="uppercase font-barlow font-extrabold text-xl text-[#fff]">@{year} | it Certification</h2>
      <h3 className="uppercase font-barlow font-extrabold text-base text-[#fff]">Sagara Technology</h3>
    </footer>
  );
}
