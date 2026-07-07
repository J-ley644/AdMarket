/**
 * ==========================================
 * AdMarket
 * Module : UI
 * File   : ui.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.UI = (() => {

    const selectors = {

        sidebar: "#sidebar",

        overlay: "#sidebar-overlay",

        menuButton: "[data-menu-toggle]",

        dropdownButton: "[data-dropdown-toggle]"

    };

    let sidebar;

    let overlay;

    function cacheDom() {

        sidebar = document.querySelector(selectors.sidebar);

        overlay = document.querySelector(selectors.overlay);

    }

    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("is-open");

        overlay?.classList.add("is-visible");

        document.body.classList.add("sidebar-open");

    }

    function closeSidebar() {

        if (!sidebar) return;

        sidebar.classList.remove("is-open");

        overlay?.classList.remove("is-visible");

        document.body.classList.remove("sidebar-open");

    }

    function toggleSidebar() {

        if (!sidebar) return;

        sidebar.classList.contains("is-open")
            ? closeSidebar()
            : openSidebar();

    }

    function bindEvents() {

        document
            .querySelectorAll(selectors.menuButton)
            .forEach(button => {

                button.addEventListener("click", toggleSidebar);

            });

        overlay?.addEventListener("click", closeSidebar);

        window.addEventListener("resize", () => {

            if (
                window.innerWidth >
                AdMarket.Config.BREAKPOINTS.TABLET
            ) {

                closeSidebar();

            }

        });

    }

    function init() {

        cacheDom();

        bindEvents();

    }

    return {

        init,

        openSidebar,

        closeSidebar,

        toggleSidebar

    };

})();