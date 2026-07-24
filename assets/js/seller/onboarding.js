/**
 * ==========================================
 * AdMarket
 * Seller Onboarding
 * ==========================================
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("seller-onboarding-form");

    if (!form) {

        return;

    }

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        try {

            const businessData = {

                name: document
                    .getElementById("business-name")
                    .value
                    .trim(),

                description: document
                    .getElementById("business-description")
                    .value
                    .trim(),

                email: document
                    .getElementById("business-email")
                    .value
                    .trim(),

                phone: document
                    .getElementById("business-phone")
                    .value
                    .trim(),

                website: document
                    .getElementById("business-website")
                    .value
                    .trim(),

                country: document
                    .getElementById("business-country")
                    .value
                    .trim(),

                county: document
                    .getElementById("business-county")
                    .value
                    .trim(),

                city: document
                    .getElementById("business-city")
                    .value
                    .trim(),

                address: document
                    .getElementById("business-address")
                    .value
                    .trim()

            };

            const response = await apiRequest(

                "/businesses",

                {

                    method: "POST",

                    body: JSON.stringify(businessData)

                }

            );

            alert(response.message);

            window.location.href =
                "dashboard.html";

        }

        catch (error) {

            alert(error.message);

        }

    });

});