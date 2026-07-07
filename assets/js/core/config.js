/**
 * ==========================================
 * AdMarket
 * Module : Core Configuration
 * File   : config.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Config = Object.freeze({

    APP_NAME: "AdMarket",

    VERSION: "1.0.0",

    AUTHOR: "J.LEY",

    STORAGE_KEYS: Object.freeze({

        THEME: "admarket_theme",

        LANGUAGE: "admarket_language",

        SIDEBAR: "admarket_sidebar"

    }),

    BREAKPOINTS: Object.freeze({

        MOBILE: 768,

        TABLET: 992,

        DESKTOP: 1200

    }),

    ANIMATION: Object.freeze({

        LOADER_DELAY: 400,

        TOAST_DURATION: 3500,

        MODAL_DURATION: 250

    }),

    PAGINATION: Object.freeze({

        DEFAULT_PAGE_SIZE: 20

    })

});