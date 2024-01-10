import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import removeConsole from "vite-plugin-remove-console";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType:'prompt',
  includeAssets:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Gem Notes",
    short_name:"GNotes",
    description:"Gem-Notes is a note taking webapp where you can store your notes easily, edit them delete them also you can mark them as completed and moreover with various categories. Enjoy your stay in here and write some cool geminising notes",
    icons:[{
      src: '/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/maskable_icon.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), removeConsole(), VitePWA(manifestForPlugin)],
})
