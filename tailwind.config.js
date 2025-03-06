/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#eef2ff",
					100: "#e0e7ff",
					200: "#c7d2fe",
					300: "#a5b4fc",
					400: "#818cf8",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
					800: "#3730a3",
					900: "#312e81",
					950: "#1e1b4b",
				},
				secondary: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
					950: "#020617",
				},
				success: "#10b981",
				warning: "#f59e0b",
				danger: "#ef4444",
			},
			fontFamily: {
				sans: ["Open Sans", "Roboto", "sans-serif"],
				heading: ["Merriweather", "serif"],
				body: ["Lato", "sans-serif"],
			},
			boxShadow: {
				card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				"card-hover":
					"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
			},
			animation: {
				fade: "fadeIn 0.3s ease-in-out",
				slideUp: "slideUp 0.3s ease-in-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(10px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
			gridTemplateColumns: {
				"2-col": "1fr 1fr",
				resume: "1fr 2fr",
				sidebar: "minmax(250px, 1fr) 3fr",
			},
			gridTemplateRows: {
				resume: "auto 1fr auto",
			},
			gap: {
				resume: "1.5rem",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
