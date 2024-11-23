import Image from "next/image";

export default function Journey() {
  return (
    <div className="w-full border-t !border-t-[var(--header-border-color)] bg-gradient-to-b from-[#ffffff03] animate-gradient-wave flex justify-center items-center pt-10">
      <div className="flex flex-col md:flex-row w-full max-w-7xl md:justify-around">
        {[
          {
            name: "Santander",
            logoHref: "../santanderLogo.svg",
            time: "2022 - Today",
            position: "Developer",
            description: "",
            color: "from-red-300 to-red-500",
          },
          {
            name: "Accenture",
            logoHref: "../accentureLogo.svg",
            time: "2021 - 2022",
            position: "Analist",
            description: "",
            color: "from-purple-300 to-purple-500",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-center mb-10">
            {/* <Image
            src={item.logoHref}
            alt={`${item.name} Logo`}
            width={200}
            height={50}
            className={`filter invert-[var(--filterInvert)] transition-all ease-in-out mb-2`}
          />
          <div>{item.position}</div>
          <div className="h-[1px] w-full mb-2 rounded-full bg-gradient-to-r from-black via-white to-black" />

          <div>{item.time}</div> */}

            <div
              className={`h-[30rem] w-[20rem] rounded-2xl animate-gradient-wave bg-gradient-to-tr ${item.color} bg-[length:200%_200%]`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
