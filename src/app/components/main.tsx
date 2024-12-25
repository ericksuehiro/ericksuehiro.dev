import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <div className="h-[calc((100vh/14)*13)] min-h-[720px] w-full justify-center md:flex">
      <div className="h-full rounded-lg grid grid-rows-3 md:grid-cols-2 md:grid-rows-1 w-full max-w-7xl">
        <div className="w-full flex space-y-0 justify-left p-5 md:pl-2 pt-[10%] font-bold flex-col">
          <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-9xl tracking-tight">
            <div>ERICK</div>
            <div className="!-mt-[10px] sm:!-mt-[10px] md:!-mt-[10px] lg:!-mt-[10x] xl:!-mt-[30px]">
              <span className="text-transparent bg-clip-text animate-gradient-wave bg-gradient-to-br from-[#04D361] to-purple-500 bg-[length:200%_200%]">
                SUEHIRO
              </span>
            </div>
            {/* <div className="opacity-50 text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl">
              Full Stack
            </div> */}
          </div>

          <div className="font-thin text-gray-400 md:text-3xl text-xl">
            <ul className="">
              {[
                "Full Stack",
                "Solid experience",
                "Tech stack versatility",
                "Complex projects XP",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-gradient-to-br from-[#04D361] to-purple-500 animate-gradient-wave bg-[length:200%_200%] animate-spin rounded-sm !border-[var(--header-border-color)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 h-full items-start  pt-[calc((100vh/14)+10%)] absolute top-0 right-5 flex-col md:pt-10 md:relative md:right-0 md:gap-3 md:flex-row">
            <Link href={"https://github.com/ericksuehiro"} target="_blank">
              <Image
                src="/githubLogo.svg"
                alt="GitHub Logo"
                width={50}
                height={50}
                className="filter invert-[var(--filterInvert)] hover:opacity-75 transition-all"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ericksuehiro/"}
              target="_blank"
            >
              <Image
                src="/linkedinLogo.svg"
                alt="Linkedin Logo"
                width={50}
                height={50}
                className="filter invert-[var(--filterInvert)] hover:opacity-75 transition-all"
              />
            </Link>
          </div>
        </div>

        <div className="p-5 md:pr-2 flex justify-center row-span-2">
          <div className="h-full w-full max-w-[40rem] h-50 max-h-[50rem] rounded-3xl animate-gradient-wave bg-gradient-to-br from-[#04D361] to-purple-500 bg-[length:200%_200%] p-3">
            <div className="h-full w-full bg-white bg-opacity-35 backdrop-blur-lg rounded-3xl shadow-md flex justify-center items-center">
              I need to put a picture of myself here :)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
