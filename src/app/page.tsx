"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  { number: "01", title: "Полировка кузова", text: "Возвращаем лаку глубину цвета и блеск, убираем мелкие риски и следы эксплуатации.", price: "от 10 000 ₽", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=85" },
  { number: "02", title: "Химчистка салона", text: "Глубокая очистка текстиля, ковров и труднодоступных зон с вниманием к деталям.", price: "от 16 000 ₽", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85" },
  { number: "03", title: "Уход за кожей", text: "Деликатная очистка и уход за кожаными поверхностями, чтобы сохранить их фактуру.", price: "от 3 000 ₽", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85" },
  { number: "04", title: "Защитные покрытия", text: "Гидрофобный эффект и дополнительная защита лакокрасочного покрытия.", price: "по запросу", image: "https://images.unsplash.com/photo-1613214150384-8f3e7d3f1d48?auto=format&fit=crop&w=1000&q=85" },
];

const gallery = [
  { label: "Внимание к деталям", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=85" },
  { label: "Чистота в каждом шве", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85" },
  { label: "Глубокий блеск", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden">
      <div className="border-b border-white/10 bg-[#48d1cc] px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[.16em] text-black sm:text-xs">
        GARAGE 007 · DETAILING CENTER · КРАСНОДАР
      </div>

      <header className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-14">
        <a href="#top" className="flex items-center gap-3" aria-label="G7 — на главную">
          <span className="flex h-11 w-11 items-center justify-center border border-[#48d1cc] text-xl font-black tracking-tighter text-[#48d1cc]">G7</span>
          <span className="leading-tight"><span className="block text-sm font-black tracking-[.14em]">GARAGE 007</span><span className="mt-1 block text-[9px] tracking-[.27em] text-white/50">DETAILING CENTER</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-xs text-white/70 lg:flex">
          <a className="transition hover:text-[#48d1cc]" href="#services">Услуги</a>
          <a className="transition hover:text-[#48d1cc]" href="#about">О студии</a>
          <a className="transition hover:text-[#48d1cc]" href="#works">Работы</a>
          <a className="transition hover:text-[#48d1cc]" href="#contacts">Контакты</a>
        </nav>
        <div className="hidden items-center gap-5 sm:flex">
          <a href="tel:+79615235877" className="text-sm font-semibold">+7 961 523-58-77</a>
          <button onClick={() => setShowContact(true)} className="accent-link flex items-center gap-3 bg-[#48d1cc] px-5 py-3 text-xs font-bold text-black">Записаться <ArrowUpRight size={15} /></button>
        </div>
        <button className="flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && <nav className="relative z-30 flex flex-col gap-5 border-y border-white/10 bg-[#171815] px-6 py-6 text-sm lg:hidden">
        {[["Услуги", "#services"], ["О студии", "#about"], ["Работы", "#works"], ["Контакты", "#contacts"]].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a href="tel:+79615235877" className="font-bold text-[#48d1cc]">+7 961 523-58-77</a>
      </nav>}

      <section id="top" className="site-grid relative mx-auto grid min-h-[690px] max-w-[1440px] grid-cols-1 px-5 pb-16 pt-8 md:px-10 md:pt-12 lg:min-h-[730px] lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:pb-20">
        <div className="relative z-10 flex flex-col items-start justify-center pb-12 lg:pb-20">
          <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-white/55"><span className="h-px w-8 bg-[#48d1cc]" /> Уход за автомобилем без компромиссов</div>
          <h1 className="max-w-[760px] text-[clamp(3.7rem,9vw,8.4rem)] font-black leading-[.84] tracking-[-.075em]">ДЕТАЛИ<br />РЕШАЮТ<span className="text-[#48d1cc]">.</span><br /><span className="text-outline">МЫ ЗНАЕМ.</span></h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-white/60 md:text-base">Детейлинг, который возвращает автомобилю характер. Бережная работа с кузовом и салоном — с вниманием к каждой мелочи.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => setShowContact(true)} className="accent-link flex items-center gap-5 bg-[#48d1cc] px-6 py-4 text-xs font-bold text-black">Обсудить уход за авто <ArrowUpRight size={17} /></button>
            <a href="#services" className="flex items-center gap-2 px-3 py-4 text-xs text-white/65 transition hover:text-white">Все услуги <ArrowDownRight size={16} /></a>
          </div>
          <div className="mt-14 flex w-full max-w-lg gap-8 border-t border-white/15 pt-6 sm:gap-14">
            <div><span className="block text-2xl font-black">G7</span><span className="mt-1 block text-[9px] uppercase tracking-[.18em] text-white/45">Detailing center</span></div>
            <div><span className="block text-2xl font-black">09–21</span><span className="mt-1 block text-[9px] uppercase tracking-[.18em] text-white/45">Ежедневно</span></div>
            <div><span className="block text-2xl font-black">KRD</span><span className="mt-1 block text-[9px] uppercase tracking-[.18em] text-white/45">Краснодар</span></div>
          </div>
        </div>
        <div className="relative min-h-[370px] lg:min-h-0">
          <div className="hero-image absolute inset-0 bottom-8 left-5 bg-[#272923]" style={{ backgroundImage: "linear-gradient(180deg,rgba(16,17,15,.02),rgba(16,17,15,.42)),url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=90')" }} />
          <div className="absolute -left-1 top-8 hidden h-32 w-32 border-l border-t border-[#48d1cc]/70 lg:block" />
          <div className="absolute -bottom-1 right-0 flex items-center gap-4 bg-[#48d1cc] px-5 py-4 text-black sm:px-7 sm:py-5">
            <Sparkles size={21} />
            <div><span className="block text-xs font-black uppercase tracking-wider">Чистый результат</span><span className="mt-1 block text-[10px] text-black/65">Внимание к каждой детали</span></div>
          </div>
          <span className="absolute right-0 top-0 hidden text-[9px] tracking-[.25em] text-white/45 [writing-mode:vertical-rl] lg:block">PRECISION · CARE · FINISH</span>
        </div>
      </section>

      <div className="border-y border-white/10 bg-[#171815]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-white/10 px-5 sm:grid-cols-4 sm:divide-y-0 md:px-10 lg:px-14">
          {[["01", "Бережный подход"], ["02", "Работа с деталями"], ["03", "Подбор ухода"], ["04", "Результат в фокусе"]].map(([n, t]) => <div key={n} className="flex items-center gap-3 py-5 sm:py-6"><span className="text-[10px] text-[#48d1cc]">{n}</span><span className="text-[10px] font-semibold uppercase tracking-[.12em] text-white/70 sm:text-xs">{t}</span></div>)}
        </div>
      </div>

      <section id="services" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div><p className="section-kicker">01 / Услуги</p><h2 className="mt-5 text-4xl font-black tracking-[-.055em] sm:text-6xl">УХОД, КОТОРЫЙ<br /><span className="text-white/35">ЧУВСТВУЕТСЯ.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-white/55">Подберём подходящий уход под состояние автомобиля и ваши задачи. Итоговая стоимость зависит от размера авто и объёма работ.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => <article key={service.number} className="service-card group overflow-hidden border border-white/10 bg-[#171815]">
            <div className="relative h-56 overflow-hidden sm:h-64">
              <div className="hero-image absolute inset-0 transition duration-700 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(180deg,rgba(16,17,15,0),rgba(16,17,15,.25)),url('${service.image}')` }} />
              <span className="absolute left-5 top-5 text-xs font-bold text-[#48d1cc]">{service.number} / 04</span>
              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#48d1cc] text-black"><ArrowUpRight size={19} /></span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-2xl font-bold tracking-tight">{service.title}</h3><span className="pt-1 text-xs font-semibold text-[#48d1cc]">{service.price}</span></div>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">{service.text}</p>
              <button onClick={() => setShowContact(true)} className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.17em] text-white/80 transition group-hover:text-[#48d1cc]">Уточнить детали <ArrowRight size={14} /></button>
            </div>
          </article>)}
        </div>
        <p className="mt-5 text-[11px] leading-5 text-white/35">Цены ориентировочные и требуют подтверждения студией. Точная стоимость рассчитывается после уточнения автомобиля и состояния поверхностей.</p>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#171815]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-14">
          <div className="relative min-h-[370px]">
            <div className="hero-image absolute inset-0 right-8 bottom-8" style={{ backgroundImage: "linear-gradient(0deg,rgba(16,17,15,.1),rgba(16,17,15,.1)),url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85')" }} />
            <div className="absolute bottom-0 right-0 flex h-28 w-28 flex-col justify-center bg-[#48d1cc] p-4 text-black"><span className="text-3xl font-black">G7</span><span className="mt-1 text-[9px] font-bold uppercase tracking-widest">Garage 007</span></div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="section-kicker">02 / Подход</p>
            <h2 className="mt-5 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl">НЕ ПРОСТО<br />ЧИСТО.<br /><span className="text-[#48d1cc]">ПРАВИЛЬНО.</span></h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60">Детейлинг начинается с внимания. К покрытию, материалам салона, особенностям автомобиля и вашим ожиданиям. Мы помогаем выбрать подходящие процедуры — без лишнего и с фокусом на результат.</p>
            <div className="mt-8 space-y-4">
              {["Подбор процедуры под состояние автомобиля", "Аккуратная работа с разными материалами", "Понятное согласование работ перед началом"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-white/80"><span className="flex h-6 w-6 items-center justify-center border border-[#48d1cc]/50 text-[#48d1cc]"><Check size={13} /></span>{item}</div>)}
            </div>
            <a href="#contacts" className="mt-9 flex w-fit items-center gap-3 border-b border-[#48d1cc] pb-3 text-xs font-bold uppercase tracking-widest text-[#48d1cc]">Связаться со студией <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="works" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="section-kicker">03 / Атмосфера</p><h2 className="mt-5 text-4xl font-black tracking-[-.055em] sm:text-6xl">РАБОТА В ДЕТАЛЯХ<span className="text-[#48d1cc]">.</span></h2></div>
          <p className="max-w-xs text-sm leading-6 text-white/50">Каждая поверхность требует своего подхода. Больше примеров работ можно запросить у студии.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((item, index) => <div key={item.label} className={`group relative h-[330px] overflow-hidden bg-[#1a1b18] ${index === 1 ? "md:mt-12" : ""}`}>
            <div className="hero-image absolute inset-0 transition duration-700 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(0deg,rgba(16,17,15,.75),rgba(16,17,15,.05) 65%),url('${item.image}')` }} />
            <span className="absolute left-5 top-5 text-xs text-[#48d1cc]">0{index + 1}</span>
            <span className="absolute bottom-5 left-5 text-sm font-bold">{item.label}</span>
          </div>)}
        </div>
        <p className="mt-5 text-[11px] text-white/35">Фотографии на этой концепции — демонстрационные. Перед публикацией их нужно заменить реальными работами G7.</p>
      </section>

      <section id="contacts" className="relative border-y border-white/10 bg-[#48d1cc] text-black">
        <div className="site-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1.2fr_.8fr] lg:px-14">
          <div><p className="text-[11px] font-bold uppercase tracking-[.2em]">04 / Контакты</p><h2 className="mt-5 text-5xl font-black leading-[.88] tracking-[-.065em] sm:text-7xl">ТВОЙ АВТОМОБИЛЬ.<br />НОВЫЙ<br />УРОВЕНЬ.</h2><p className="mt-7 max-w-md text-sm leading-6 text-black/65">Расскажите, что хотите улучшить — поможем подобрать подходящую услугу и сориентируем по стоимости.</p><button onClick={() => setShowContact(true)} className="mt-8 flex items-center gap-4 bg-black px-6 py-4 text-xs font-bold text-white transition hover:bg-black/80">Связаться с G7 <ArrowUpRight size={17} /></button></div>
          <div className="flex flex-col justify-center gap-7 border-t border-black/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <a href="tel:+79615235877" className="flex items-start gap-4"><Phone size={19} /><span><span className="block text-[10px] font-bold uppercase tracking-widest text-black/55">Телефон</span><span className="mt-2 block text-xl font-black sm:text-2xl">+7 961 523-58-77</span></span></a>
            <div className="flex items-start gap-4"><MapPin size={20} /><span><span className="block text-[10px] font-bold uppercase tracking-widest text-black/55">Адрес студии</span><span className="mt-2 block text-base font-bold">Краснодар, ул. Шоссе Нефтяников, 22, стр. 1</span><a className="mt-2 inline-block border-b border-black/50 pb-1 text-xs font-semibold" href="https://yandex.com/maps/?text=G7%20Detailing%20Center%20Краснодар" target="_blank" rel="noreferrer">Построить маршрут ↗</a></span></div>
            <div className="flex items-start gap-4"><Clock3 size={20} /><span><span className="block text-[10px] font-bold uppercase tracking-widest text-black/55">Время работы</span><span className="mt-2 block text-base font-bold">Ежедневно, 09:00–21:00</span></span></div>
            <div className="flex items-start gap-4"><ShieldCheck size={20} /><span><span className="block text-[10px] font-bold uppercase tracking-widest text-black/55">Запись</span><span className="mt-2 block text-sm font-semibold">Уточните свободное время по телефону</span></span></div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 px-5 py-7 text-[10px] text-white/45 sm:flex-row sm:items-center md:px-10 lg:px-14">
        <a href="#top" className="flex items-center gap-3"><span className="text-lg font-black text-[#48d1cc]">G7</span><span className="tracking-[.18em]">GARAGE 007 DETAILING CENTER</span></a>
        <span>Краснодар · Шоссе Нефтяников, 22, стр. 1</span>
        <span>Концепция сайта · 2026</span>
      </footer>

      {showContact && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={() => setShowContact(false)}>
        <div className="relative w-full max-w-md border border-white/15 bg-[#171815] p-7 sm:p-9" onClick={(event) => event.stopPropagation()}>
          <button onClick={() => setShowContact(false)} aria-label="Закрыть" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/15"><X size={18} /></button>
          <p className="section-kicker">G7 / GARAGE 007</p>
          <h2 id="contact-title" className="mt-5 text-3xl font-black tracking-tight">ОБСУДИМ УХОД?</h2>
          <p className="mt-4 text-sm leading-6 text-white/60">Позвоните в студию — уточним услугу, стоимость и свободное время.</p>
          <a href="tel:+79615235877" className="accent-link mt-7 flex items-center justify-between bg-[#48d1cc] px-5 py-4 text-sm font-black text-black"><span>+7 961 523-58-77</span><Phone size={17} /></a>
          <a href="https://yandex.com/maps/?text=G7%20Detailing%20Center%20Краснодар" target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-between border border-white/15 px-5 py-4 text-sm font-semibold transition hover:border-[#48d1cc]/60"><span>Как добраться</span><MapPin size={17} /></a>
        </div>
      </div>}
    </main>
  );
}
