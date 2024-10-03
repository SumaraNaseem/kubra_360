module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via a CSS class
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
      colors: {
        'custom-yellow': '#FFA600',
        'custom-background-color':'#202020',
        'custom-text-color':'#E63F6D',
        'custom-text-type':'#E1BA22',
        'custon-right-side-bg':'#181818',
        'table-tab-one-color':'#7FDAF9',
        'table-tab-two-color':'#FF7A81',
        'custom-bg-color':'#101215',
        'footer-text-color':'#99A7A7',
        'footer-heading-color':'#A46412',
        'casino-text-color':'#B9B9B9',
        'drop-down-color':'#FlEACF',
        'tab-bg-color':'#2A2E34',
        'active-tab-color':'#FF5CAD',
        'active-tab-text-color':'#B9B9B9',
        'footer-circle':'#191B20',
        'dark-fill':'black',
       
       
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(238,156,74,1) 21%, rgba(255,188,0,1) 100%)',
        'background': 'rgb(238,156,74)',
        'background-images': 'linear-gradient(90deg, rgba(238,156,74,1) 21%, rgba(255,188,0,1) 100%)'
      }
    },
  },
  plugins: [],
}