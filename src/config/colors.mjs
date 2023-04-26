let darkmode = true

if(window && window.light && window.darkmode == true){
  
}
// setDarkMode(false)
export const blur = 'none'
export const rounded = '10px'
export const red =        darkmode?'#ff9999':'#777777'
export const yellow =     darkmode?'#ffff99':'#aaaaaa'
export const green =      darkmode?'#99ff99':'#ffffff'
export const blue = '#99f'
export const orange = '#fc9'
export const lightBlue = '#9cf'
export const secondary =  darkmode?'#323246':'#ccceff'
export const primary =    darkmode?'#101010':'#909090'
export const background = darkmode?'#222236':'#bcbeef' //#ddddee
export const text =       darkmode?'#ffffff':'#000000'
export const links =      darkmode?'#00ff99':'#0000ff'
export const ascii_other = `
                         
                              ...                                                         
                              .....                   ..                
                              .......               ....              
                             ..........           ......              
                            ...........................               
                          .............................               
                        ..............................                
                       ...............................                
                       ................................               
                        .................................           
                          .............................            
                           ..........................                
                          ........................                   
                        ...........................                    
                      ..............................                  
                     .................................                
                   .............++++++++++.............          ...  
                  ............++@@@@@@@@@@+.............         ....
                 .....++++++++@@@@@@@@@@@@@+............         ....
                 ..+++@@@@@@@@@@@@@@@@@@@@@@+.............        ....
        @@@@@@  +++@@@@@@@@@@@@@@@@@@@@@@@@@+.............       .... 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+.............      ....
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+.........    .....    
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+...............      
 *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+............         
   *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+........               
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+.......     

`

export const asciimobile = 
`
@@@@@@@@@@@@@@@@@@@@       
@@@\´\´\´\´\´\´\´\´\´\´\´\´\´\´\´\´\´       
@@@                  .@@@   
@@@                .@@@'    
@@@              .@@@'    @@@
@@@            .@@@'      @@@
@@@          .@@@'        @@@
@@@        .@@@'          @@@
@@@      .@@@'            @@@
@@@    .@@@'              @@@
     .@@@'                @@@
    @@@'                  @@@
        ,,,,,,,,,,,,,,,,,,@@@
        @@@@@@@@@@@@@@@@@@@@@
`.replaceAll('@','%')

export const asciiDesktop = 
`
@@@@@@@@@@@@@@@@@@@@       
@@@+++++++++++++++++       
@@@                 .@@@   
@@@               .@@@'    
@@@             .@@@'   @@@
@@@           .@@@'     @@@
@@@         .@@@'       @@@
@@@       .@@@'         @@@
@@@     .@@@'           @@@
@@@   .@@@'             @@@
    .@@@'               @@@
   @@@'                 @@@
       =================@@@
       @@@@@@@@@@@@@@@@@@@@
`.replaceAll('@','█').replaceAll("'",'▀').replaceAll('.','▄').replaceAll('=','▄').replaceAll('+','▀').replaceAll(' ','.')

export const icon = '/cat_logo_preenchido.png'
export const wallpaperURL = 'https://i.pinimg.com/originals/8f/c5/3f/8fc53fc5d0336c5eec2921c0033e33fc.png'