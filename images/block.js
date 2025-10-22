document.addEventListener("DOMContentLoaded", () => {
    const url = window.location.href;
    const allowed1 = url.includes("http://127.0.0.1:5501");
    const allowed2 = url.includes("b2b-dmcp-plus");
    const allowed3 = url.includes("sonnyglobe");
    if (allowed1 || allowed2 || allowed3) {
        // ✅ Authorized: show the body
        document.body.style.display = "block";
    } else {
        // 🚫 Not authorized: show blocked message
        document.body.innerHTML = "";

        const msg = document.createElement("div");
        msg.id = "blockedMsg";
        msg.textContent = "This page is for authorized URL only";

        Object.assign(msg.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fdd",
            color: "#900",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textAlign: "center",
            zIndex: "9999"
        });

        document.body.appendChild(msg);
        document.body.style.display = "flex";
    }
});
