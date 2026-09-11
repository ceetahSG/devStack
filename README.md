# 🚀 devStack

A modern web application that helps developers explore and build their ideal technology stack with an interactive, intuitive interface.

## 📝 Description

devStack is a React-based application that empowers developers to discover and select technologies across different categories to create their personalized tech stack. Whether you're building a new project, learning new technologies, or planning your development approach, devStack provides a curated collection of modern technologies with an elegant user experience.

## 🛠️ Technologies Used

- **TypeScript** (96.6%) - For type-safe, maintainable code
- **React 19** - Modern UI library for building interactive components
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **DaisyUI** - Beautiful component library built on Tailwind CSS
- **React Icons** - Comprehensive icon library for React
- **React Toastify** - Elegant notifications and toast messages
- **Prettier** - Code formatter for consistent code style
- **Oxlint** - Fast and extensible linter

## ✨ Key Features

1. **Interactive Technology Selection** - Browse and select technologies from various categories to build your custom stack with an intuitive card-based interface.

2. **Real-time Stack Preview** - View your selected technologies in real-time with instant visual feedback and the ability to manage your stack on the fly.

3. **Responsive Design** - Seamlessly adapts to all screen sizes from mobile to desktop, ensuring a smooth experience on any device with beautiful Tailwind CSS styling.

## 🎓 React Learning Guide

### What is JSX, and why is it used in React?

JSX is a syntax extension that allows you to write HTML-like code inside JavaScript. It makes React code more readable and intuitive by letting you describe UI structures in a familiar way. React compiles JSX into regular JavaScript function calls behind the scenes. We use JSX because it's easier to visualize the component structure and it closely resembles the final HTML output, making development more efficient.

### What is the difference between props and state?

Props are immutable data passed from a parent component to a child component. They're like function parameters – the child receives them and shouldn't modify them. State, on the other hand, is data managed within a component that can change over time. When state updates, the component re-renders. In devStack, we pass `selectedTechnologies` as a prop to child components, while `technologyList` is state in the Technologies component.

### What does the useState hook do, and where did you use it in this project?

The `useState` hook allows functional components to manage state. It returns an array with the current state value and a function to update it. In devStack, we used it in the Technologies component:
```tsx
const [technologyLIst, setTechnologyList] = useState<ITechnology[]>([]);
```
This manages the array of selected technologies, updating it as users click on technology cards.

### What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects (like data fetching) after the component renders. While we used React's `use()` hook in devStack for handling promises with Suspense, `useEffect` is typically used for fetching JSON data. We chose React 19's `use()` hook and `Suspense` instead because it provides cleaner data fetching with automatic loading states, making the code more modern and readable.

### Why does every item in a .map() list need a unique key prop?

Keys help React identify which items have changed, been added, or removed. Without unique keys, React relies on item positions, which can cause bugs when the list changes (reordering, filtering, etc.). In devStack, we use `key={t.id}` when mapping technologies:
```tsx
{technologies.map((t) => (
  <TechnologyCard technology={t} key={t.id} ... />
))}
```
This ensures each card maintains its identity even if the list reorders.

### What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means displaying different content based on conditions. In the SelectedTechnologies component, we use it to show different messages when the stack is empty:
```tsx
if (selectedTechnologies.length === 0) {
  return (
    <div>
      <p>No technologies selected yet.</p>
      <button>Your Stack Is Empty</button>
    </div>
  );
}
```
When no technologies are selected, this message appears. Otherwise, the full stack list is displayed.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data flows down to children through **props**. For example, in Technologies (parent), we pass data to TechnologyCard (child):
```tsx
<TechnologyCard 
  technology={t} 
  technologyList={technologyLIst}
  setTechnologyList={setTechnologyList}
/>
```
For sending data back, we pass a callback function (like `setTechnologyList`) from parent to child. When the child calls this function, it updates the parent's state, effectively sending data back up.

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Format Code

```bash
npm run format
npm run format:check
```

### Lint

```bash
npm run lint
```

## 🎨 Live Demo

Check out the live application: [dev-stack-flax.vercel.app](https://dev-stack-flax.vercel.app)

## 📄 License

This project is open source and available under the MIT License.

---

**Happy stacking! 🎯** Build your perfect tech stack with devStack today.
