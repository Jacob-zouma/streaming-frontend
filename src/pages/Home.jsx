// src/pages/Home.jsx
import VideoList from "../components/VideoList";
import UploadForm from "../components/UploadForm";

const Home = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🎥 Ma plateforme de streaming
      </h1>

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
