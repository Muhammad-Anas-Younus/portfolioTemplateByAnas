module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       screens: {
        "xsm": {"max": "361px"},
        'sm': { 'max': '640px'},
        // => @media (min-width: 640px) { ... }
  
        'md': { 'max': '767px'},
        // => @media (min-width: 768px) { ... }
        "md2": {"max": "768px"},
        
        "min-md": "768px",
        "min-lg": "1024px",

        'lg': { 'max': '1023px'},
        // => @media (min-width: 1024px) { ... }
  
        'xl': { 'max': '1280px'},
        // => @media (min-width: 1280px) { ... }
  
        '2xl': { 'max': '1536px'},
        // => @media (min-width: 1536px) { ... }
        "1440": {"min": "2160px"},
        "4k": {"min": "3840px"}
      },
      height: {
        "10vh": "10vh",
        "15vh" : "15vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "50vh": "50vh",
        "60": "60vh",
        "90vh": "90vh",
        "85vh": "85vh",
        "150vh": "120vh",
        "160vh": "160vh",
        "10%": "10%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%"
      },
      minHeight: {
        "10vh": "10vh",
        "15vh" : "15vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "50vh": "50vh",
        "60": "60vh",
        "90vh": "90vh",
        "85vh": "85vh",
        "150vh": "120vh",
        "160vh": "160vh",
        "10%": "10%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%"
      },
      width: {
        "10%": "10%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%"
      },
      fontFamily: {
        "poppins": ["Poppins", "san-serif"]
      },
      textColor: {
        "primary": "#E98064",
        "secondary": "#4056A1"
      },
      backgroundColor: {
        "primary": "#E98064",
        "secondary": "#4056A1"
      },
      borderColor: {
        "primary": "#E98064",
        "secondary": "#4056A1"
      },
      placeholderColor: {
        "primary": "#E98064",
        "secondary": "#4056A1"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
