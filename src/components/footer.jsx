import icon from "../assets/ecoSmart.svg";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer
        className="flex flex-col items-center justify-around w-full py-12 text-sm 
        bg-gradient-to-t from-green-50 via-green-10 to-white text-green-700"
      >
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src={icon}
            className="h-16 w-16 object-contain"
            alt="EcoSmart logo"
          />
        </div>

        {/* Texte */}
        <p className="mt-4 text-green-800">
          © 2026 EcoSmart. Tous droits réservés.
        </p>

        {/* Liens */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href="#"
            className="font-medium text-green-700 hover:text-green-900 transition"
          >
            Brand Guidelines
          </a>

          <div className="h-4 w-px bg-green-300"></div>

          <a
            href="#"
            className="font-medium text-green-700 hover:text-green-900 transition"
          >
            Trademark Policy
          </a>
        </div>
      </footer>
    </>
  );
}
