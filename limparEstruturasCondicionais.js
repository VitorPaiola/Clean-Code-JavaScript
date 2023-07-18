function Login(isAdmin, isLogged, isWifi) {

    if (!isWifi) {
        console.log("Só pode entrar aqui se o modo for WIFI");
        return;
    }

    if (!isLogged) {
        console.log("Só pode entrar aqui se estiver logado");
        return;
    }

    if (!isAdmin) {
        console.log("Só pode entrar aqui se for admin");
        return;
    }

    AccessAdminPanel();
}

function AccessAdminPanel() { }

// Recurso útil para limpar variável

let country = "Brazil";

let person = country == "Brazil" ? "Brazilian" : "Other";
