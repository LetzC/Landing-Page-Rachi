import Header from "./components/Header";
import Button from "./components/Button";
import CardSimple from "./components/cardSimple";

const titleStyle = "font-semibold text-zinc-800 leading-tight";

import illustrationMan from "/illustration-man-home-1.svg";
import person from "/person.svg";
import security from "/security.svg";
import happyEmoji from "/happy-emoji.svg";
import playStoreButton from "/google-play.svg";
import appStore from "/app-store.svg";
import illustrationNotification from "/illustration-notifications.svg";

function App() {
  return (
    <>
      <Header />
      <main>
        <article className="px-6 md:px-32 py-16 bg-blue-50 grid lg:grid-cols-2 place-items-center lg:gap-24">
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

        <article className="flex flex-col place-items-center mt-14">
          <h2 className={`${titleStyle} text-4xl mb-12`}>Como funciona</h2>

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

        <article className="px-6 md:px-32 py-16 bg-blue-50 grid lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <h1 className={`${titleStyle} text-3xl sm:text-4xl mb-6`}>
              Baixe nosso app para desfrutar mais!
            </h1>

            <p className="text-zinc-600 max-w-[444px]">
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
      </main>
    </>
  );
}

export default App;
