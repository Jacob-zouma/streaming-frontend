// VideoList.jsx
// src/components/VideoList.jsx
import { useEffect, useState } from 'react';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/videos`)
      .then(res => {
        if (!res.ok) throw new Error(`Erreur: ${res.status}`);
        return res.json();
      })
      .then(data => setVideos(data))
      .catch(err => setError(err.message));
  }, [apiUrl]);

  if (error) return <p className="text-red-500">Erreur : {error}</p>;

  return (
    <div className="grid gap-4">
      {videos.map((video) => (
        <div key={video.id} className="border p-4 rounded">
          <h3 className="text-xl font-semibold">{video.title}</h3>
          <video controls src={video.url} className="w-full mt-2" />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
