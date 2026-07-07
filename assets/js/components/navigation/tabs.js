/**
 * ==========================================
 * AdMarket
 * Module : Tabs Component
 * File   : tabs.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Tabs = (() => {

    const ACTIVE_TAB = "is-active";

    function activate(tabGroup, tabButton) {

        const targetId = tabButton.dataset.tab;

        if (!targetId) {

            return;

        }

        const buttons = tabGroup.querySelectorAll("[data-tab]");

        const panels = tabGroup.querySelectorAll("[data-tab-panel]");

        buttons.forEach(button => {

            button.classList.remove(ACTIVE_TAB);

            button.setAttribute("aria-selected", "false");

        });

        panels.forEach(panel => {

            panel.classList.remove(ACTIVE_TAB);

            panel.hidden = true;

        });

        tabButton.classList.add(ACTIVE_TAB);

        tabButton.setAttribute("aria-selected", "true");

        const targetPanel = tabGroup.querySelector(

            `[data-tab-panel="${targetId}"]`

        );

        if (targetPanel) {

            targetPanel.classList.add(ACTIVE_TAB);

            targetPanel.hidden = false;

        }

    }

    function bindEvents() {

        document

            .querySelectorAll("[data-tabs]")

            .forEach(group => {

                group

                    .querySelectorAll("[data-tab]")

                    .forEach(button => {

                        button.addEventListener(

                            "click",

                            () => activate(group, button)

                        );

                    });

                const firstTab =

                    group.querySelector("[data-tab]");

                if (firstTab) {

                    activate(group, firstTab);

                }

            });

    }

    function init() {

        bindEvents();

    }

    return {

        init

    };

})();