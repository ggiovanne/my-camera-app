import { useRef } from "react";

export default function App() {
  const fileInputRef = useRef(null);

  const handleOpenCamera = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-6">📸 Web App - Camera</h1>
      <button
        onClick={handleOpenCamera}
        className="bg-white text-blue-600 px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
      >
        Abrir Câmera
      </button>

      {/* input escondido que abre a câmera */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="user" // força abrir a câmera
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
