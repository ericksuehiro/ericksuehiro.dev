import Journey from "./pages/journey";
import Main from "./pages/main";
import Header from "./pages/header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Main />
      <Journey />
    </div>
  );
}
