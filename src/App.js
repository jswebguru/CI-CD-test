import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-center text-2xl">
          Mobile-First React App with Tailwind
        </h1>
      </header>
      <main className="p-4">
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Welcome</h2>
          <p>
            This app is designed with a mobile-first approach using React and
            Tailwind CSS.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Responsive Design</h2>
          <p className="text-sm md:text-base lg:text-lg">
            Tailwind CSS utilities make it easy to create responsive layouts.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Get Started</h2>
          <p>
            Edit <code>src/App.js</code> and save to see your changes.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
