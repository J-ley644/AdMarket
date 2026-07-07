/**
 * ==========================================
 * AdMarket
 * Module : Loader Manager
 * File   : loader.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Loader = (() => {

    const loaderSelector = "#loader";

    let loaderElement = null;

    /**
     * Cache DOM
     */
    function cacheDom() {

        loaderElement = document.querySelector(loaderSelector);

    }

    /**
     * Show Loader
     */
    function show() {

        if (!loaderElement) return;

        loaderElement.classList.add("is-active");

        document.body.classList.add("loading");

    }

    /**
     * Hide Loader
     */
    function hide() {

        if (!loaderElement) return;

        loaderElement.classList.remove("is-active");

        document.body.classList.remove("loading");

    }

    /**
     * Toggle Loader
     */
    function toggle() {

        if (!loaderElement) return;

        loaderElement.classList.contains("is-active")
            ? hide()
            : show();

    }

    /**
     * Show Loader For Duration
     * @param {number} duration
     */
    function showFor(duration = AdMarket.Config.ANIMATION.LOADER_DELAY) {

        show();

        setTimeout(hide, duration);

    }

    /**
     * Button Loading
     * @param {HTMLElement} button
     */
    function startButton(button) {

        if (!button) return;

        button.disabled = true;

        button.dataset.originalText = button.innerHTML;

        button.innerHTML = "Loading...";
    }

    /**
     * Stop Button Loading
     * @param {HTMLElement} button
     */
    function stopButton(button) {

        if (!button) return;

        button.disabled = false;

        button.innerHTML =

            button.dataset.originalText || "Submit";

    }

    /**
     * Execute Async Function With Loader
     * @param {Function} callback
     */
    async function run(callback) {

        try {

            show();

            await callback();

        } finally {

            hide();

        }

    }

    /**
     * Initialize
     */
    function init() {

        cacheDom();

    }

    return {

        init,

        show,

        hide,

        toggle,

        showFor,

        startButton,

        stopButton,

        run

    };

})();