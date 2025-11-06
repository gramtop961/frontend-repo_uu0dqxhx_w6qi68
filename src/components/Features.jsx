import { Cpu, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Reactive Cushioning',
    desc: 'Smart foam adapts to your stride with micro-response sensors for explosive takeoff and soft landings.'
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: 'Neuro-Weave Upper',
    desc: 'Breathable nanomesh tightens and relaxes in real time for a perfect, secure fit.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Armor-Lite Shell',
    desc: 'Featherweight outer frame built to withstand the city grind without slowing you down.'
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Luminous Threads',
    desc: 'Light-reactive fibers glow to your rhythm with subtle cyberpunk gradients.'
  }
];

export default function Features() {
  return (
    <section id="tech" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Engineered for tomorrow</h2>
          <p className="mt-3 text-white/70">Every detail is tuned for speed, comfort, and expression in and out of the grid.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 text-purple-300">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
