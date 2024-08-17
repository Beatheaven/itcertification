import { ButtonPrimary } from "../../Elements/Button/";
import { Subtitle, TypographyH1, Paragraph, TypographyH2 } from "../../Elements/Typography";
import Image from "../../Elements/Image/Image";

export default function FrontEndArticle() {
  return (
    <article className="container bg-white shadow-md h-full w-full max-w-[1200px] px-5 lg:px-24 py-5 space-y-5">
      <div>
        <TypographyH1 fontFamily="barlow" fontWeight="bold" fontSize="40px" fontColor="#A51535" uppercase={true}>
          Frontend dan Lingkup Kerjanya!
        </TypographyH1>
        <Subtitle fontColor="#888888" fontSize="18px">
          Mari mengenal Front End!
        </Subtitle>
      </div>
      <div className="space-y-3">
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Apa itu Front End Developer
          </TypographyH2>
          <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
            Sesuai namanya, Front end Developer adalah pihak pengembang bagian depan atau halaman depan dari aplikasi atau website dimana interaksi dengan pengguna terjadi. Jika diurutkan secara kronologis, sebuah rancangan sebuah aplikasi
            akan dibuat oleh tim UI/UX designer. Namun, tugas mereka hanya sampai membuat layout dan sketsa. Layout yang telah dibuat selanjutnya menjadi tugas front end untuk mewujudkannya ke dalam bentuk nyata. Artinya, konsep tersebut
            dapat digunakan secara nyata oleh pengguna. Front end menjadi seseorang yang menerjemahkan sebuah konsep menjadi tampilan interaktif yang bisa dimengerti orang awam.{" "}
          </Paragraph>
        </div>
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Tugas Front End Developer
          </TypographyH2>
          <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
            Jika diuraikan secara detail, beberapa hal yang menjadi tugas front end developer terbagi menjadi membangun dan merancang sebuah website atau aplikasi secara interaktif, responsif, dan user friendly. Hal tersebut tentu telah
            dipetakan oleh tim UI/UX designer dan front end bertugas untuk mengeksekusi rancangannya.
          </Paragraph>
        </div>
        <Image src="/images/png/role-desc-template.png" alt="" width="100%" height="auto" className="my-[30px]" />
        <div>
          <TypographyH2 fontFamily="barlow" fontWeight="bold" fontSize="20px">
            Perbedaan Front End dan Back End
          </TypographyH2>
          <Paragraph fontSize="18px" fontColor="#212121" textPosition="justify">
            <ol className="list-decimal list-inside">
              <li>
                Tugas dan Penanggungjawab
                <Paragraph>
                  Tugas seorang frontend developer adalah membuat desain tampilan visual aplikasi, meliputi layout, warna, tipografi, grafik, dan sebagainya. Selain itu, mereka juga bertanggung jawab untuk memastikan aplikasi tetap
                  responsif dan dapat diakses oleh semua user melalui berbagai perangkat, baik desktop, tablet, maupun mobile.
                </Paragraph>
              </li>
              <li>
                Skill yang Diperlukan
                <p>Selain tugas dan tanggung jawab, perbedaan selanjutnya terletak pada skill atau keterampilan teknis yang diperlukan oleh masing-masing bagian. Bahasa Pemrograman Terkait Server.</p>
              </li>
              <li>
                Waktu Kerja
                <Paragraph>
                  Biasanya, para developer memilih untuk mengembangkan front end terlebih dahulu sebelum masuk ke back end. Hal ini bertujuan agar proses development dapat dilakukan secara lebih mudah dan terstruktur, terutama jika proyek
                  berfokus pada pengalaman{" "}
                </Paragraph>
              </li>
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
