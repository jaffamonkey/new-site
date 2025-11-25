module.exports = {
  darkMode: 'class',

  safelist: [
    // Allow bg/text/border classes for Latte, Frappe, Macchiato (light mode)
    { pattern: /(bg|text|border)-(latte|frappe)-(.*)/ },

    // Allow the same classes in dark mode
    { pattern: /dark:(bg|text|border)-(latte|frappe)-(.*)/ }
  ],

  content: ["./*.html", "./**/*.html", "./**/*.js"],

  theme: {
    extend: {
      colors: {
        frappe: {
          base: '#303446', mantle: '#292c3c', crust: '#232634',
          text: '#c6d0f5', subtext1: '#b5bfe2',
          surface0: '#414559', surface1: '#51576d', surface2: '#626880',
          blue: '#8caaee', lavender: '#babbf1', pink: '#f4b8e4',
          green: '#a6d189', teal: '#81c8be', yellow: '#e5c890'
        },

        latte: {
          base: '#303446', mantle: '#292c3c', crust: '#232634',
          text: '#c6d0f5', subtext1: '#b5bfe2',
          surface0: '#414559', surface1: '#51576d', surface2: '#626880',
          blue: '#8caaee', lavender: '#babbf1', pink: '#f4b8e4',
          green: '#a6d189', teal: '#81c8be', yellow: '#e5c890'
        }
      },

      borderRadius: { xl2: '1.25rem' }
    }
  },

  plugins: []
};

// latte: { base: '#eff1f5', mantle: '#e6e9ef', crust: '#dce0e8', text: '#1c1c1e', subtext1: '#2c2c2e', surface0: '#ccd0da', surface1: '#bcc0cc', surface2: '#acb0be', blue: '#1e66f5', lavender: '#7287fd', pink: '#ea76cb', green: '#40a02b', teal: '#179299', yellow: '#df8e1d' },
// macchiato: { base: "#24273a", mantle: "#1e2030", crust: "#181926", text: "#cad3f5", subtext1: "#b8c0e0", subtext0: "#a5adcb", overlay2: "#939ab7", overlay1: "#8087a2", overlay0: "#6e738d", surface2: "#5b6078", surface1: "#494d64", surface0: "#363a4f", lavender: "#b7bdf8", blue: "#8aadf4", sapphire: "#7dc4e4", sky: "#91d7e3", teal: "#8bd5ca", green: "#a6da95", yellow: "#eed49f", peach: "#f5a97f", maroon: "#ee99a0", red: "#ed8796", mauve: "#c6a0f6", pink: "#f5bde6", flamingo: "#f0c6c6", rosewater: "#f4dbd6" }