import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL; // Utilisation de l'URL API définie dans .env
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Affiche les données envoyées pour le debug
      console.log("Envoi des données:", { email, password });

      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Échec de la connexion");
      }

      const data = await res.json();
      console.log("Réponse du serveur:", data); // Pour voir la réponse du serveur

      // Stocke le token dans localStorage si la connexion est réussie
      localStorage.setItem("token", data.token);

      // Redirection vers la page d'accueil après connexion
      navigate("/");
    } catch (err) {
      // En cas d'erreur, affiche un message à l'utilisateur
      console.error("Erreur de connexion:", err);
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto space-y-4 p-4 border rounded"
    >
      <h2 className="text-xl font-semibold">Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Se connecter
      </button>
      {error && <p className="text-red-500">{error}</p>}

      {/* Lien pour rediriger vers la page d'inscription */}
      <p className="text-center text-sm">
        Pas encore de compte ?{" "}
        <a href="/register" className="text-blue-600 underline">
          Créer un compte
        </a>
      </p>
    </form>
  );
};

export default Login;
