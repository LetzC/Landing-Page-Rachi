// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600
    shadow-blue-400 shadow-md
    text-xl text-white hover:text-slate-200 transition-colors
    py-3 px-5 sm:py-4 sm:px-9 rounded-full"
    >
      {children}
    </button>
  );
}