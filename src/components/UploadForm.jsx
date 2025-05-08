import { useState } from "react";
import axios from "axios";

export default function UploadForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    videoUrl: "",
    isPremium: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/videos`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Vidéo uploadée !");
    } catch (err) {
      alert("Erreur lors de l'upload");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uploader une vidéo</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Titre"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="videoUrl"
        value={form.videoUrl}
        onChange={handleChange}
        placeholder="URL vidéo"
      />
      <label>
        Premium ?
        <input
          type="checkbox"
          name="isPremium"
          checked={form.isPremium}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
}
