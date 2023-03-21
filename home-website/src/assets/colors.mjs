let lightMode = false

if(window && window.light && window.light == true){
  lightMode = true
}

export const red = '#f99'
export const yellow = '#ff9'
export const green = '#9f9'
export const secondary = lightMode?'#e9e9e9':'#323232'
export const primary = '#101010'
export const background = '#ddddee'
export const text = lightMode?'#000':'#fff'
export const links = '#77f'
export const ascii = 
`

   ▄█   ▄█▄    ▄████████ ███    █▄   ▄████████    ▄████████  ▄██████▄  
  ███ ▄███▀   ███    ███ ███    ███ ███    ███   ███    ███ ███    ███ 
  ███▐██▀     ███    ███ ███    ███ ███    █▀    ███    █▀  ███    ███ 
 ▄█████▀     ▄███▄▄▄▄██▀ ███    ███ ███         ▄███▄▄▄     ███    ███ 
▀▀█████▄    ▀▀███▀▀▀▀▀   ███    ███ ███        ▀▀███▀▀▀     ███    ███ 
  ███▐██▄   ▀███████████ ███    ███ ███    █▄    ███    █▄  ███    ███ 
  ███ ▀███▄   ███    ███ ███    ███ ███    ███   ███    ███ ███    ███ 
  ███   ▀█▀   ███    ███ ████████▀  ████████▀    ██████████  ▀██████▀  
  ▀           ███    ███                                               

`

export const icon = 'https://raw.githubusercontent.com/Kruceo/KruceoMain/main/docs/public/img/logo.png'
export const wallpaperURL = 'https://i.pinimg.com/originals/8f/c5/3f/8fc53fc5d0336c5eec2921c0033e33fc.png'