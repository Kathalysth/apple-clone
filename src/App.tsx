import NavBar from "./components/NavBar";
import LocaleSwitcher from "./components/localeSwitcher";

function App() {
  return (
    <>
      <LocaleSwitcher />
      <NavBar />
      <main className="pt-[7.375rem] mx-auto max-w-[2560px]">main</main>
    </>
  );
}

export default App;
