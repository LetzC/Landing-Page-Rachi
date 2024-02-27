import PropTypes from "prop-types";
import Button from "./Button";

export default function Card({ title, price, description, isDark }) {
  if (isDark) {
    return (
      <div className="bg-[#293145] max-w-80 py-6 lg:px-16 px-12 text-center flex flex-col gap-8 rounded-xl">
        <h6 className="font-semibold text-2xl text-white">{title}</h6>

        <h4 className="font-bold text-white">
          <span className="text-xl relative top-[-20px]">R$</span>{" "}
          <strong className="text-5xl">{price}</strong>
          <span className="text-3xl">/ mês</span>
        </h4>

        <p className="mb-6 text-gray-300">{description}</p>

        <Button>Assinar</Button>
      </div>
    );
  } else {
    return (
      <div className="bg-blue-50 max-w-80 py-6 lg:px-16 px-12 text-center flex flex-col gap-8 rounded-xl">
        <h6 className="font-semibold text-2xl">{title}</h6>

        <h4 className="font-bold">
          <span className="text-xl relative top-[-20px]">R$</span>{" "}
          <strong className="text-5xl">{price}</strong>
          <span className="text-3xl">/ mês</span>
        </h4>

        <p className="mb-6 text-zinc-600">{description}</p>

        <Button>Assinar</Button>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
};
