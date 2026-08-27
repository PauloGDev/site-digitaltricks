import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQList = ({ items }) => (
  <div className="divide-y divide-black/10 border-y border-black/10 text-[#17151d]">
    {items.map(([question, answer], index) => (
      <Reveal key={question} delay={index * 0.035}>
        <details className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold sm:text-lg">
            {question}
            <Plus className="h-5 w-5 shrink-0 text-violet-300 transition-transform group-open:rotate-45" />
          </summary>
          <p className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-[#68626e] sm:text-base sm:leading-8">
            {answer}
          </p>
        </details>
      </Reveal>
    ))}
  </div>
);

export default FAQList;
