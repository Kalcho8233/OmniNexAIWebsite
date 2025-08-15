'use client';
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NeonButton from "../components/NeonButton";
import FeatureAccordionLite from "../components/FeatureAccordionLite";
import PlanROIText from "../components/PlanROIText";
import StripeBuyButton from "../components/StripeBuyButton";

const descCls = "text-[1.02rem] md:text-[1.08rem] font-medium text-gray-800 leading-snug";

const plans = [
  // ==== LAUNCH ====
  {
    name: "Launch",
    price: "€2,500 setup + €300/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      { title: "1–2 automations", desc: "Готови workflows, които махат повтарящи се задачи и спестяват време." },
      { title: "Chat or autopilot", desc: "Пускаш задача в чат или я насрочваме да върви сама в определени моменти." },
      { title: "Connects multiple tools", desc: "Работи с инструментите, които вече ползвате – без нови логини." },
      { title: "Onboarding & training", desc: "Кратко въвеждане и ръководство, за да стартирате уверено от ден 1." },
      { title: "Ongoing improvements", desc: "Леки подобрения при нужда, когато изникнат идеи или промени." },
      { title: "Support", desc: "Стандартна поддръжка в работно време." },
    ],
    note: "Best for: lean teams getting started",
    stripeButtonId: "buy_btn_1RnMqjQ3alExjY2yBSlLMmH3"
  },

  // ==== OPTIMIZE ====
  {
    name: "Optimize",
    price: "€5,000 setup + €600/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      // същите основни, но по-подобрени и реалистични за соло изпълнение
      { title: "3–4 automations", desc: "Повече процеси, по-стабилно изпълнение и видими спестени часове." },
      { title: "Chat or autopilot", desc: "Същото удобство – чат заявки и лесно насрочване, без сложни аларми." },
      { title: "Connects multiple tools", desc: "По-добри връзки между инструментите, за по-малко ръчна работа." },
      { title: "Onboarding & training", desc: "Ролеви инструкции и кратки видео стъпки за екипа." },
      { title: "Ongoing improvements", desc: "Месечни малки доработки според реалната употреба." },
      { title: "Support", desc: "Priority support – по-бърз отговор при важни теми." },
      // добавени, но леки за изпълнение
      { title: "Smarter coordination", desc: "Прости правила „ако/тогава“, за да минава работата по-умно между екипи." },
      { title: "Regular check-ins", desc: "Кратък преглед веднъж месечно – какво работи и какво да пипнем." },
    ],
    note: "For teams ready to systemize & scale",
    stripeButtonId: "buy_btn_1RnMxZQ3alExjY2yeUmTAidG"
  },

  // ==== SCALE ====
  {
    name: "Scale",
    price: "€9,000 setup + €1,200/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      // основни, най-силни, но без тежки обещания за мониторинг/SLAs
      { title: "4+ automations", desc: "По-широко покритие – ключови процеси автоматизирани от край до край." },
      { title: "Chat, events & autonomous", desc: "Заявки от чат и/или автоматично стартиране при събития – където има смисъл." },
      { title: "Connects multiple tools", desc: "Интеграции за повече екипи и роли – по-малко „копи-пейст“ между системи." },
      { title: "Onboarding & training", desc: "Работилници за всички звена, за да стане част от ежедневието." },
      { title: "Ongoing improvements", desc: "План за малки, но постоянни подобрения през цялата година." },
      { title: "Support", desc: "Dedicated support – един човек, който познава твоята среда." },
      // наследени от Optimize
      { title: "Smarter coordination", desc: "По-богати правила между екипи и системи при нужда." },
      { title: "Regular check-ins", desc: "Двумесечни прегледи с конкретни малки задачи за подобрение." },
      // само за Scale – но без тежки задължения
      { title: "Built for expansion", desc: "Подготвено за повече обем и нови процеси, когато сте готови." },
      { title: "Governance & access", desc: "Ясни роли и достъпи, за да има ред при растеж." },
    ],
    note: "For growing agencies & enterprises",
    stripeButtonId: "buy_btn_1RnMytQ3alExjY2ymqk2cAnN"
  }
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | OmniNex AI Plans</title>
        <meta
          name="description"
          content="Compare OmniNex pricing plans for custom AI workflow assistants. From lean startup teams to full-scale operations – see which plan fits your business."
        />
      </Head>

      <Navbar />

      <main className="relative bg-backgroundLight text-accentText min-h-screen py-20 px-6 md:px-20">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-neonPurple">Choose the plan </span>
            <span className="text-black">that fits your team.</span>
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-10">
            Start saving <strong>10+ hours/week</strong> with your custom AI assistant. <strong>Pick your plan.</strong>
          </p>
          <a
            href="https://calendly.com/nikola-nikolov1/ai-assistant-discovery-call"
            className="inline-block bg-neonPurple text-black font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:shadow-[0_0_18px_#c084fc] transition no-underline"
          >
            Book a Demo
          </a>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white ${plan.border} p-6 rounded-xl shadow-sm hover:scale-[1.03] transition-transform border-2 flex flex-col justify-between`}
            >
              {plan.name === "Optimize" && (
                <div className="absolute top-4 right-4 bg-[#D000FF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  💜 Most Chosen
                </div>
              )}

              <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-2 text-primaryText">{plan.name}</h2>
                <p className={`mt-1 mb-3 ${plan.text} font-bold text-xl md:text-2xl`}>{plan.price}</p>

                <PlanROIText plan={plan.name} />

                <div className="space-y-4 mb-6 mt-5">
                  {plan.features.map((f, j) => (
                    <FeatureAccordionLite
                      key={j}
                      title={<span className="font-semibold">{f.title}</span>}
                      description={<span className={descCls}>{f.desc}</span>}
                    />
                  ))}
                </div>

                <p className="mb-4 text-sm text-gray-500 font-normal select-none">{plan.note}</p>
              </div>

              <div className="mt-auto">
                <StripeBuyButton buyButtonId={plan.stripeButtonId} />
              </div>
            </div>
          ))}
        </section>

        {/* Tagline */}
        <section className="text-center mt-14 mb-2">
          <p className="text-2xl md:text-3xl text-black">
            Built for teams who don’t want just another tool - but <strong>real results</strong>.
          </p>
        </section>

        {/* Footer CTA */}
        <section className="text-center mt-20">
          <p className="text-lg text-secondaryText mb-6">
            Still not sure? <span className="font-semibold">Let’s build your plan together.</span>
          </p>
          <Link href="/#contact" scroll={true}>
            <span className="inline-block bg-neonPurple text-black font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:shadow-[0_0_18px_#c084fc] transition no-underline cursor-pointer">
              Contact Us
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
