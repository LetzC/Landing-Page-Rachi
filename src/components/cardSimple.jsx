import PropTypes from "prop-types";

export default function CardSimple({ icon, iconAlt, title, description }) {
  return (
    <section className="flex flex-col place-items-center max-w-52 text-center">
      <img src={icon} alt={iconAlt} width={60} height={60} />
      <h6 className="font-semibold text-zinc-800 leading-tight text-lg mt-7 mb-4">
        {title}
      </h6>
      <p className="text-sm sm:text-lg text-zinc-600">{description}</p>
    </section>
  );
}

CardSimple.PropTypes = {
  icon: PropTypes.elementType,
  iconAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
