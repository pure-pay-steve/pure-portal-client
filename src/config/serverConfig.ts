export const serverConfig = {
    server: window.location.host.includes('localhost') ? 'https://localhost:7088' :
        "https://pure-portal-services.azurewebsites.net"
}