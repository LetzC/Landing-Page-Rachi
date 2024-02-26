import Header from "./components/Header";
import Button from "./components/Button";
import CardSimple from "./components/cardSimple";

const titleStyle = "font-semibold text-zinc-800 leading-tight";
const colorfulArticle =
  "px-6 md:px-32 py-16 bg-blue-50 grid lg:grid-cols-2 place-items-center lg:gap-24";

import illustrationMan from "/illustration-man-home-1.svg";
import person from "/person.svg";
import security from "/security.svg";
import happyEmoji from "/happy-emoji.svg";
import playStoreButton from "/google-play.svg";
import appStore from "/app-store.svg";
import illustrationNotification from "/illustration-notifications.svg";
import Card from "./components/Card";
import bgImage from "/contact-bg.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <article className={colorfulArticle}>
          <div>
            <h1 className={`${titleStyle} text-4xl sm:text-5xl mb-12`}>
              Rachi,
              <br />
              é tudo que você
              <br />
              precisa em um só lugar.
            </h1>
            <Button>Cadastrar-se</Button>
          </div>

          <img src={illustrationMan} alt="illustration man" />
        </article>

        <article
          className="flex flex-col place-items-center mt-14"
          id="functionality"
        >
          <h2 className={`${titleStyle} text-2xl sm:text-4xl`}>
            Como funciona
          </h2>

          <section className="flex flex-col gap-11 lg:flex-row place-items-center justify-between w-2/4 mt-20 mb-28">
            <CardSimple
              icon={person}
              iconAlt={
                "Uma silhueta de uma pessoa com um símbolo de mais logo ao lado."
              }
              title={"Crie conexões"}
              description={"Lorem ipsum dolor sit amet, consecteteu."}
            />
            <CardSimple
              icon={security}
              iconAlt={"Símbolo afirmando o título."}
              title={"100% gratuito"}
              description={"Lorem ipsum dolor sit amet, consecteteu."}
            />
            <CardSimple
              icon={happyEmoji}
              iconAlt={"Emoji feliz"}
              title={"Compartilhamento"}
              description={"Lorem ipsum dolor sit amet, consecteteu."}
            />
          </section>
        </article>

        <article className={colorfulArticle} id="app">
          <div>
            <h2 className={`${titleStyle} text-3xl sm:text-4xl mb-6`}>
              Baixe nosso app para desfrutar mais!
            </h2>

            <p className="text-zinc-600 text-sm sm:text-lg max-w-[444px]">
              Amet in elementum nulla scelerisque dui, egestas at. Elit
              consectetur turpis elementum amet vitae et etiam nec. Varius
              volutpat hac adipiscing tincidunt pretium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12">
              <img
                src={playStoreButton}
                alt="Play Store"
                className="cursor-pointer max-w-[165.45px] max-h-[52.17px]"
              />
              <img
                src={appStore}
                alt="Play Store"
                className="cursor-pointer max-w-[165.45px] max-h-[52.17px]"
              />
            </div>
          </div>

          <img
            src={illustrationNotification}
            alt="illustration Notifications"
          />
        </article>

        <article
          className="flex flex-col place-items-center mt-12 px-3 sm:px-6"
          id="plans"
        >
          <h2 className={`${titleStyle} text-2xl sm:text-4xl mb-4`}>
            Nossos Planos
          </h2>

          <p className="text-center text-sm sm:text-lg text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>

          <section className="flex flex-col lg:flex-row gap-8 mt-10">
            <Card
              title={"Bronze"}
              price={28}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
              }
              isDark={false}
            />
            <Card
              title={"Prata"}
              price={57}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
              }
              isDark={true}
            />
            <Card
              title={"Ouro"}
              price={94}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
              }
              isDark={false}
            />
          </section>
        </article>

        <section
          className="flex flex-col place-items-center mt-10 text-center py-8 px-6 md:py-14 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(41, 49, 69, 0.7), rgba(41, 49, 69, 0.7)), url(${bgImage})`,
          }}
          id="contact"
        >
          <h2 className="font-semibold text-white leading-tight text-2xl sm:text-4xl mb-4">
            Contato
          </h2>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>

          <div className="flex flex-col md:flex-row justify-between w-full max-w-[520px] place-items-center gap-10">
            <input
              type="email"
              className="bg-transparent border-b-[1px] placeholder-white text-white focus:outline-none mt-6 mb-9 pb-3 w-[100%]"
              placeholder="Seu melhor e-mail"
            />

            <button
              className="bg-blue-500 hover:bg-blue-600
            text-base	sm:text-lg text-white hover:text-slate-200 transition-colors
            py-2 w-full sm:w-auto sm:px-9 rounded-full
            max-h-14
    "
            >
              Enviar
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
