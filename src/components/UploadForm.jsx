// src/components/UploadForm.jsx
import { useState } from "react";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", file);

    try {
      const res = await fetch(`${apiUrl}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Erreur : ${res.status}`);
      const data = await res.json();
      setMessage(`✅ Vidéo "${data.title}" envoyée avec succès !`);
      setTitle("");
      setFile(null);
    } catch (err) {
      setMessage(`❌ Erreur : ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Titre de la vidéo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Envoyer
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default UploadForm;
