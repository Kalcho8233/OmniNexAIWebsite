import { motion } from 'framer-motion';
import NeonButton from './NeonButton';

const plans = [
  {
    name: 'Launch',
    price: '€2,500 setup + €300/month',
    features: [
      '✅ 1–2 automations — премахват повтарящи се задачи.',
      '✅ Chat or autopilot — пускаш в чат или по график.',
      '✅ Connects multiple tools — работи с текущия ви стек.',
      '✅ Onboarding & training — кратко въвеждане и ръководства.',
      '✅ Ongoing improvements — дребни подобрения при нужда.',
      '✅ Support — стандартна поддръжка в работно време.'
    ],
    highlight: 'Best for: lean teams getting started',
    border: 'border-neonBlue'
  },
  {
    name: 'Optimize',
    price: '€5,000 setup + €600/month',
    features: [
      '✅ 3–4 automations — по-стабилно и по-бързо изпълнение.',
      '✅ Chat or autopilot — заявки в чат и лесно насрочване.',
      '✅ Connects multiple tools — по-добри връзки между системите.',
      '✅ Onboarding & training — ролеви инструкции и кратки видеа.',
      '✅ Ongoing improvements — месечни леки доработки.',
      '✅ Support — priority отговор при важни теми.',
      // леки добавки
      '✅ Smarter coordination — прости правила между екипи/инструменти.',
      '✅ Regular check-ins — кратък преглед веднъж месечно.'
    ],
    highlight: 'For teams ready to systemize & scale',
    border: 'border-neonPurple'
  },
  {
    name: 'Scale',
    price: '€9,000 setup + €1,200/month',
    features: [
      '✅ 4+ automations — по-широко покритие на ключови процеси.',
      '✅ Chat, events & autonomous — автоматично стартиране където има смисъл.',
      '✅ Connects multiple tools — интеграции за повече екипи и роли.',
      '✅ Onboarding & training — работилници за всички звена.',
      '✅ Ongoing improvements — годишен план за малки, постоянни подобрения.',
      '✅ Support — dedicated контакт, който познава средата ви.',
      // наследени от Optimize
      '✅ Smarter coordination — по-богати правила при нужда.',
      '✅ Regular check-ins — преглед на всеки два месеца.',
      // само за Scale
      '✅ Built for expansion — готово за повече обем и нови процеси.',
      '✅ Governance & access — ясни роли и достъпи при растеж.'
    ],
    highlight: 'For growing agencies & enterprises',
    border: 'border-neonBlue'
  }
];

export default function OurPlans() {
  return (
    <section id="ourplans" className="bg-[#f7f8fa] text-black py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#111827]">
        Our Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`rounded-xl bg-white p-8 shadow-lg border-2 ${plan.border} hover:scale-[1.03] transition-transform`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#111827]">{plan.name}</h3>
            <p className="font-bold text-xl md:text-2xl mb-4 text-neonBlue">{plan.price}</p>

            <ul className="space-y-2 text-gray-800 font-medium text-[1.02rem] md:text-[1.08rem] leading-snug mb-4">
              {plans[i].features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>

            <p className="text-sm text-gray-500 mb-4">{plan.highlight}</p>

            <a
              href="https://calendly.com/nikola-nikolov1/ai-assistant-discovery-call"
              className="inline-block bg-neonPurple text-black font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:shadow-[0_0_18px_#c084fc] transition no-underline"
            >
              Book a Demo
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
