import { Subtitle, TypographyH1, Paragraph, TypographyH2 } from "../../Elements/Typography";
import ButtonPrimary from "../../Elements/Button/ButtonPrimary";
import Image from "../../Elements/Image/Image";

export default function BackEndArticle() {
  return (
    <article className="container bg-white w-full max-w-[1200px] shadow-md h-full px-5 lg:px-24 py-5 space-y-5">
      <div>
        <TypographyH1 fontFamily="barlow" fontWeight="bold" fontSize="40px" fontColor="#A51535" uppercase={true}>
          Backend Developer: 5+ Skill yang harus dikuasai untuk jadi Profesional
        </TypographyH1>
        <Subtitle fontColor="#888888" fontSize="18px">
          Mari mengenal Backend!
        </Subtitle>
      </div>
      <div className="space-y-3">
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Apa itu Backend Developer
          </TypographyH2>
          <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
            Backend developer adalah seseorang yang bertanggung jawab untuk mengelola server website (server-side). Artinya, seorang backend developer perlu memastikan website bekerja dengan baik dalam kaitan pertukaran data dari browser ke
            server. Selain itu, backend developer juga menangani database dan membuat alur website yang terstruktur. Hal ini bisa dilakukan berkat skill coding yang cukup baik. Untuk itulah seorang backend developer perlu menguasai bahasa
            pemrograman yang tepat.{" "}
          </Paragraph>
        </div>
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Tugas Backend Developer
          </TypographyH2>
          <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
            Sebelumnya, kami sudah menjelaskan singkat apa itu backend developer. Meskipun memiliki tanggung jawab besar, jika punya skill yang baik, akan mudah untuk menjalankan berbagai tugas backend developer berikut ini:
            <ol className="list-decimal list-inside">
              <li>
                Merancang Database
                <p>Tugas backend developer yang pertama adalah merancang database. Database adalah tempat untuk menyimpan berbagai data untuk keperluan website.</p>
              </li>
              <li>
                Merancang Alur Website
                <p>Backend developer bertugas merancang alur website agar user experience yang dimiliki pengunjung lebih baik.</p>
              </li>
              <li>
                Mengatur Keamanan Website
                <p>Tugas web developer lainnya adalah mengatur keamanan website agar aman dari serangan hacker.</p>
              </li>
            </ol>
          </Paragraph>
        </div>
        <Image src="/images/png/role-desc-template.png" alt="" width="100%" height="auto" className="my-[30px]" />
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Skill yang Harus Dimiliki Backend Developer
          </TypographyH2>
          <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
            <ol className="list-decimal list-inside">
              <li>Bahasa Pemrograman Terkait Server</li>
              <li>Pengelolaan Server</li>
              <li>Pengelolaan Database</li>
              <li>Manajemen API</li>
            </ol>
          </Paragraph>
        </div>
        <div className="flex justify-end h-20 lg:h-32">
          <ButtonPrimary>join with us</ButtonPrimary>
        </div>
      </div>
    </article>
  );
}
