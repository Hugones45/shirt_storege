import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color: '#1e90ff',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: "./threejs.png"
})

export default state