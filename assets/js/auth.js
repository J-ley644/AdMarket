document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");


    // ==========================
    // LOGIN
    // ==========================

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        try {

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;


            const response = await apiRequest("/auth/login", {

                method: "POST",

                body: JSON.stringify({
                    email,
                    password
                })

            });


            localStorage.setItem(
                "token",
                response.token
            );


            alert("Login successful");

            window.location.href = "dashboard.html";


        } catch(error) {

            alert(error.message);

        }

    });



    // ==========================
    // REGISTER
    // ==========================

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();


        try {

            const name =
                document.getElementById("register-name").value;

            const email =
                document.getElementById("register-email").value;

            const phone =
                document.getElementById("register-phone").value;

            const password =
                document.getElementById("register-password").value;


            const accountType =
                document.querySelector(
                    'input[name="accountType"]:checked'
                ).value;


            const response = await apiRequest("/auth/register", {

                method: "POST",

                body: JSON.stringify({

                    firstName: name.split(" ")[0],

                    lastName:
                        name.split(" ").slice(1).join(" "),

                    email,

                    phone,

                    password,

                    role:
                        accountType === "business"
                            ? "SELLER"
                            : "BUYER"

                })

            });


            alert("Account created successfully");

            window.location.href = "auth.html";


        } catch(error) {

            alert(error.message);

        }

    });

});