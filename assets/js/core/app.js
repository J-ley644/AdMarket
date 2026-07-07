/**
 * ==========================================
 * AdMarket
 * Module : Application Bootstrap
 * File   : app.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.App = (() => {

    /**
     * Core Modules
     */
    const modules = [

        "Theme",

        "UI",

        "Modal",

        "Loader",

        "Toast"

    ];

    /**
     * Initialize Core Modules
     */
    function initializeModules() {

        modules.forEach(moduleName => {

            const module =

                window.AdMarket[moduleName];

            if (

                module &&

                typeof module.init === "function"

            ) {

                try {

                    module.init();

                }

                catch (error) {

                    console.error(

                        `[AdMarket] Failed to initialize ${moduleName}`,

                        error

                    );

                }

            }

        });

    }

    /**
     * Initialize Page Module
     *
     * Example:
     *
     * <body data-page="buyer">
     *
     */

    function initializePageModule() {

        const page =

            document.body.dataset.page;

        if (!page) {

            return;

        }

        const pageModules = {

            buyer: window.AdMarket.Buyer,

            seller: window.AdMarket.Seller,

            admin: window.AdMarket.Admin,

            marketplace: window.AdMarket.Marketplace

        };

        const module = pageModules[page];

        if (

            module &&

            typeof module.init === "function"

        ) {

            try {

                module.init();

            }

            catch (error) {

                console.error(

                    `[AdMarket] Failed to initialize page module: ${page}`,

                    error

                );

            }

        }

    }

    /**
     * Application Start
     */
    function init() {

        initializeModules();

        initializePageModule();

        console.info(

            `%c${AdMarket.Config.APP_NAME} v${AdMarket.Config.VERSION} Ready`,

            "color:#16a34a;font-weight:bold;"

        );

    }

    return {

        init

    };

})();

document.addEventListener(

    "DOMContentLoaded",

    () => {

        window.AdMarket.App.init();

    }

);