module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: '#2C2A95',
          lightBlue: '#E5F7F8',
          orange: '#FE523A',
        },
        secondary: {
          lightBlue: '#36C2CF',
          yellow: '#FFD911',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        hero: 'url(./img/hero-image.png)',
      }),
      maxWidth: {
        card: '265px',
      },
      zIndex: {
        minus: '-1000',
      },
      height: {
        coverlg: '560px',
        covermd: '300px',
        responsive: '90%',
      },
      spacing: {
        responsive: '56.25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
