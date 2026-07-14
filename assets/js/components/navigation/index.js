/**
 * ==========================================
 * AdMarket
 * Module : Component Registry
 * File   : index.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.ComponentRegistry = [

    window.AdMarket.Dropdown,

    window.AdMarket.Tabs,

    window.AdMarket.Accordion,

    window.AdMarket.Pagination,

    window.AdMarket.Tooltip,

    window.AdMarket.Table,

    window.AdMarket.Search,

    window.AdMarket.Filters,

    window.AdMarket.Carousel,

    window.AdMarket.Rating

].filter(Boolean);