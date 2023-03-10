import NavBar from "./components/NavBar";
import LocaleSwitcher from "./components/localeSwitcher";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <LocaleSwitcher />
      <NavBar />
      <main className="pt-[7.375rem] mx-auto max-w-[2560px] overflow-hidden scrollbar-hide">
        <Landing />
      </main>
    </>
  );
}

export default App;
