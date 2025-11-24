module.exports = {
  darkMode: 'class',
  safelist: [
    { pattern: /(bg|text|border)-(latte|frappe|macchiato)-(.*)/ },
    { pattern: /dark:/ },
    { pattern: /dark:(bg|text|border)-(latte|frappe|macchiato)-(.*)/ },
  ],
  content: ["./*.html", "./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        frappe: { base: '#303446', mantle: '#292c3c', crust: '#232634', text: '#c6d0f5', subtext1: '#b5bfe2', surface0: '#414559', surface1: '#51576d', surface2: '#626880', blue: '#8caaee', lavender: '#babbf1', pink: '#f4b8e4', green: '#a6d189', teal: '#81c8be', yellow: '#e5c890' },
        latte: { base: '#acb0be', mantle: '#e6e9ef', crust: '#dce0e8', text: '#1c1c1e', subtext1: '#2c2c2e', surface0: '#ccd0da', surface1: '#bcc0cc', surface2: '#acb0be', blue: '#1e66f5', lavender: '#7287fd', pink: '#ea76cb', green: '#40a02b', teal: '#179299', yellow: '#df8e1d' }
      },
      borderRadius: { xl2: '1.25rem' }
    }
  },
  plugins: []
};