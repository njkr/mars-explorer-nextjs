/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

// libs
import Web3 from "web3";
import { Web3Provider } from '@ethersproject/providers'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

// custom
import { useMainContext } from '../../contexts/main_context';
import contractsFile from "../../utils/LandNFT.json"
import contractMX from '../../utils/Marsx.json'
import { mx_contract_address, mx_token } from '../../utils/constants'
import { saveMintData } from '../../services/land.service';
import Loading from '../Shared/Loading';


function MintLand() {
  const web3 = new Web3(window.ethereum)
  const navigate = useNavigate()
  const { address, mintDetails, setMintTransaction } = useMainContext()
  const [loading, setLoading] = useState(false)
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const web3Provider = new Web3Provider(window.ethereum)
      setProvider(web3Provider)
      setSigner(web3Provider.getSigner())
    } else {
      window.open(
        'https://metamask.io/download.html',
        'MetamaskDownload',
        'noopener'
      )
    }
  }, [])


  const handleBuy = async () => {
    setLoading(true)
    if (!address) {
      toast.error('Wallet is not Connected, please connect first', {
        position: 'top-left',
      })
      return
    }
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      // approve token
      const mxContract = new ethers.Contract(mx_token, contractMX.abi, signer)
      const value = web3.utils.toWei(1, 'ether') // mintDetails.price
      // Get the current nonce
      const nonce = await provider.getTransactionCount(address, 'latest')
      //console.log('Nonce:', nonce)
      let approveTx = null
      approveTx = await mxContract.approve(mx_contract_address, value, {
        nonce,
        gasLimit: 60000,
      })
      // Wait for the transaction to be mined
      const receipt = await provider.waitForTransaction(approveTx.hash, 3)
      //console.log('Transaction was mined in block', receipt.blockNumber)
      //console.log('Transaction Hash:', receipt.transactionHash)
      console.log('Gas Used:', receipt.gasUsed.toString())
      // console.log('approveTx', approveTx, approveTx?.hash, receipt.status)
      if (approveTx?.hash) {
        // get Contract mint
        const tokenContract = new ethers.Contract(
          mx_contract_address,
          contractsFile.abi,
          signer
        )
        // console.log(
        //   'mintDetails',
        //   mintDetails,
        //   tokenContract,
        //   mx_contract_address
        // )
        let transferTx = null
        transferTx = await tokenContract.buyLand(
          mintDetails.communityId, // communityId
          [mintDetails.landIds], // lands ids
          // mintDetails.founder_walletAddress, // founder address
          mintDetails.nonce, // nonce
          mintDetails.signature, // signature
          // mintDetails.cid // url token
          // {
          //   gasLimit: 80000,
          // }
        )
        // // Wait for the transaction to after mined
        const receiptMint = await provider.waitForTransaction(
          transferTx.hash,
          2
        )
        // console.log('transferTx', transferTx, receiptMint, receiptMint.status)
        if (transferTx?.hash && receiptMint.status === 1) {
          // navigate('/success')
          const reqBody = {
            landId: mintDetails.landIds,
            walletAddress: address,
            txHash: transferTx.hash,
          }
          saveMintData(reqBody, mintDetails.access_token)
            .then((res) => {
              if (res.isError) {
                toast.error(
                  res.message ? res.message : 'Error Saving the transaction',
                  {
                    position: 'top-left',
                  }
                )
              } else if (res?.statusCode && res?.statusCode !== 200) {
                toast.error(
                  res.message ? res.message : 'Error Saving the transaction.',
                  {
                    position: 'top-left',
                  }
                )
              } else {
                setMintTransaction(reqBody)
                navigate('/success')
                toast.success('land was Minted Successfully', {
                  position: 'top-left',
                })
              }
              setLoading(false)
            })
            .catch((error) => {
              setLoading(false)
              toast.error(error, {
                position: 'top-left',
              })
            })
        } else {
          toast.error('Error completing the Transaction.', {
            position: 'top-left',
          })
          setLoading(false)
        }
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error)
      // error.message
      toast.error('Error completing the Transaction', {
        position: 'top-left',
      })
      setLoading(false)
    }
  }

  return (
    <>
      {loading && <Loading />}
      <button
        disabled={!mintDetails}
        onClick={handleBuy}
        className='bg-clr-bg-orange font-extrabold font-MovieBold text-lg w-full text-clr-background py-2 px-4 rounded hover:-translate-y-1 transition-all ease-linear duration-100 mt-2 flex flex-row space-x-1 items-center justify-center text-center'
      >
        <span>Mint Land</span>
        {loading && (
          <output aria-live='polite'>
            <svg
              aria-hidden='true'
              className='inline w-4 h-4 mr-3 text-clr-main-dark font-semibold animate-spin'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='#E5E7EB'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentColor'
              />
            </svg>
          </output>
        )}
      </button>
    </>
  )
}

export default MintLand