# Procrastinaut

Procrastinaut is a minimalist productivity web app prototype for college students. It is designed to help students organize classes, assessments, to-do items, breaks, and focus sessions.

## Milestone status

This repository currently contains **Milestone 1 (foundation only)**: a static, responsive interface with section navigation and placeholder views.

### What is implemented now

- Semantic HTML5 layout with a sidebar and main dashboard workspace
- Navigation for Dashboard, My Classes, Assessments, To-do List, Breaks, and Focus Room
- Dashboard content blocks (welcome area, current date, overview cards, getting-started panel, quick-access links)
- Vanilla JavaScript for:
  - dynamic current date display
  - section switching between dashboard and placeholder views
  - mobile sidebar toggle behavior
- Responsive, minimalist CSS with keyboard focus visibility and reduced-motion support

## Technology stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or external libraries)

## Repository structure

```text
procrastinaut/
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## Run locally

1. Clone the repository.
2. Open `/home/runner/work/procrastinaut/procrastinaut/index.html` in any modern web browser.
3. Use the sidebar (or mobile menu button) to navigate between sections.

## Planned features (future milestones)

- Class management
- Assessment and deadline tracking
- Task management workflows
- Break scheduling support
- Focus session tools
- localStorage-based persistence for MVP data

## Current limitations

- No persistent data storage yet
- No task/class/assessment creation flows yet
- Section pages outside Dashboard are placeholders
- No timers, reminders, notifications, or analytics yet

## Data privacy approach for MVP

The MVP is planned to store user productivity data in the browser using `localStorage`, keeping data on the user’s own device by default. No backend data collection is planned for the MVP stage.

## Deployment plan

GitHub Pages deployment is planned for a future milestone. Deployment is **not** enabled in this milestone.
