import React, { useEffect } from "react";

// custom
import Logo from '../assets/mars_3.png'
import congrate from '../assets/trade.png'
import Seo from "../components/Shared/Seo";
import { api_url } from "../utils/constants";
import { Link } from "react-router-dom";
import { useMainContext } from "../contexts/main_context";


function SuccessPage() {
	const {  mintTransaction } = useMainContext()

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
				title={`Successful Mint`}
				description={`Marsx mint app to mint players' lands`}
				schemaMarkup={schema}
				meta={[
				{
					name: `robots`,
					content: `index, follow`,
				},
				]}
			/>
			<Link to="/">
				<img src={Logo} alt='marsx logo' className='' />
			</Link>

			<div className="mt-20 flex flex-col items-center justify-center space-y-8">
				<div className="flex flex-col space-y-2 items-center justify-center">
					<img src={congrate} alt="successful mint" className="w-32 h-32" />
					<p className="uppercase font-semibold text-clr-bg-orange text-2xl text-center">
						the Land Minted Successfully
					</p>
				</div>
				<p className="text-lg text-clr-white font-medium text-center capitalize">
					you can go back to complete playing or check the transaction result<br/>
					<Link to={`https://www.oklink.com/amoy/tx/${mintTransaction?.txHash}`} className="font-semibold underline text-clr-bg-blue">
						Click Here
					</Link>
				</p>
			</div>
		</section>
	);
}

export default SuccessPage;
