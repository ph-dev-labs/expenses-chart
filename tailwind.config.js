/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
      colors: {
        'primary-red': "hsl(10, 79%, 65%)",
        'primary-cyan': "hsl(186, 34%, 60%)",
        "Dark-brown": "hsl(25, 47%, 15%)", 
        "Medium-brown": "hsl(28, 10%, 53%)",
        "Cream": "hsl(27, 66%, 92%)",
        "Very-pale-orange": "hsl(33, 100%, 98%)"

      },
      fontSize: {
        "fs": "18px",
      }
    
  },
  plugins: [],
}
