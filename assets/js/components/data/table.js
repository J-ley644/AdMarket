/**
 * ==========================================
 * AdMarket
 * Module : Data Table
 * File   : table.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Table = (() => {

    const SORT_ASC = "asc";

    const SORT_DESC = "desc";

    /**
     * Sort table rows
     */
    function sort(table, columnIndex, direction) {

        const tbody = table.tBodies[0];

        if (!tbody) return;

        const rows = Array.from(tbody.rows);

        rows.sort((a, b) => {

            const first = a.cells[columnIndex]?.textContent.trim() || "";

            const second = b.cells[columnIndex]?.textContent.trim() || "";

            const firstNumber = Number(first);

            const secondNumber = Number(second);

            const bothNumeric =
                !Number.isNaN(firstNumber) &&
                !Number.isNaN(secondNumber);

            if (bothNumeric) {

                return direction === SORT_ASC
                    ? firstNumber - secondNumber
                    : secondNumber - firstNumber;

            }

            return direction === SORT_ASC
                ? first.localeCompare(second)
                : second.localeCompare(first);

        });

        rows.forEach(row => tbody.appendChild(row));

    }

    /**
     * Toggle Sort
     */
    function toggle(header) {

        const table = header.closest("table");

        if (!table) return;

        const headers = Array.from(header.parentNode.children);

        const column = headers.indexOf(header);

        const current =
            header.dataset.sort || SORT_DESC;

        headers.forEach(th => {

            th.removeAttribute("data-sort");

        });

        const next =
            current === SORT_ASC
                ? SORT_DESC
                : SORT_ASC;

        header.dataset.sort = next;

        sort(table, column, next);

    }

    /**
     * Select All
     */
    function toggleSelectAll(masterCheckbox) {

        const table = masterCheckbox.closest("table");

        if (!table) return;

        table

            .querySelectorAll(

                "tbody input[type='checkbox']"

            )

            .forEach(box => {

                box.checked = masterCheckbox.checked;

            });

    }

    /**
     * Bind Events
     */
    function bindEvents() {

        document

            .querySelectorAll(

                "[data-sortable]"

            )

            .forEach(header => {

                header.addEventListener(

                    "click",

                    () => toggle(header)

                );

            });

        document

            .querySelectorAll(

                "[data-select-all]"

            )

            .forEach(master => {

                master.addEventListener(

                    "change",

                    () => toggleSelectAll(master)

                );

            });

    }

    function init() {

        bindEvents();

    }

    return {

        init,

        sort

    };

})();