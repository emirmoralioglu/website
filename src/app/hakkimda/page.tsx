import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda | Emir Moralıoğlu",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Hakkımda</h1>
      <div className="space-y-4 text-black/70 dark:text-white/70">
        <p>
          Yaşar Üniversitesi&apos;nde (%100 İngilizce) işletme okudum. Dış
          ticaret ve ithalat-ihracat operasyonlarında saha tecrübem var,
          freight forwarding alanında da staj yaptım. İngilizcemi
          geliştirmek için birkaç kez ABD&apos;ye gidip geldim, bu sayede
          onu gerçek, uluslararası bir ortamda kullanma fırsatı buldum.
        </p>
        <p>
          Şu aralar iki yeni alanda kendimi geliştiriyorum: küçük ve orta
          ölçekli işletmelere yönelik <strong>SEO/GEO danışmanlığı</strong>{" "}
          ve <strong>trading/finans</strong>. 2020&apos;den beri Borsa
          İstanbul, ABD borsaları, emtia ve kriptoda alım-satım yapıp
          piyasaları takip ediyorum; ayrıca 20&apos;den fazla protokolün testnet
          sürecinde VPS sunucularında node operatörlüğü de yaptım. Hedefim
          bunu daha disiplinli, risk yönetimine dayalı bir yaklaşıma
          taşımak.
        </p>
        <p>
          Python ve OpenCV ile otomasyon yazmayı seviyorum; bunu hem SEO
          denetim araçlarında hem de trading tarafındaki backtest ve
          korelasyon analizlerinde kullanmayı planlıyorum.
        </p>
        <p>
          Bu iki alandaki ilerleyişimi{" "}
          <a href="/blog" className="underline underline-offset-4">
            Günlük
          </a>{" "}
          sayfasında düzenli olarak paylaşıyorum.
        </p>
      </div>
    </div>
  );
}
