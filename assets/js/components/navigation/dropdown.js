/**
 * ==========================================
 * AdMarket
 * Module : Dropdown Component
 * File   : dropdown.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Dropdown = (() => {

    const ACTIVE_CLASS = "is-open";

    /**
     * Close all dropdowns
     */
    function closeAll() {

        document
            .querySelectorAll(".dropdown." + ACTIVE_CLASS)
            .forEach(dropdown => {

                dropdown.classList.remove(ACTIVE_CLASS);

            });

    }

    /**
     * Toggle dropdown
     */
    function toggle(dropdown) {

        const isOpen = dropdown.classList.contains(ACTIVE_CLASS);

        closeAll();

        if (!isOpen) {

            dropdown.classList.add(ACTIVE_CLASS);

        }

    }

    /**
     * Bind events
     */
    function bindEvents() {

        document

            .querySelectorAll("[data-dropdown]")

            .forEach(dropdown => {

                const trigger =

                    dropdown.querySelector(

                        "[data-dropdown-toggle]"

                    );

                if (!trigger) {

                    return;

                }

                trigger.addEventListener(

                    "click",

                    event => {

                        event.stopPropagation();

                        toggle(dropdown);

                    }

                );

            });

        document.addEventListener(

            "click",

            closeAll

        );

        document.addEventListener(

            "keydown",

            event => {

                if (event.key === "Escape") {

                    closeAll();

                }

            }

        );

    }

    function init() {

        bindEvents();

    }

    return {

        init,

        closeAll

    };

})();