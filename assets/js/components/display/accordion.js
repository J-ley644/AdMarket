/**
 * ==========================================
 * AdMarket
 * Module : Accordion Component
 * File   : accordion.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Accordion = (() => {

    const ACTIVE_CLASS = "is-open";

    function toggle(item) {

        const content = item.querySelector(

            "[data-accordion-content]"

        );

        const button = item.querySelector(

            "[data-accordion-button]"

        );

        const isOpen = item.classList.contains(

            ACTIVE_CLASS

        );

        item.classList.toggle(

            ACTIVE_CLASS,

            !isOpen

        );

        if (content) {

            content.hidden = isOpen;

        }

        if (button) {

            button.setAttribute(

                "aria-expanded",

                String(!isOpen)

            );

        }

    }

    function bindEvents() {

        document

            .querySelectorAll(

                "[data-accordion-item]"

            )

            .forEach(item => {

                const button = item.querySelector(

                    "[data-accordion-button]"

                );

                if (!button) {

                    return;

                }

                button.addEventListener(

                    "click",

                    () => toggle(item)

                );

            });

    }

    function init() {

        bindEvents();

    }

    return {

        init

    };

})();