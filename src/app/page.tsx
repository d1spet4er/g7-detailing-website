"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, ArrowRight, Check, Clock3, MapPin,
  Menu, Phone, ShieldCheck, Sparkles, X, Droplets, CarFront
} from "lucide-react";

const services = [
  { title: "Полировка кузова", text: "Работа с блеском, мелкими рисками и следами эксплуатации лакокрасочного покрытия.", tag: "Кузов", image: "polirovka.webp" },
  { title: "Химчистка салона", text: "Глубокая очистка текстиля, ковров и труднодоступных зон салона.", tag: "Салон", image: "himchistka.webp" },
  { title: "Уход за кожей", text: "Деликатная очистка и уход за кожаными поверхностями с сохранением фактуры.", tag: "Салон", image: "kozha.webp" },
  { title: "Очистка пластика", text: "Очистка пластиковых элементов интерьера и аккуратное восстановление опрятного вида.", tag: "Салон", image: "plastik.webp" },
  { title: "Очистка подкапотного пространства", text: "Уход за подкапотной зоной с учётом материалов и особенностей автомобиля.", tag: "Уход", image: "podkapotnoe.webp" },
  { title: "Удаление битума и металлических вкраплений", text: "Очистка кузова от стойких дорожных загрязнений специальными составами.", tag: "Кузов", image: "ochistka-kuzova.webp" },
  { title: "Защитные покрытия", text: "Дополнительная защита поверхности и гидрофобный эффект — по состоянию кузова.", tag: "Защита", image: "zaschita.webp" },
  { title: "Мойка и внешний уход", text: "Бережное удаление повседневных загрязнений и поддержание чистоты автомобиля.", tag: "Уход", image: "moyka.webp" },
];

