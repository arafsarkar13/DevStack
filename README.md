# Dev Stack

**Dev Stack** is a small React + TypeScript web app that helps developers browse frontend, backend, database, language, styling, and DevOps tools side by side, then build their own "ideal stack" by picking the ones they want. Selected technologies are collected in a live sidebar where they can be reviewed and removed.

## Technology Used

- React (with TypeScript)
- Vite (build tool)
- Tailwind CSS + DaisyUI (styling)
- React-Toastify (alerts/notifications)
- JSON (technology data, loaded with `fetch`)

## Features

1. **Build-your-own stack** — Browse 12 technologies as cards, click "Add to Stack" to collect the ones you like in a dedicated "Your Stack" sidebar, and remove any item (or all of them) at any time.
2. **Duplicate protection** — Each card can only be added once. The button disables itself and reads "✓ Added to Stack" after selection, and trying to add it again shows a warning toast.
3. **Fully responsive layout** — The navbar collapses into a hamburger menu on mobile, and the technology grid reflows from 3 columns (desktop) to 2 (tablet) to 1 (mobile), all styled with a single shared gradient theme (orange → pink → violet).

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal.

## Project Structure

```
src/
  components/   → Navbar, Hero, TechGrid, TechCard, YourStack, Footer
  types/        → Technology TypeScript type
  App.tsx       → holds the "stack" state and passes it down
public/
  data/technologies.json → the technology data, fetched at runtime
```

---

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like markup directly inside our JavaScript/TypeScript files. Instead of manually calling functions to build the UI, we can write something that looks like `<div>Hello</div>` and React converts it into actual DOM elements behind the scenes. It's used because it makes components much easier to read and write — you can see the structure of the UI right next to the logic that drives it.

**2. What is the difference between props and state?**
Props are values passed *into* a component from its parent — they're read-only from the child's point of view, kind of like function arguments. State is data that a component manages *itself* and can change over time (usually because of user interaction). In this project, `technology` passed into `TechCard` is a prop, while the `stack` array in `App.tsx` is state, because it changes whenever the user adds or removes something.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component keep track of a value that can change and re-render the UI automatically whenever that value updates. I used it in `App.tsx` to store the `stack` array (the list of selected technologies), in `TechGrid.tsx` to store the fetched `technologies` list and the `isLoading` flag, and in `Navbar.tsx` to track whether the mobile menu is open or closed.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets a component run some code after it renders — for example, fetching data, subscribing to something, or setting a timer. I needed it to load the JSON data because fetching is a "side effect" (it happens outside of React's normal render process) and it takes time. I used `useEffect` with an empty dependency array (`[]`) in `TechGrid.tsx` so the `fetch("/data/technologies.json")` call runs exactly once, right after the component first mounts, instead of running on every render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React tell items in a list apart from each other so it knows exactly which one changed, was added, or was removed, instead of having to guess by position. Without a stable, unique key, React can re-render items incorrectly or lose track of component state when the list changes. In this project I use each technology's `id` field as the key when mapping over the technologies array and the stack array.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, instead of always showing the same thing. I used it in `YourStack.tsx`: if `stack.length === 0`, it shows the "Your stack is empty." placeholder message; otherwise, it renders the list of selected technology items. I also used it in `TechGrid.tsx` to show a loading spinner while `isLoading` is `true`, and the technology cards once loading is finished.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props — for example, `App.tsx` passes the `stack` array down to `TechGrid` as `<TechGrid stack={stack} ... />`. For a child to "send something back up," the parent passes down a function as a prop, and the child calls that function (usually with some data as an argument) when something happens, like a click. For example, `App.tsx` passes `onAdd={handleAdd}` down to `TechGrid`, which passes it further down to `TechCard`. When the user clicks "Add to Stack," `TechCard` calls `onAdd(technology)`, which runs `handleAdd` back in `App.tsx` and updates the state there.
