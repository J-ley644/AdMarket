document.addEventListener("DOMContentLoaded", () => {


    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    const loginTab = document.getElementById("login-tab");
    const registerTab = document.getElementById("register-tab");



    // ==========================
    // LOGIN / REGISTER SWITCH
    // ==========================


    loginTab.addEventListener("click", () => {


        loginForm.hidden = false;

        registerForm.hidden = true;


        loginTab.classList.add("active");

        registerTab.classList.remove("active");


    });





    registerTab.addEventListener("click", () => {


        loginForm.hidden = true;

        registerForm.hidden = false;


        registerTab.classList.add("active");

        loginTab.classList.remove("active");


    });







    // ==========================
    // LOGIN
    // ==========================


    loginForm.addEventListener("submit", async (e) => {


        e.preventDefault();


        try {


            const email =
                document.getElementById("login-email").value.trim();



            const password =
                document.getElementById("login-password").value;




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
                document.getElementById("register-name")
                .value
                .trim();



            const email =
                document.getElementById("register-email")
                .value
                .trim();




            const phone =
                document.getElementById("register-phone")
                .value
                .trim();




            const password =
                document.getElementById("register-password")
                .value;




            const confirmPassword =
                document.getElementById(
                    "register-confirm-password"
                )
                .value;






            if(password !== confirmPassword) {


                throw new Error(
                    "Passwords do not match"
                );


            }







            const accountType =
                document.querySelector(
                    'input[name="accountType"]:checked'
                ).value;








            const response = await apiRequest("/auth/register", {



                method: "POST",



                body: JSON.stringify({



                    firstName:
                        name.split(" ")[0],




                    lastName:
                        name
                        .split(" ")
                        .slice(1)
                        .join(" "),




                    email,



                    phone,



                    password,




                    role:
                        accountType === "business"
                            ? "SELLER"
                            : "BUYER"



                })



            });








            alert(
                "Account created successfully"
            );



            // switch back to login

            registerTab.click();




            registerForm.reset();





        } catch(error) {



            alert(error.message);



        }




    });




});