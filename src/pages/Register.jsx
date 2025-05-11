import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup"; // Assurez-vous que Popup.jsx existe et est bien importé
import './js/principal.js'; // Assure-toi que ce chemin est correct
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

useEffect(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID); // Bon usage : variable d'env
}, []);


const Register = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [globalMessage, setGlobalMessage] = useState("");
  const [popup, setPopup] = useState({ message: "", type: "success" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le nom est obligatoire.";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le prénom est obligatoire.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Le mot de passe doit faire au moins 6 caractères.";
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }

    return newErrors;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setGlobalMessage("");
    setPopup({ message: "", type: "success" });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setGlobalMessage("Veuillez corriger les erreurs ci-dessus.");
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Échec de l'inscription.");
      }

      // Succès
      const data = await res.json();
      localStorage.setItem("token", data.token);
      setPopup({ message: "Compte créé avec succès 🎉", type: "success" });

      setTimeout(() => {
        setPopup({ message: "", type: "success" });
        navigate("/"); // Redirection après le succès
      }, 2000);
    } catch (err) {
      setErrors({ api: err.message });
      setPopup({ message: err.message, type: "error" });
      setTimeout(() => setPopup({ message: "", type: "error" }), 5000);
    }
  };

  const getInputClass = (field) =>
    `w-full p-2 border rounded ${
      errors[field]
        ? "input-error error-shake"
        : formData[field]
        ? "input-valid"
        : ""
    }`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Affichage de la popup, si elle existe */}
      {popup.message && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ message: "", type: "success" })}
        />
      )}

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Section gauche */}
        <div className="bg-[#091D35] text-white p-8 md:w-1/2">
          <h2 className="text-3xl mb-2 font-bold">Welcome!</h2>
          <p className="mb-4 font-semibold text-[16px]">
            Lorem Ipsum Dolor Sit Amet, Nulla Consectetur Adipiscing Elit Sed.
          </p>
          <p className="text-sm leading-6">
            Nam eleifend velit eget dolor vestibulum ornare...
          </p>
        </div>

        {/* Section droite */}
        <div className="p-8 md:w-1/2 bg-white">
          <h2 className="text-2xl font-bold mb-2 text-[#091D35]">
            Créer un compte
          </h2>
          <p className="text-sm mb-4">Remplissez les champs ci-dessous</p>
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Champ prénom */}
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={getInputClass("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}

            {/* Champ nom */}
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={getInputClass("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}

            {/* Champ email */}
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={getInputClass("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* Champ mot de passe */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={getInputClass("password")}
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={`bi absolute right-3 top-3 cursor-pointer ${
                  showPassword ? "bi-eye-slash" : "bi-eye"
                }`}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            {/* Champ confirmation mot de passe */}
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={getInputClass("confirmPassword")}
              />
              <i
                onClick={() => setShowConfirm(!showConfirm)}
                className={`bi absolute right-3 top-3 cursor-pointer ${
                  showConfirm ? "bi-eye-slash" : "bi-eye"
                }`}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}

            {/* Checkbox */}
            <label className="text-sm flex items-center gap-2">
              <input type="checkbox" /> Send me latest updates
            </label>

            {/* Bouton d'inscription */}
            <button
              type="submit"
              className="w-full bg-[#091D35] text-white py-2 rounded hover:bg-[#0f2a57]"
            >
              CREATE ACCOUNT
            </button>

            {/* Message global */}
            {globalMessage && (
              <p
                className={`text-center mt-2 ${
                  popup.type === "success" ? "success-message" : "text-red-500"
                }`}
              >
                {globalMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
