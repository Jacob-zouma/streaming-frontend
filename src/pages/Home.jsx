// src/pages/Home.jsx
import { jwtDecode } from "jwt-decode";
import VideoList from "../components/VideoList";
import UploadForm from "../components/UploadForm";

const Home = () => {
  const token = localStorage.getItem("token");
  let email = "";

  try {
    const decoded = jwtDecode(token);
    email = decoded.email;
  } catch (err) {
    console.error("Erreur de décodage du token :", err);
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🎥 Ma plateforme de streaming
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Bienvenue, <span className="font-semibold">{email}</span> !
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">📤 Uploader une vidéo</h2>
        <UploadForm />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">📺 Vidéos disponibles</h2>
        <VideoList />
      </section>
    </main>
  );
};

export default Home;
