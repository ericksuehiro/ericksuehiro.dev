import Journey from "./components/journey";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Main />
      <Journey />
    </div>
  );
}
