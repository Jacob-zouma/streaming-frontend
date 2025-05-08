// Home.jsx
import VideoList from "../components/VideoList";
import UploadForm from "../components/UploadForm";

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur le streaming</h1>
      <UploadForm />
      <VideoList />
    </div>
  );
}