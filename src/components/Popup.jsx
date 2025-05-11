const Popup = ({ message, type = "success", onClose }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = type === "success" ? "✅" : "❌";

  return (
    <div
      className={`fixed top-6 right-6 z-50 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out flex items-center gap-2 ${bgColor}`}
    >
      <span>{icon}</span>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 font-bold text-xl">
        ×
      </button>
    </div>
  );
};

export default Popup;
