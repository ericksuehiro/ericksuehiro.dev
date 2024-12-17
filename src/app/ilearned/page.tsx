"use client";

export default function ILearned() {
	const codes = [
		{
			title: "The Game Awards 2024 Button",
			content: (
				<>
					{/* Styles */}
					<style jsx>{`
            .tga-gradient-border {
              position: relative;
            }

            @property --a {
              syntax: "<angle>";
              inherits: false;
              initial-value: 180deg;
            }
            .tga-gradient-border::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: inherit;
              padding: 2px;
              background: conic-gradient(
                from var(--a) at 50% 50%,
                #ffffff14 -54.98deg,
                #f7c8a3 52.13deg,
                #fbe3d10d 125.06deg,
                #fbe3d1 235.09deg,
                #ffffff14 305.02deg,
                #f7c8a3 412.13deg
              );
              mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
              mask-composite: xor;
              mask-composite: exclude;
              transition: --a 0.5s;
            }
            .tga-gradient-border:hover::before {
              --a: 360deg;
            }
          `}</style>
					{/* HTML */}
					<button
						type="button"
						className="tga-gradient-border flex items-center justify-center p-1 rounded-xl bg-[#f2a366] hover:bg-[#f7c8a3cc] transition-all bg-clip-content active:scale-95"
					>
						<span className="text-black text-lg font-bold pl-5 pr-5 pt-2 pb-2 tracking-wider">
							VOTE
						</span>
					</button>
				</>
			),
			contentToCopy: `
				<>
					{/* Styles */}
          <style jsx>{\`
            .tga-gradient-border {
              position: relative;
            }

            @property --a {
              syntax: "<angle>";
              inherits: false;
              initial-value: 180deg;
            }
            .tga-gradient-border::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: inherit;
              padding: 2px;
              background: conic-gradient(
                from var(--a) at 50% 50%,
                #ffffff14 -54.98deg,
                #f7c8a3 52.13deg,
                #fbe3d10d 125.06deg,
                #fbe3d1 235.09deg,
                #ffffff14 305.02deg,
                #f7c8a3 412.13deg
              );
              mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
              mask-composite: xor;
              mask-composite: exclude;
              transition: --a 0.5s;
            }
            .tga-gradient-border:hover::before {
              --a: 360deg;
            }
          \`}</style>
					{/* HTML */}
          <button
            type="button"
            className="tga-gradient-border flex items-center justify-center p-1 rounded-xl bg-[#f2a366] hover:bg-[#f7c8a3cc] transition-all bg-clip-content active:scale-95"
          >
            <span className="text-black text-lg font-bold pl-5 pr-5 pt-2 pb-2 tracking-wider">
              VOTE
            </span>
          </button>
        </>
			`,
		},
	];

	return (
		<div className="flex flex-col justify-start content-start h-full min-h-screen w-full p-6 max-w-7xl mx-auto place-content-center">
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
				{codes.map((code) => (
					<div
						key={code.title}
						className="border !border-[var(--header-border-color)] h-64 w-full rounded-lg shadow-md grid grid-rows-[20%,55%,25%] p-3 pb-0 pt-0"
					>
						<div className="flex justify-center items-center">{code.title}</div>
						<div className="h-full w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
							{code.content}
						</div>
						<div className="flex justify-center items-center">
							<button
							className="active:scale-95 transition-all border-b !border-b-transparent hover:!border-b-white"
								type="button"
								onClick={() =>
									navigator.clipboard.writeText(code.contentToCopy)
								}
							>
								Copy Code!
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
