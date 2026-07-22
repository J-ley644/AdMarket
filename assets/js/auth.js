document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ELEMENTS
    // ==========================

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    const loginTab = document.getElementById("login-tab");
    const registerTab = document.getElementById("register-tab");

    // ==========================
    // TAB SWITCHING
    // ==========================

    function showLogin() {

        loginForm.hidden = false;
        registerForm.hidden = true;

        loginTab.classList.add("active");
        registerTab.classList.remove("active");

    }

    function showRegister() {

        loginForm.hidden = true;
        registerForm.hidden = false;

        registerTab.classList.add("active");
        loginTab.classList.remove("active");

    }

    loginTab.addEventListener("click", showLogin);
    registerTab.addEventListener("click", showRegister);

    // Default View
    showLogin();

    // ==========================
    // LOGIN
    // ==========================

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        try {

            const email = document
                .getElementById("login-email")
                .value
                .trim();

            const password = document
                .getElementById("login-password")
                .value;

            const response = await apiRequest("/auth/login", {

                method: "POST",

                body: JSON.stringify({
                    email,
                    password
                })

            });

            localStorage.setItem("token", response.token);

            if (response.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.user)
                );
            }

            alert("Login successful!");

            window.location.href = "index.html";

        } catch (error) {

            alert(error.message);

        }

    });

    // ==========================
    // REGISTER
    // ==========================

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        try {

            const fullName = document
                .getElementById("register-name")
                .value
                .trim();

            const email = document
                .getElementById("register-email")
                .value
                .trim();

            const phone = document
                .getElementById("register-phone")
                .value
                .trim();

            const password = document
                .getElementById("register-password")
                .value;

            const confirmPassword = document
                .getElementById("register-confirm-password")
                .value;

            if (password !== confirmPassword) {
                throw new Error("Passwords do not match.");
            }

            const names = fullName.split(" ");

            const firstName = names.shift();

            const lastName = names.join(" ") || "-";

            const accountType = document.querySelector(
                'input[name="accountType"]:checked'
            ).value;

            await apiRequest("/auth/register", {

                method: "POST",

                body: JSON.stringify({

                    firstName,
                    lastName,
                    email,
                    phone,
                    password,

                    role:
                        accountType === "business"
                            ? "SELLER"
                            : "BUYER"

                })

            });

            alert("Registration successful! Please login.");

            registerForm.reset();

            showLogin();

        } catch (error) {

            alert(error.message);

        }

    });

});