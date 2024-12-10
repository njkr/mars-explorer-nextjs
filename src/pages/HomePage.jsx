// base
import React, { useEffect } from "react";

// custom
import Hero from "../components/Shared/Hero";
import Land from "../components/Land";
import Seo from "../components/Shared/Seo";
import { api_url } from "../utils/constants";



function HomePage() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Marsx',
		description: `Marsx mint app to mint players' lands`,
		url: api_url,
		// logo: 'https://sweetchome.com/static/logo-780dc980b10398b304f8272850a73dcd.png',
	}


	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<section className="flex flex-col items-center justify-center page-100 max-w-max-custom w-90vw mx-auto">
			<Seo
				title={'Mint Lands'}
				description={`Marsx mint app to mint players' lands`}
				schemaMarkup={schema}
				meta={[
				{
					name: `robots`,
					content: `index, follow`,
				},
				]}
			/>
			<Hero/>
			<Land/>
		</section>
	);
}

export default HomePage;
