import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isValidPostalCode = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const [formInputValidation, setFormInputValidation] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true
  });
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isValidPostalCode(enteredPostal);
    
    setFormInputValidation({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid
    });


    const formIsValid = enteredNameIsValid && enteredAddressIsValid && enteredCityIsValid && enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }
    
    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostal
    })
  };

  const addressControlClassNames = `${styles.control} ${formInputValidation.address ? '' : styles.invalid}`;
  const cityControlClassNames = `${styles.control} ${formInputValidation.city ? '' : styles.invalid}`;
  const postalControlClassNames = `${styles.control} ${formInputValidation.postalCode ? '' : styles.invalid}`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={`${styles.control} ${formInputValidation.name ? '' : styles.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidation.name && <p>Please Enter A Valid Name!</p>}
      </div>
      <div className={addressControlClassNames}>
        <label htmlFor='address'>Street Address</label>
        <input type='text' id='address' ref={addressInputRef} />
        {!formInputValidation.address && <p>Please Enter A Valid Address!</p>}
      </div>
      <div className={cityControlClassNames}>
        <label htmlFor='city'>City</label>
        <input type='text' id='City' ref={cityInputRef}/>
        {!formInputValidation.city && <p>Please Enter A Valid City!</p>}
      </div>
      <div className={postalControlClassNames}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputValidation.postalCode && <p>Please Enter A Valid Postal Code!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button className={styles.submit}>Comfirm</button> 
      </div>
    </form>
  )
}
export default Checkout;