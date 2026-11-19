import Journey from "./components/journey";
import Main from "./components/main";
import Tools from "./components/tools";
import Work from "./components/work";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Main />
      <Work selected />
      <Journey />
      <Tools />
    </div>
  );
}
