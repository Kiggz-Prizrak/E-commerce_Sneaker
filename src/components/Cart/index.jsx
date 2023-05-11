import cartIcon from '../../assets/icon-cart.svg'

import './styles.css'

export default function Cart() {

  
  return (
    <div className='cartContainer'>
      <img src={cartIcon} alt="" />
      <img
        src={`${import.meta.env.VITE_API_HOST}/mock/image-avatar.png`}
        className='profilePic'
        alt=""
      />
      <div className='CartSection'>

      </div>
    </div>
  );
}