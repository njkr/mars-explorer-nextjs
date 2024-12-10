// import axios from 'axios'
import React, { useContext, useMemo, useReducer } from "react";

// libs
import PropTypes from "prop-types";

// custom
import reducer from "../reducers/main_reducer";
import {SET_ADDRESS , SET_MINT_DATA , SET_CONFIRM_TRANSACTION , SET_MINT_TRANSACTION } from "../utils/actions";

const initialContext = {
	address: null,
	setAddress: (() => {}),
	mintDetails : null,
	setMintDetails: (() => {}),
	mintTransaction : null,
	setMintTransaction: (() => {}),
	isConfirmed : false,
	setConfirmTRansaction: (() => {}),
};


const MainContext = React.createContext(initialContext);

export const MainProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialContext);


	const setAddress = (account) => {
		dispatch({ type: SET_ADDRESS, payload: account });
	};

	const setMintDetails = (MintData) => {
		dispatch({ type: SET_MINT_DATA, payload: MintData });
	};

	const setConfirmTRansaction = (confirmSTatus) => {
		dispatch({ type: SET_CONFIRM_TRANSACTION, payload: confirmSTatus });
	};

	const setMintTransaction = (MintTxData) => {
		dispatch({ type: SET_MINT_TRANSACTION, payload: MintTxData });
	};

	// Wrap the context value in useMemo
	const contextValue = useMemo(() => ({
		...state,
		setAddress,
		setMintDetails,
		setConfirmTRansaction,
		setMintTransaction,
	}), [state]);

	return (
		<MainContext.Provider
			value={contextValue}
		>
			{children}
		</MainContext.Provider>
	);
};

// Adding PropTypes to validate props
MainProvider.propTypes = {
  children: PropTypes.node.isRequired, // Add propTypes validation for children
};
// make sure use
export const useMainContext = () => {
	return useContext(MainContext);
};
