import { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
    appId: "io.ionic.starter",
    appName: "ionic-host",
    webDir: "build",
    bundledWebRuntime: false,
    server: {
        url: "http://localhost:3000",
    },
}

export default config
