module.exports = {
  darkMode: 'class',
  content: ["./*.html", "./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        frappe: { base: '#303446', mantle: '#292c3c', crust: '#232634', text: '#c6d0f5', subtext1: '#b5bfe2', surface0: '#414559', surface1: '#51576d', surface2: '#626880', blue: '#8caaee', lavender: '#babbf1', pink: '#f4b8e4', green: '#a6d189', teal: '#81c8be', yellow: '#e5c890' },
        // latte: {base:'#eff1f5',mantle:'#e6e9ef',crust:'#dce0e8',text:'#1c1c1e',subtext1:'#2c2c2e',surface0:'#ccd0da',surface1:'#bcc0cc',surface2:'#acb0be',blue:'#1e66f5',lavender:'#7287fd',pink:'#ea76cb',green:'#40a02b',teal:'#179299',yellow:'#df8e1d'}
        latte: {
          base: '#24273a', mantle: '#1e2030', crust: '#181926', text: '#cad3f5', subtext1: '#b8c0e0', surface0: '#363a4f', surface1: '#494d64', surface2: '#5b6078', blue: '#8aadf4', lavender: '#b7bdf8', pink: '#f5bde6', green: '#a6da95', teal: '#8bd5ca',
          yellow: '#eed49f'
        }
      },
      borderRadius: { xl2: '1.25rem' }
    }
  },
  plugins: []
};