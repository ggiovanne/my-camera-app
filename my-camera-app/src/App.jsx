import { useRef } from "react";

export default function App() {
  const fileInputRef = useRef(null);

  const handleOpenCamera = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-semibold mb-4">📸 Capture uma Foto</h1>
      <button
        onClick={handleOpenCamera}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Abrir Câmera
      </button>

      {/* Input escondido para capturar a foto */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="user" // Use "user" para câmera frontal ou "environment" para traseira
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            alert(`Foto capturada: ${e.target.files[0].name}`);
          }
        }}
      />
    </div>
  );
}
