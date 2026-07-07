/**
 * ==========================================
 * AdMarket
 * Module : Modal Manager
 * File   : modal.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Modal = (() => {

    let activeModal = null;

    /**
     * Open a modal
     * @param {string} modalId
     */
    function open(modalId) {

        const modal = document.getElementById(modalId);

        if (!modal) {

            console.warn(`Modal "${modalId}" not found.`);

            return;

        }

        closeAll();

        modal.classList.add("is-active");

        document.body.classList.add("modal-open");

        activeModal = modal;

    }

    /**
     * Close active modal
     */
    function close() {

        if (!activeModal) {

            return;

        }

        activeModal.classList.remove("is-active");

        document.body.classList.remove("modal-open");

        activeModal = null;

    }

    /**
     * Close every modal
     */
    function closeAll() {

        document
            .querySelectorAll(".modal.is-active")
            .forEach(modal => {

                modal.classList.remove("is-active");

            });

        document.body.classList.remove("modal-open");

        activeModal = null;

    }

    /**
     * Escape key support
     */
    function handleEscape(event) {

        if (event.key === "Escape") {

            close();

        }

    }

    /**
     * Click outside modal
     */
    function handleOverlayClick(event) {

        if (event.target.classList.contains("modal")) {

            close();

        }

    }

    /**
     * Bind buttons
     */
    function bindEvents() {

        document

            .querySelectorAll("[data-modal-open]")

            .forEach(button => {

                button.addEventListener("click", () => {

                    open(button.dataset.modalOpen);

                });

            });

        document

            .querySelectorAll("[data-modal-close]")

            .forEach(button => {

                button.addEventListener("click", close);

            });

        document

            .querySelectorAll(".modal")

            .forEach(modal => {

                modal.addEventListener(

                    "click",

                    handleOverlayClick

                );

            });

        document.addEventListener(

            "keydown",

            handleEscape

        );

    }

    function init() {

        bindEvents();

    }

    return {

        init,

        open,

        close,

        closeAll

    };

})();