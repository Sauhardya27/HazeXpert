const Button = () => (
	<div className="mt-20 space-x-5 xs:space-x-10">
		<button type="button" className={`bg-gradient-to-r from-purpleG to-whiteG text-white text-base font-semibold px-5 xs:px-10 py-2 rounded-full hover:scale-125 ease-out duration-300`}>Dehaze</button>

		<button type="button" className={`bg-black border-purple border-2 text-white text-base font-semibold px-5 xs:px-10 py-2 rounded-full hover:scale-125 ease-out duration-300`}>Download</button>
	</div>
);

export default Button;