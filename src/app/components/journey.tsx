import Image from "next/image";

export default function Journey() {
  const cards = [
    {
      name: "Santander",
      logoHref: "../santanderLogo.svg",
      time: "2022 - Today",
      position: "Developer",
      description: "I joined Santander in 2022 as a backend developer, specializing in building microservices with Java and leveraging technologies like Spring. \n Over time, I transitioned to the role of front-end developer within the team, focusing on delivering solutions using Angular as the primary framework.",
      color: "from-red-300 to-red-600 top-[calc(10rem)]",
    },
    {
      name: "Accenture",
      logoHref: "../accentureLogo.svg",
      time: "2021 - 2022",
      position: "Analist",
      description: "I began my journey at Accenture in 2021 as a backend developer, focusing on creating microservices with Java and utilizing technologies such as Camel and Spring. \n A key challenge during this time was leading the migration from IIB to Camel, ensuring a seamless transition and improved performance.",
      color: "from-purple-300 to-purple-600 top-[calc(10rem+10px)]",
    },
  ];
  return (
    <div
      className={`w-full h-[${
        cards.length * 60
      }vh] border-t !border-t-[var(--header-border-color)] bg-gradient-to-b from-[#ffffff03] animate-gradient-wave flex justify-center items-center overflow-clip flex-col`}
    >
      <h1 className="h-20 flex items-center sticky top-14 font-bold text-xl">My Journey</h1>
      <div className="flex flex-col md:flex-row w-full max-w-7xl md:justify-center md:gap-5">
        {cards.map((item) => (
          <div
            key={item.name}
            className={`flex items-center justify-center mb-10 sticky ${item.color}`}
          >
            <div
              className={`h-[30rem] w-[20rem] rounded-2xl animate-gradient-wave bg-gradient-to-tr ${item.color} bg-[length:200%_200%] p-5 shadow-md viewCardAnimation sm:animate-none`}
            >
              <div className="h-20 w-full bg-gray-300  bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-md flex justify-center items-center">
                <Image
                  src={item.logoHref}
                  alt={`${item.name} Logo`}
                  width={200}
                  height={50}
                  className={"transition-all ease-in-out mb-2"}
                />
              </div>
              <div className="h-[calc(100%-5rem)] w-full pt-5 text-2xl flex flex-col text-white">
                {/* <p className="w-full flex justify-center">{item.position}</p> */}
                <div className="text-base text-center opacity-85 pt-2">
                  {item.description.split("\n").map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <footer className="text-base text-center mt-auto">
                  <hr className="mb-1 !border-white" />
                  {item.time}
                </footer>
              </div>
            </div>
          </div>
        ))}
        <div className="h-52 md:hidden" />
      </div>
    </div>
  );
}
