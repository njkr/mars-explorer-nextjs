/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useMainContext } from '../../contexts/main_context';
import { getMintData } from '../../services/land.service';

function ConnectWallet() {
  const { setAddress, setMintDetails } = useMainContext();
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [network, setNetwork] = useState('');

  useEffect(() => {
    // Check for network changes
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('chainChanged', handleNetworkChange);
    }
    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.removeListener('chainChanged', handleNetworkChange);
      }
    };
  }, []);

  const handleNetworkChange = (chainId) => {
    if (chainId !== '0x13882') {
      setClient(null);
      setAddress(null)
      setNetwork('');
    } else {
      setNetwork('Amoy');
    }
  };

  const handleConnect = async () => {
    if (client) {
      toast.success('Wallet already Connected Successfully', {
        position: 'top-left',
      });
      return;
    }

    if (typeof window.ethereum !== 'undefined') {
      setLoading(true);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setClient(account);
        setAddress(account);
        await switchToAmoyNetwork();
        getMintDetails(account);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error connecting to MetaMask, please do it again', error);
        toast.error('Error connecting to MetaMask, please do it again', {
          position: 'top-left',
        });
      }
    } else {
      setLoading(false);
      console.error('MetaMask is not available, please install it');
      toast.error('MetaMask is not available, please install it', {
        position: 'top-left',
      });
      window.open(
        'https://metamask.io/download.html',
        'MetamaskDownload',
        'noopener'
      )
    }
  };

  const switchToAmoyNetwork = async () => {
    const amoyTestnetParams = {
      chainId: '0x13882', // 80002 in hex
      chainName: 'Amoy',
      rpcUrls: ['https://rpc-amoy.polygon.technology'],
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      blockExplorerUrls: ['https://www.oklink.com/amoy'],
    };

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [amoyTestnetParams],
      });
      setNetwork('Amoy');
    } catch (err) {
      if (err.code === 4001 || err.code === -32603) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: amoyTestnetParams.chainId }],
          });
          setNetwork('Amoy');
        } catch (switchError) {
          console.error('Error switching to Amoy network:', switchError);
        }
      } else {
        console.error(err);
      }
    }
  };

  const getMintDetails = async (address) => {
    try {
      const res = await getMintData({ walletAddress: address });
      if (res.isError) {
        // ${res.message},
        toast.error(
          `Please check Land availability in the Game then come back to complete the process`,
          {
            position: 'top-left',
          }
        )
        setClient(null)
        setAddress(null)
      } else {
        setMintDetails(res.data);
        toast.success('Wallet is Connected Successfully', {
          position: 'top-left',
        })
      }
    } catch (error) {
      toast.error(error.message, {
        position: 'top-left',
      });
    }
  };

  return (
    <button
      onClick={() => handleConnect()}
      className='bg-clr-bg-blue font-extrabold font-MovieBold text-lg w-full text-clr-background py-2 px-4 rounded hover:-translate-y-1 transition-all ease-linear duration-100 mt-2 flex flex-row space-x-1 items-center justify-center text-center'
    >
      {/* to ${network} */}
      <span>{client ? `Connected ${network}` : 'Connect Wallet'}</span>
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
  )
}

export default ConnectWallet;
