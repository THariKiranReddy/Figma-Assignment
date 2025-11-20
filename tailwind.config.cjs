/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontSize:{
        "s":"200px",
       },
       width:{
        "wfo":"169px",
        "imw":"26px",
        "cw":"241px",
        "ig":"48px",
        "fw":"798px",
        "ew":"802px",
        "pw":"650px",
        "bw":"217px",
        "fw":"70px"
       },
       height:{
        "ge":"7673px",
        "foh":"34px",
        "imh":"26px",
        "ng":"48px",
        "fh":"143px",
        "ph":"56px",
        "bh":"60px",
       },
       fontWeight:{
        "fw":"900",
        "tw":"400",
        "pn":"500"
       },
       margin:{
        "tp":"57px",
        "tx":"64px",
        "tm":"68px",
        "tl":"39px",
        "kl":"59px",
        "ft":"252px",
       },
       colors:{
        "cl":"rgb(27,35,32)",
       },
       fontFamily:{
        "fm":["Indie Flower","cursive"],
        "flora":["Inter",'sans-serif'],
       },
       fontSize:{
        "fs":"24px",
        "ms":"100px",
        "bs":"28px"
       },
       opacity:{
        "po":"75%",
       },
       backgroundPosition:{
              'top-40': 'center -17rem',
       },
    },
  },
  plugins: [],
}

