// C:/Users/Dell/Desktop/school/Swastik_hms/tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan these files for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',     // Tailwind variable: text-primary, bg-primary
        secondary: '#F59E0B',
        accent: '#10B981',
      },
      spacing: {
        'section': '4rem',      // Tailwind variable: p-section, mt-section
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontSize: {
        xxs: '2rem',          // Tailwind variable: text-xxs
        hero: '3rem',           // Tailwind variable: text-hero
      },
      borderRadius: {
        xl2: '1.5rem',          // Tailwind variable: rounded-xl2
      },
    },
  },
  plugins: [],
};