const steps = [
  ["01", "Расскажите о задаче", "Выберите услугу или опишите, что хотите привести в порядок."],
  ["02", "Согласуем детали", "Уточним автомобиль, состояние поверхности и ориентир по стоимости."],
  ["03", "Подтвердим время", "Студия сообщит доступные варианты и согласует запись."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-item]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const openContact = (service = "") => {
    setSelectedService(service);
    setShowContact(true);
  };
  const closeMenu = () => setMenuOpen(false);
  const sendRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      "Здравствуйте! Хочу узнать по услугам G7.",
      selectedService ? `Услуга: ${selectedService}` : "",
      car ? `Автомобиль: ${car}` : "",
      name ? `Как обращаться: ${name}` : "",
      message ? `Комментарий: ${message}` : "",
      "Подскажите стоимость и доступное время."
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/79615235877?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="overflow-hidden">
            <header className="relative z-30 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 md:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="G7 — на главную">
          <span className="flex h-11 w-16 items-center justify-center"><img src="/images/g7-logo.png" alt="G7" className="h-auto w-full object-contain" /></span>
          <span className="leading-tight"><span className="block text-sm font-extrabold tracking-[.08em]">GARAGE 007</span><span className="mt-1 block text-[9px] tracking-[.2em] text-white/45">DETAILING CENTER</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/65 lg:flex">
          <a className="hover:text-[#48d1cc]" href="#services">Услуги</a>
          <a className="hover:text-[#48d1cc]" href="#approach">Подход</a>
          <a className="hover:text-[#48d1cc]" href="#process">Как работаем</a>
          <a className="hover:text-[#48d1cc]" href="#contacts">Контакты</a>
        </nav>
        <div className="hidden items-center gap-5 sm:flex">
          <a href="tel:+79615235877" className="text-sm font-semibold">+7 961 523-58-77</a>
          <button onClick={() => openContact()} className="rounded-xl bg-[#48d1cc] px-5 py-3 text-sm font-bold text-[#101719] transition hover:bg-[#72e0dc]">Оставить заявку <ArrowUpRight className="ml-2 inline" size={15} /></button>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      {menuOpen && <nav className="relative z-30 flex flex-col gap-5 border-y border-white/10 bg-[#171e20] px-6 py-6 text-sm lg:hidden">
        { [["Услуги", "#services"], ["Подход", "#approach"], ["Как работаем", "#process"], ["Контакты", "#contacts"]].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <button onClick={() => { closeMenu(); openContact(); }} className="w-fit rounded-lg bg-[#48d1cc] px-4 py-3 font-bold text-black">Оставить заявку</button>
      </nav>}

      <section id="top" data-reveal className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-14 lg:px-12">
        <div>
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold text-white/50"><span className="h-px w-8 bg-[#48d1cc]" /> Уход за автомобилем в Краснодаре</div>
          <h1 className="max-w-[760px] text-[clamp(3.5rem,8vw,7.4rem)] font-black leading-[.88] tracking-[-.075em]">ДЕТАЛИ<br/>РЕШАЮТ<span className="text-[#48d1cc]">.</span><br/><span className="text-outline">МЫ ЗНАЕМ.</span></h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/60 md:text-lg md:leading-8">Детейлинг и бережный уход за кузовом и салоном. Помогаем выбрать процедуры под состояние автомобиля — без лишнего и с вниманием к деталям.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => openContact()} className="rounded-xl bg-[#48d1cc] px-5 py-4 text-sm font-bold text-[#101719] transition hover:bg-[#72e0dc]">Подобрать уход <ArrowUpRight className="ml-4 inline" size={16}/></button>
            <a href="#services" className="rounded-xl border border-white/15 px-5 py-4 text-sm font-semibold text-white/80 transition hover:border-[#48d1cc]/60 hover:text-white">Посмотреть услуги <ArrowDownRight className="ml-3 inline" size={16}/></a>
          </div>
        </div>
        <div className="hero-art relative flex min-h-[350px] items-end overflow-hidden rounded-[28px] border border-white/10 p-6 sm:min-h-[440px] sm:p-8 lg:min-h-[570px]">
          <img src="/images/hero-detailing.webp" alt="Полировка кузова автомобиля в детейлинг-студии" className="hero-photo absolute inset-0 h-full w-full object-cover" />
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="relative z-10 max-w-xs rounded-2xl border border-white/10 bg-[#111719]/85 p-5 backdrop-blur-md">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#48d1cc]/15 text-[#48d1cc]"><CarFront size={21}/></span>
            <p className="mt-4 text-lg font-bold">Автомобиль — в деталях.</p>
            <p className="mt-2 text-sm leading-6 text-white/55">Подберём подходящий уход и заранее обсудим объём работ.</p>
          </div>
          <span className="absolute right-6 top-6 rounded-full border border-[#48d1cc]/35 bg-black/35 px-3 py-2 text-[10px] font-bold tracking-[.16em] text-[#48d1cc] backdrop-blur">DETAILING CENTER</span>
        </div>
      </section>

      <section id="services" data-reveal className="border-y border-white/8 bg-[#151b1d]">
        <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
            <div><p className="section-kicker">Услуги G7</p><h2 className="mt-4 text-4xl font-extrabold leading-[.98] tracking-[-.055em] sm:text-6xl">УХОД, КОТОРЫЙ<br/><span className="text-white/35">ЧУВСТВУЕТСЯ.</span></h2></div>
            <p className="max-w-md text-sm leading-7 text-white/55">Выберите направление — расскажем, что подойдёт вашему автомобилю. Точную стоимость и время согласуем до начала работ.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              return <article data-reveal-item key={service.title} onClick={() => openContact(service.title)} onKeyDown={(event) => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openContact(service.title); } }} tabIndex={0} aria-label={`Уточнить стоимость: ${service.title}`} className="service-card flex min-h-[340px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1a2224] transition hover:border-[#48d1cc]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#48d1cc]">
                <div className="service-photo-wrap relative h-40 overflow-hidden sm:h-44"><img src={"/images/" + service.image} alt={service.title} loading="lazy" className="service-photo h-full w-full object-cover" /><span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#101719]/75 px-3 py-1 text-[10px] text-white/80 backdrop-blur">{service.tag}</span></div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold leading-snug tracking-tight">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/55">{service.text}</p>
                <button onClick={(event) => { event.stopPropagation(); openContact(service.title); }} className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-white/80 transition hover:text-[#48d1cc]"><span>Уточнить стоимость</span><ArrowUpRight size={17}/></button>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="approach" data-reveal className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div className="approach-panel relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 p-7 sm:min-h-[420px] sm:p-9">
          <img src="/images/kozha.webp" alt="Детальная очистка кожаной обивки" loading="lazy" className="approach-photo absolute inset-0 h-full w-full object-cover" />
          <div className="approach-shade absolute inset-0" />
          <div className="relative z-10"><span className="inline-flex items-center gap-2 rounded-full border border-[#48d1cc]/25 bg-[#48d1cc]/8 px-3 py-2 text-xs text-[#48d1cc]"><Sparkles size={14}/> Внимание к деталям</span><p className="mt-5 max-w-sm text-2xl font-bold leading-snug sm:text-3xl">Не просто чисто.<br/><span className="text-[#48d1cc]">Правильно.</span></p></div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="section-kicker">Наш подход</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[.98] tracking-[-.055em] sm:text-5xl">У КАЖДОЙ<br/>ДЕТАЛИ ЕСТЬ<br/><span className="text-white/35">СВОЙ ПОДХОД.</span></h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">Материалы кузова и салона требуют разного ухода. Перед работой важно понять задачу, состояние автомобиля и ожидаемый результат — чтобы подобрать подходящую процедуру.</p>
          <ul className="mt-7 space-y-4">{["Подбор процедуры под состояние автомобиля","Согласование объёма работ до начала","Понятная коммуникация по стоимости и срокам"].map(item => <li key={item} className="flex items-start gap-3 text-sm text-white/75"><Check className="mt-0.5 shrink-0 text-[#48d1cc]" size={17}/>{item}</li>)}</ul>
        </div>
      </section>

      <section id="process" data-reveal className="border-y border-white/8 bg-[#151b1d]">
        <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="max-w-2xl"><p className="section-kicker">Просто и понятно</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">КАК МЫ РАБОТАЕМ</h2><p className="mt-4 text-sm leading-7 text-white/55">Оставьте заявку — детали и свободное время подтвердит сотрудник студии.</p></div>
          <div className="mt-10 grid gap-3 md:grid-cols-3">{steps.map(([n,title,text]) => <article data-reveal-item key={n} className="rounded-2xl border border-white/10 bg-[#1a2224] p-6 sm:p-7"><span className="text-sm font-bold text-[#48d1cc]">{n}</span><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="contacts" data-reveal className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_.8fr] lg:gap-20 lg:px-12">
        <div><p className="section-kicker">Связаться с G7</p><h2 className="mt-4 text-5xl font-black leading-[.9] tracking-[-.07em] sm:text-7xl">ТВОЙ АВТОМОБИЛЬ.<br/><span className="text-[#48d1cc]">НОВЫЙ УРОВЕНЬ.</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/55">Расскажите, что хотите улучшить. Поможем сориентироваться по услугам, стоимости и времени.</p><button onClick={() => openContact()} className="mt-8 rounded-xl bg-[#48d1cc] px-5 py-4 text-sm font-bold text-[#101719] transition hover:bg-[#72e0dc]">Обсудить задачу <ArrowUpRight className="ml-4 inline" size={16}/></button></div>
        <div className="flex flex-col justify-center gap-7 rounded-2xl border border-white/10 bg-[#151b1d] p-6 sm:p-8">
          <a href="tel:+79615235877" className="flex items-start gap-4"><Phone className="mt-1 text-[#48d1cc]" size={19}/><span><span className="block text-xs text-white/45">Телефон</span><span className="mt-1 block text-xl font-bold sm:text-2xl">+7 961 523-58-77</span></span></a>
          <div className="flex items-start gap-4"><MapPin className="mt-1 text-[#48d1cc]" size={20}/><span><span className="block text-xs text-white/45">Адрес</span><a className="mt-1 block text-base font-semibold transition hover:text-[#48d1cc]" href="https://yandex.com/maps/org/g7/201128664192/?ll=38.990871%2C45.067875&mode=search&sctx=ZAAAAAgBEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJAAAAAACAUUARAAAAAAAALkAiBgABAgMEBSgKOABAI0gBagJydZ0BzczMPaABAKgBAL0B7cecIsIBBoC5z6HtBYICJkc3IERldGFpbGluZyBDZW50ZXIg0JrRgNCw0YHQvdC%2B0LTQsNGAigIAkgICMzWaAgxkZXNrdG9wLW1hcHPaAigKEgn5%2BlqXGn9DQBHHUdKcvIhGQBISCQCkdr8K8KU%2FEQDAwkmaP5Y%2F4AIB&sll=38.990871%2C45.067875&sspn=0.032472%2C0.016466&text=G7%20Detailing%20Center%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80&z=16.13" target="_blank" rel="noopener noreferrer" aria-label="Открыть G7 на Яндекс Картах">Краснодар, ул. Шоссе Нефтяников, 22, стр. 1</a><a className="mt-2 inline-block text-sm font-semibold text-[#48d1cc] hover:underline" href="https://yandex.com/maps/org/g7/201128664192/?ll=38.990871%2C45.067875&mode=search&sctx=ZAAAAAgBEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJAAAAAACAUUARAAAAAAAALkAiBgABAgMEBSgKOABAI0gBagJydZ0BzczMPaABAKgBAL0B7cecIsIBBoC5z6HtBYICJkc3IERldGFpbGluZyBDZW50ZXIg0JrRgNCw0YHQvdC%2B0LTQsNGAigIAkgICMzWaAgxkZXNrdG9wLW1hcHPaAigKEgn5%2BlqXGn9DQBHHUdKcvIhGQBISCQCkdr8K8KU%2FEQDAwkmaP5Y%2F4AIB&sll=38.990871%2C45.067875&sspn=0.032472%2C0.016466&text=G7%20Detailing%20Center%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80&z=16.13" target="_blank" rel="noopener noreferrer">Построить маршрут ↗</a></span></div>
          <div className="flex items-start gap-4"><Clock3 className="mt-1 text-[#48d1cc]" size={20}/><span><span className="block text-xs text-white/45">Время работы</span><span className="mt-1 block font-semibold">Ежедневно, 09:00–21:00</span></span></div>
          <div className="flex items-start gap-4"><ShieldCheck className="mt-1 text-[#48d1cc]" size={20}/><span><span className="block text-xs text-white/45">Запись</span><span className="mt-1 block text-sm text-white/75">Время подтвердим после обращения</span></span></div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-4 px-5 py-7 text-xs text-white/40 sm:flex-row sm:items-center md:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3"><img src="/images/g7-logo.png" alt="G7" className="w-16 object-contain" /><span className="font-semibold tracking-[.12em]">GARAGE 007 · DETAILING CENTER</span></a><span>© G7 Detailing Center</span>
        </div>
      </footer>

      {showContact && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={() => setShowContact(false)}>
        <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#151d1f] p-6 sm:p-8" onClick={event => event.stopPropagation()}>
          <button onClick={() => setShowContact(false)} aria-label="Закрыть" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10"><X size={18}/></button>
          <p className="section-kicker">G7 / GARAGE 007</p><h2 id="contact-title" className="mt-4 pr-8 text-3xl font-extrabold tracking-tight">ОБСУДИМ УХОД?</h2>
          <p className="mt-3 text-sm leading-6 text-white/55">Оставьте детали — откроется WhatsApp с готовым сообщением для студии. Время и стоимость подтвердит сотрудник.</p>
          <form onSubmit={sendRequest} className="mt-6 space-y-4">
            <label className="block text-sm text-white/70">Какая услуга интересует?
              <select value={selectedService} onChange={e => setSelectedService(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1517] px-4 py-3 text-white outline-none focus:border-[#48d1cc]"><option value="">Пока не знаю / нужна консультация</option>{services.map(service => <option key={service.title} value={service.title}>{service.title}</option>)}</select>
            </label>
            <label className="block text-sm text-white/70">Марка и модель автомобиля <span className="text-white/35">(необязательно)</span><input value={car} onChange={e => setCar(e.target.value)} placeholder="Например, BMW 3 Series" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1517] px-4 py-3 text-white outline-none placeholder:text-white/25 focus:border-[#48d1cc]"/></label>
            <label className="block text-sm text-white/70">Как к вам обращаться <span className="text-white/35">(необязательно)</span><input value={name} onChange={e => setName(e.target.value)} placeholder="Ваше имя" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1517] px-4 py-3 text-white outline-none placeholder:text-white/25 focus:border-[#48d1cc]"/></label>
            <label className="block text-sm text-white/70">Комментарий <span className="text-white/35">(необязательно)</span><textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} placeholder="Что хотите сделать с автомобилем?" className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#0f1517] px-4 py-3 text-white outline-none placeholder:text-white/25 focus:border-[#48d1cc]"/></label>
            <button type="submit" className="w-full rounded-xl bg-[#48d1cc] px-5 py-4 text-sm font-bold text-[#101719] transition hover:bg-[#72e0dc]">Продолжить в WhatsApp <ArrowRight className="ml-2 inline" size={16}/></button>
            <a href="tel:+79615235877" className="block text-center text-sm text-white/60 hover:text-[#48d1cc]">Или позвонить: +7 961 523-58-77</a>
          </form>
        </div>
      </div>}
    </main>
  );
}
