import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const Error404 = () => (
  <>
    <Seo
      title="Página não encontrada"
      description="O endereço acessado não foi encontrado."
      path="/404"
    />
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-[#e9e7ef] pb-20 pt-32 text-[#17151d]">
      <div className="pointer-events-none absolute inset-0 dot-surface-light opacity-70" />
      <div className="page-shell relative w-full">
        <Reveal>
          <Compass className="h-8 w-8 text-violet-700" />
          <span className="mt-8 block text-[7rem] font-semibold leading-none tracking-[-0.08em] text-violet-600/20 sm:text-[11rem]">
            404
          </span>
          <h1 className="-mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Esta rota não leva a lugar algum.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#68626e]">
            O endereço pode ter sido alterado ou não existir. Retorne ao início
            para continuar explorando a Digital Tricks.
          </p>
          <Link to="/" className="home-button-dark mt-9 w-fit">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
        </Reveal>
      </div>
    </section>
  </>
);

export default Error404;
