/**
 * ==========================================
 * AdMarket
 * Module : Form Validator
 * File   : validator.js
 * Version: 1.0.0
 * Author : J.LEY
 * ==========================================
 */

"use strict";

window.AdMarket = window.AdMarket || {};

window.AdMarket.Validator = (() => {

    /**
     * Required field
     */
    function required(value) {

        return value.trim().length > 0;

    }

    /**
     * Email
     */
    function email(value) {

        const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return pattern.test(value.trim());

    }

    /**
     * Kenyan Phone Number
     * Supports:
     * +254712345678
     * 254712345678
     * 0712345678
     */
    function phone(value) {

        const pattern =
            /^(\+254|254|0)[17]\d{8}$/;

        return pattern.test(value.trim());

    }

    /**
     * Minimum Length
     */
    function minLength(value, length) {

        return value.trim().length >= length;

    }

    /**
     * Maximum Length
     */
    function maxLength(value, length) {

        return value.trim().length <= length;

    }

    /**
     * Password Strength
     */
    function passwordStrength(password) {

        return {

            length:

                password.length >= 8,

            uppercase:

                /[A-Z]/.test(password),

            lowercase:

                /[a-z]/.test(password),

            number:

                /\d/.test(password),

            special:

                /[!@#$%^&*(),.?":{}|<>]/.test(password)

        };

    }

    /**
     * Password Valid
     */
    function password(password) {

        const strength =
            passwordStrength(password);

        return Object
            .values(strength)
            .every(Boolean);

    }

    /**
     * Password Match
     */
    function passwordsMatch(password, confirm) {

        return password === confirm;

    }

    /**
     * Number
     */
    function number(value) {

        return !isNaN(value);

    }

    /**
     * Positive Number
     */
    function positiveNumber(value) {

        return Number(value) > 0;

    }

    /**
     * URL
     */
    function url(value) {

        try {

            new URL(value);

            return true;

        } catch {

            return false;

        }

    }

    /**
     * File Size
     */
    function fileSize(file, maxSizeMB = 5) {

        if (!file) {

            return false;

        }

        return file.size <=
            maxSizeMB * 1024 * 1024;

    }

    /**
     * Allowed Image Types
     */
    function image(file) {

        if (!file) {

            return false;

        }

        const allowed = [

            "image/jpeg",

            "image/png",

            "image/webp"

        ];

        return allowed.includes(file.type);

    }

    return {

        required,

        email,

        phone,

        minLength,

        maxLength,

        password,

        passwordStrength,

        passwordsMatch,

        number,

        positiveNumber,

        url,

        fileSize,

        image

    };

})();