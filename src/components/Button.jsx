// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600
    shadow-blue-400 shadow-md
    text-base	sm:text-lg text-white hover:text-slate-200 transition-colors
    py-3 px-5 sm:py-3 sm:px-9 rounded-full
    max-h-14
    "
    >
      {children}
    </button>
  );
}
