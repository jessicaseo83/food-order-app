import styles from './Checkout.module.css';

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();

  }
  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.control}>
        <label htmlFor='address'>Street Address</label>
        <input type='text' id='address' />
      </div>
      <div className={styles.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='City' />
      </div>
      <div className={styles.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' />
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button>Comfirm</button>
    </form>
  )
}
export default Checkout;