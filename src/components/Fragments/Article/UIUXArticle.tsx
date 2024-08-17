import { ButtonPrimary } from "../../Elements/Button/";
import { Subtitle, TypographyH1, Paragraph, TypographyH2, TypographyH3 } from "../../Elements/Typography";
import Image from "../../Elements/Image/Image";

export default function UIUXArticle() {
  return (
    <article className="container bg-white shadow-md h-full w-full max-w-[1200px] px-5 lg:px-24 py-5 space-y-5">
      <div>
        <TypographyH1 fontFamily="barlow" fontWeight="bold" fontSize="40px" fontColor="#A51535" uppercase={true}>
          Introduction to UI and UX Design
        </TypographyH1>
        <Subtitle fontColor="#888888" fontSize="18px">
          Mari mengenal UI and UX Design!
        </Subtitle>
      </div>
      <div className="space-y-3">
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Apa itu UI/UX Design
          </TypographyH2>
          <div>
            <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
              UI atau User Interface adalah proses dimana menampilkan sebuah hasil dalam bentuk tampilan yang dapat dilihat oleh pengguna (user). Lebih tepatnya adalah bagian visual dari website, software, maupun hardware untuk user dapat
              berinteraksi. Tujuan dari User Interface sendiri adalah untuk meningkatkan fungsionalitas serta user experience dari pengguna. Tugas Backend Developer
            </Paragraph>
            <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
              UX atau User Experience adalah proses dimana pengguna dapat berinteraksi dengan interface secara baik dan nyaman. Yang terpenting disini, tujuan dari UX adalah untuk meningkatkan kepuasan pengguna saat mengakses sebuah
              tampilan, baik dari sisi website, mobile, maupun desktop. UX sendiri menjadi sebuah penghubung antara pengguna dengan produk.
            </Paragraph>
          </div>
        </div>

        <Image src="/images/png/role-desc-template.png" alt="" width="100%" height="auto" className="my-[30px]" />

        <div className="space-y-2">
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Perbedaan UI dan UX
          </TypographyH2>
          <div className="space-y-5">
            <div>
              <TypographyH3 fontFamily="barlow" fontWeight="bold" fontSize="20px">
                User Interface (UI)
              </TypographyH3>
              <ol className="list-item list-inside text-[18px] text-[#212121] text-justify">
                <li>UI berkaitan dengan tampilan visual dan interaksi antara pengguna dan sistem.</li>
                <li>Fokus utama UI adalah pada desain elemen-elemen yang terlihat oleh pengguna, seperti tata letak, warna, ikon, tombol, dan elemen grafis lainnya.</li>
                <li>Tujuan UI adalah menciptakan antarmuka yang menarik secara visual, konsisten, dan mudah digunakan.</li>
              </ol>
            </div>
            <div>
              <TypographyH3 fontFamily="barlow" fontWeight="bold" fontSize="20px">
                User Experience (UX)
              </TypographyH3>
              <ol className="list-item list-inside text-[18px] text-[#212121] text-justify">
                <li>UX berkaitan dengan pengalaman pengguna saat menggunakan produk atau layanan.</li>
                <li>Fokus utama UX adalah memahami kebutuhan, preferensi, dan perilaku pengguna untuk menciptakan pengalaman yang memuaskan dan efektif.</li>
                <li>Tujuan UX adalah menciptakan pengalaman yang mudah bagi user saat menggunakan produk tanpa hambatan apapun.</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-end h-20 lg:h-32">
            <ButtonPrimary>join with us</ButtonPrimary>
          </div>
        </div>
      </div>
    </article>
  );
}
