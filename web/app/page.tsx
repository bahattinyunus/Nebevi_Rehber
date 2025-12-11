import Link from "next/link";
import { BookOpen, Heart, Scale, Globe, Lightbulb, ArrowRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20">

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary tracking-tight">Nebevi Rehber</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#vizyon" className="hover:text-primary transition-colors">Vizyon</Link>
            <Link href="#icerik" className="hover:text-primary transition-colors">İçerik</Link>
            <Link href="#katki" className="hover:text-primary transition-colors">Katkı</Link>
          </nav>
          <a
            href="https://github.com/bahattinyunus/Nebevi_Rehber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-24">
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-secondary-foreground bg-secondary/10 mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
              Açık Kaynaklı Dijital Külliyat
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground">
              Hakikatin İzinde, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Nebevi Metot
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              &quot;En güzel söz Allah&apos;ın kelamı, en güzel yol Muhammed&apos;in (s.a.v.) yoludur.&quot; düsturuyla, modern zihinlere hitap eden, sahih ve estetik bir ilim yolculuğu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#icerik"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 flex items-center gap-2"
              >
                Külliyatı Keşfet <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/bahattinyunus/Nebevi_Rehber"
                className="px-8 py-4 rounded-xl bg-card border hover:border-primary/50 text-foreground font-medium hover:bg-muted/50 transition-all"
              >
                Topluluğa Katıl
              </Link>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section id="icerik" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">İlim Kategorileri</h2>
              <p className="text-muted-foreground">Hayatın her alanına dokunan bütüncül bir müfredat.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-card border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6", cat.colorClass)}>
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vizyon" className="py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Neden Nebevi Rehber?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Modern dünyanın gürültüsü arasında kaybolan hakikati, yine O&apos;nun (s.a.v.) metoduyla gün yüzüne çıkarmak için yola çıktık.
              Bu proje, sadece bir bilgi deposu değil; bilginin irfana, irfanın ahlaka dönüştüğü bir mekteptir.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-4 text-sm">
            Bu proje, rızâ-i ilahi gözetilerek hazırlanmıştır. Açık kaynaklıdır.
          </p>
          <div className="flex justify-center gap-4 text-sm font-medium">
            <span>© 2024 Nebevi Rehber</span>
            <span>•</span>
            <a href="#" className="hover:text-primary">Lisans</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const categories = [
  {
    title: "İtikadi Temeller",
    description: "Tevhid inancının modern zihinlere hitap eden, şüphelerden arındırılmış duru anlatımı.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    colorClass: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Ahlak ve Şahsiyet",
    description: "Nebevi ahlakın bireysel ve toplumsal hayattaki inşası için rehber ilkeler.",
    icon: <Heart className="w-6 h-6 text-rose-600" />,
    colorClass: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    title: "Fıkıh ve Hayat",
    description: "Güncel meselelere Kur'an ve Sünnet perspektifinden bakış ve ilmihal bilgisi.",
    icon: <Scale className="w-6 h-6 text-emerald-600" />,
    colorClass: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    title: "Tarih ve Medeniyet",
    description: "Köklerden geleceğe uzanan, medeniyet tasavvuru ve siyer okumaları.",
    icon: <BookOpen className="w-6 h-6 text-amber-600" />,
    colorClass: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    title: "Tefekkür ve Bilim",
    description: "Kainat kitabını okuma denemeleri ve ilmi hakikatlerin tefekkürü.",
    icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
    colorClass: "bg-indigo-50 dark:bg-indigo-900/20",
  },
];
