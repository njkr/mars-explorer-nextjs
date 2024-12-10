import React, { useEffect } from "react";

// libs
import { Link } from "react-router-dom";

function ErrorPage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);


	return (
		<main className="page-100 flex justify-center items-center text-center text-clr-white max-w-max-custom w-90vw mx-auto">
			<section className="flex flex-col space-y-12 bg-white px-5 py-10 rounded-lg shadow-md shadow-clr-bg-orange">
				<div className="flex flex-col space-y-3">
					<h1 className="text-9xl font-semibold text-clr-bg-orange">404</h1>
					<h3 className="tracking-wide capitalize mb-8 leading-5 text-2xl text-clr-background">
						Sorry, the page you tried cannot be found
					</h3>
				</div>
				<Link
					to="/"
					className="w-1/2 mx-auto capitalize transition-all ease-in-out duration-75 px-6 py-3 bg-clr-bg-blue text-clr-background font-bold rounded-lg hover:shadow hover:shadow-clr-bg-blue"
				>
					back home
				</Link>
			</section>
		</main>
	);
}

export default ErrorPage;
