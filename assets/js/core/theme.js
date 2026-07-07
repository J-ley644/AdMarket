/**
 * ==========================================
 * AdMarket
 * Module : Theme Manager
 * File   : theme.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Theme = (() => {

    const ATTRIBUTE = "data-theme";

    const DEFAULT_THEME = "light";

    const STORAGE_KEY =
        AdMarket.Config.STORAGE_KEYS.THEME;

    /**
     * Apply Theme
     */
    function apply(theme) {

        document.documentElement.setAttribute(

            ATTRIBUTE,

            theme

        );

    }

    /**
     * Save Theme
     */
    function save(theme) {

        localStorage.setItem(

            STORAGE_KEY,

            theme

        );

    }

    /**
     * Get Saved Theme
     */
    function getSaved() {

        return localStorage.getItem(

            STORAGE_KEY

        );

    }

    /**
     * Detect System Theme
     */
    function getSystemTheme() {

        return window.matchMedia(

            "(prefers-color-scheme: dark)"

        ).matches

            ? "dark"

            : DEFAULT_THEME;

    }

    /**
     * Set Theme
     */
    function set(theme) {

        apply(theme);

        save(theme);

    }

    /**
     * Toggle Theme
     */
    function toggle() {

        const current =

            document.documentElement.getAttribute(

                ATTRIBUTE

            ) || DEFAULT_THEME;

        const next =

            current === "light"

                ? "dark"

                : "light";

        set(next);

    }

    /**
     * Watch Operating System Theme
     */
    function watchSystemTheme() {

        const media = window.matchMedia(

            "(prefers-color-scheme: dark)"

        );

        media.addEventListener(

            "change",

            event => {

                if (!getSaved()) {

                    apply(

                        event.matches

                            ? "dark"

                            : "light"

                    );

                }

            }

        );

    }

    /**
     * Bind Toggle Buttons
     */
    function bindEvents() {

        document

            .querySelectorAll(

                "[data-theme-toggle]"

            )

            .forEach(button => {

                button.addEventListener(

                    "click",

                    toggle

                );

            });

    }

    /**
     * Initialize
     */
    function init() {

        const theme =

            getSaved()

            ||

            getSystemTheme();

        apply(theme);

        bindEvents();

        watchSystemTheme();

    }

    return {

        init,

        set,

        toggle,

        getSaved

    };

})();