# AdMarket Copilot Instructions

## Project

AdMarket is a production-quality e-commerce marketplace built from scratch.

Technology Stack:

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Express.js
- PostgreSQL
- Prisma ORM

Never introduce frameworks unless explicitly requested.

---

# Core Principles

- Production-quality code only.
- Never break existing functionality.
- Extend before replacing.
- Keep code modular.
- Prefer reusable components.
- Prioritize readability over cleverness.

---

# Frontend Architecture

assets/
    css/
        amui/
            variables.css
            reset.css
            typography.css
            buttons.css
            forms.css
            badges.css
            cards.css
            layout.css
            utilities.css
            components.css

        landing.css
        auth.css
        dashboard.css
        marketplace.css
        app.css

---

# AMUI Design System

AMUI (AdMarket UI) is the official design system.

Reusable classes MUST begin with:

am-

Examples:

am-btn

am-card

am-badge

am-input

am-navbar

am-container

am-grid

am-section

Do not introduce generic reusable classes like:

btn

card

badge

unless migrating legacy code.

---

# CSS Rules

Each file has ONE responsibility.

variables.css
Design tokens only.

reset.css
Reset only.

typography.css
Fonts and text.

buttons.css
Buttons only.

forms.css
Inputs only.

cards.css
Cards only.

badges.css
Badges only.

layout.css
Containers, Grid and Flex.

utilities.css
Spacing utilities.

components.css
Reusable UI components.

landing.css
Landing page only.

auth.css
Authentication pages only.

dashboard.css
Dashboard pages only.

marketplace.css
Marketplace page only.

Never duplicate CSS.

Always reuse AMUI.

---

# HTML Rules

Use semantic HTML5.

Prefer reusable components.

Never use inline CSS.

Never use inline JavaScript.

Always include alt attributes.

Maintain accessibility.

---

# JavaScript Rules

Use ES6 modules.

Prefer const.

Avoid globals.

Keep functions small.

Separate UI logic from business logic.

Comment only where necessary.

---

# Backend Rules

Use Express.

Use Prisma.

Use PostgreSQL.

Use controllers.

Use services.

Use middleware.

Keep business logic out of routes.

---

# Git Workflow

One feature at a time.

One module at a time.

Never modify unrelated files.

Assume every commit will be reviewed.

---

# AI Behaviour

Before making large changes:

1. Analyze the current project.

2. Explain the proposed approach.

3. Preserve functionality.

4. Minimize breaking changes.

5. Follow the AMUI architecture.

If unsure, ask before changing.

---

# Design Language

Modern SaaS.

Minimal.

Premium.

Rounded corners.

Soft shadows.

Glassmorphism where appropriate.

Smooth animations.

Responsive-first.

Consistent spacing.

Professional typography.

---

# Goal

Build a scalable, maintainable marketplace suitable for production deployment.