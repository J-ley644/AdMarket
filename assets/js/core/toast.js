/**
 * ==========================================
 * AdMarket
 * Module : Toast Manager
 * File   : toast.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Toast = (() => {

    let container = null;

    /**
     * Create Toast Container
     */
    function createContainer() {

        container = document.createElement("div");

        container.id = "toast-container";

        container.className = "toast-container";

        container.setAttribute("aria-live", "polite");

        document.body.appendChild(container);

    }

    /**
     * Get Container
     */
    function getContainer() {

        if (!container) {

            container = document.getElementById("toast-container");

        }

        if (!container) {

            createContainer();

        }

        return container;

    }

    /**
     * Show Toast
     */
    function show({

        message = "",

        type = "info",

        duration = AdMarket.Config.ANIMATION.TOAST_DURATION

    } = {}) {

        const toast = document.createElement("div");

        toast.className = `toast toast-${type}`;

        const icon = {

            success: "✔",

            error: "✖",

            warning: "⚠",

            info: "ℹ"

        };

        toast.innerHTML = `

            <div class="toast-icon">

                ${icon[type] || "ℹ"}

            </div>

            <div class="toast-message">

                ${message}

            </div>

            <button
                class="toast-close"
                aria-label="Close">

                ×

            </button>

        `;

        getContainer().appendChild(toast);

        requestAnimationFrame(() => {

            toast.classList.add("show");

        });

        toast

            .querySelector(".toast-close")

            .addEventListener("click", () => {

                remove(toast);

            });

        if (duration > 0) {

            setTimeout(() => {

                remove(toast);

            }, duration);

        }

    }

    /**
     * Remove Toast
     */
    function remove(toast) {

        if (!toast) return;

        toast.classList.remove("show");

        toast.classList.add("hide");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }

    /**
     * Shortcuts
     */

    function success(message) {

        show({

            message,

            type: "success"

        });

    }

    function error(message) {

        show({

            message,

            type: "error"

        });

    }

    function warning(message) {

        show({

            message,

            type: "warning"

        });

    }

    function info(message) {

        show({

            message,

            type: "info"

        });

    }

    function init() {

        getContainer();

    }

    return {

        init,

        show,

        success,

        error,

        warning,

        info

    };

})();