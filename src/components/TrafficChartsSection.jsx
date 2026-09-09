import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { trafficExample, trafficCharts } from "../data/trafficCharts";

const BarChart = ({ data, title, description, index }) => {
  const max = Math.max(...data.series.flatMap((s) => s.values));
  return (
    <Reveal delay={index * 0.05}>
      <div className="rounded-2xl border border-black/[0.08] bg-white p-7 shadow-[0_18px_55px_rgba(38,29,63,0.07)]">
        <h3 className="text-lg font-semibold text-[#17151d]">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#69636f]">{description}</p>
        <div className="mt-6 space-y-5">
          {data.series.map((series) => (
            <div key={series.name}>
              <div className="mb-1 flex justify-between text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-violet-700">
                <span>{series.name}</span>
                <span>{series.values.join(" → ")}</span>
              </div>
              <div className="flex items-end gap-2">
                {series.values.map((value, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${i === 0 ? "bg-[#e9e7ef]" : "bg-violet-600"}`}
                      style={{ height: `${(value / max) * 120}px` }}
                    />
                    <span className="text-[0.65rem] text-[#69636f]">{data.labels[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

const LineChart = ({ data, title, description, index }) => (
  <Reveal delay={index * 0.05}>
    <div className="rounded-2xl border border-black/[0.08] bg-white p-7 shadow-[0_18px_55px_rgba(38,29,63,0.07)]">
      <h3 className="text-lg font-semibold text-[#17151d]">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-[#69636f]">{description}</p>
      <div className="mt-6">
        <div className="relative h-40 w-full">
          <svg className="h-full w-full" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet">
            <polyline
              points={`0,100 ${data.series[0].values
                .map(
                  (v, i) =>
                    `${(i / (data.series[0].values.length - 1)) * 260},${100 - (v / 35) * 80}`,
                )
                .join(" ")}`}
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {data.series[0].values.map((v, i) => (
              <circle
                key={i}
                cx={`${(i / (data.series[0].values.length - 1)) * 260}`}
                cy={`${100 - (v / 35) * 80}`}
                r="3"
                fill="#7c3aed"
              />
            ))}
          </svg>
          <div className="absolute -bottom-6 flex w-full justify-between text-[0.62rem] text-[#69636f]">
            {data.labels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Reveal>
);

const PieChart = ({ data, title, description, index }) => {
  const total = data.series.reduce((a, b) => a + b, 0);
  let cumulative = 0;
  const colors = ["#7c3aed", "#a855f7", "#c084fc", "#ddd6fe"];
  const segments = data.series.map((value, i) => {
    const start = cumulative;
    cumulative += value;
    const pathData = (() => {
      const x1 = 50 + 40 * Math.cos((start / total) * 2 * Math.PI - Math.PI / 2);
      const y1 = 50 + 40 * Math.sin((start / total) * 2 * Math.PI - Math.PI / 2);
      const x2 = 50 + 40 * Math.cos((cumulative / total) * 2 * Math.PI - Math.PI / 2);
      const y2 = 50 + 40 * Math.sin((cumulative / total) * 2 * Math.PI - Math.PI / 2);
      return `M 50 50 L ${x1} ${y1} A 40 40 0 ${value > total / 2 ? 1 : 0} 1 ${x2} ${y2} Z`;
    })();
    return {
      pathData,
      color: colors[i % colors.length],
      label: data.labels[i],
      value,
      percent: ((value / total) * 100).toFixed(0),
    };
  });

  return (
    <Reveal delay={index * 0.05}>
      <div className="rounded-2xl border border-black/[0.08] bg-white p-7 shadow-[0_18px_55px_rgba(38,29,63,0.07)]">
        <h3 className="text-lg font-semibold text-[#17151d]">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#69636f]">{description}</p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <svg className="h-32 w-32" viewBox="0 0 100 100">
            {segments.map((seg, i) => (
              <path
                key={i}
                d={seg.pathData}
                fill={seg.color}
                stroke="white"
                strokeWidth="0.5"
              />
            ))}
          </svg>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {segments.map((seg, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: seg.color }} />
                <span className="text-sm text-[#69636f]">
                  {seg.label}: {seg.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const ChartRenderer = ({ chart, index }) => {
  switch (chart.type) {
    case "bar":
      return <BarChart data={chart.data} title={chart.title} description={chart.description} index={index} />;
    case "line":
      return <LineChart data={chart.data} title={chart.title} description={chart.description} index={index} />;
    case "pie":
      return <PieChart data={chart.data} title={chart.title} description={chart.description} index={index} />;
    default:
      return null;
  }
};

const BeforeAfterCard = ({ label, data, delay }) => (
  <Reveal delay={delay}>
    <div className={`w-full rounded-2xl border border-black/[0.08] p-6 text-center shadow-[0_18px_55px_rgba(38,29,63,0.07)] ${
      label === "Antes"
        ? "bg-[#fef2f2]"
        : "bg-[#f0fdf4]"
    }`}>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#69636f]">
        {label}
      </h3>
      <div className="mt-4 space-y-3.5">
        <div className="flex justify-between">
          <span className="text-sm text-[#69636f]">Investimento</span>
          <span className="font-semibold text-[#17151d] whitespace-nowrap">R$ {data.spend}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-[#69636f]">Leads</span>
          <span className="font-semibold text-[#17151d] whitespace-nowrap">{data.leads}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-[#69636f]">Conversão</span>
          <span className="font-semibold text-[#17151d] whitespace-nowrap">{data.conversionRate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-[#69636f]">CPL</span>
          <span className="font-semibold text-[#17151d] whitespace-nowrap">R$ {data.cpl}</span>
        </div>
      </div>
    </div>
  </Reveal>
);

const TrafficChartsSection = ({ slug }) => {
  if (slug !== "trafego-pago") return null;

  const { industry, timeframe, objective, before, after, results, metrics } =
    trafficExample;

  return (
    <>
      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-700">
                Exemplo de aplicação
              </span>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
                {industry}
              </h2>
              <p className="mt-6 max-w-3xl text-balance text-base leading-8 text-[#625d69] sm:text-lg">
                {timeframe}. {objective}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.05}>
                <div className="flex flex-col items-center justify-center rounded-xl border border-black/[0.08] bg-[#f7f6f9] p-6 text-center shadow-[0_4px_20px_rgba(38,29,63,0.05)]">
                  <span className="text-2xl font-semibold text-violet-700">
                    {metric.value}
                  </span>
                  <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#69636f]">
                    {metric.label}
                  </p>
                  <span
                    className={`mt-1 text-[0.68rem] font-semibold ${
                      metric.change.startsWith("+")
                        ? "text-violet-600"
                        : "text-[#69636f]"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f7f6f9] text-[#17151d]">
        <div className="page-shell">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-balance text-3xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-4xl">
                Performance comparativa
              </h2>
              <p className="mt-4 text-balance text-base leading-8 text-[#625d69] sm:text-lg">
                Antes e depois da otimização das campanhas de tráfego pago.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 mx-auto max-w-3xl space-y-6 sm:flex sm:gap-6 sm:space-y-0 lg:max-w-5xl">
            <div className="sm:flex-1">
              <BeforeAfterCard label="Antes" data={before} delay={0.05} />
            </div>
            <div className="sm:flex-1">
              <BeforeAfterCard label="Depois" data={after} delay={0.1} />
            </div>
          </div>

          <div className="mt-14 mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trafficCharts.map((chart, index) => (
              <ChartRenderer key={chart.title} chart={chart} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-balance text-3xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-4xl">
                Resultados obtidos
              </h2>
              <p className="mt-4 text-balance text-base leading-8 text-[#625d69] sm:text-lg">
                Após a reestruturação das campanhas e páginas de destino.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-4">
            <Reveal delay={0.05}>
              <div className="flex flex-col items-center justify-center rounded-xl border border-black/[0.08] bg-white p-7 text-center shadow-[0_18px_55px_rgba(38,29,63,0.07)]">
                <span className="text-3xl font-semibold text-violet-700">{results.sales}</span>
                <span className="mt-1 text-sm text-[#69636f]">Vendas concluídas</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center justify-center rounded-xl border border-black/[0.08] bg-white p-7 text-center shadow-[0_18px_55px_rgba(38,29,63,0.07)]">
                <span className="text-3xl font-semibold text-violet-700">{results.revenue}</span>
                <span className="mt-1 text-sm text-[#69636f]">Receita gerada</span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col items-center justify-center rounded-xl border border-black/[0.08] bg-white p-7 text-center shadow-[0_18px_55px_rgba(38,29,63,0.07)]">
                <span className="text-3xl font-semibold text-violet-700">{results.roas}</span>
                <span className="mt-1 text-sm text-[#69636f]">ROAS</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center justify-center rounded-xl border border-black/[0.08] bg-white p-7 text-center shadow-[0_18px_55px_rgba(38,29,63,0.07)]">
                <span className="text-3xl font-semibold text-violet-700">{results.costPerSale}</span>
                <span className="mt-1 text-sm text-[#69636f]">Custo por venda</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="mt-12 flex justify-center">
              <Link
                to="/diagnostico"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Solicitar diagnóstico <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default TrafficChartsSection;
