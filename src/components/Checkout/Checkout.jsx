import React, { useEffect, useState } from 'react';
import scss from './Checkout.module.scss';
import { useMediaQuery } from 'react-responsive';
import { IconCash } from 'components/IconCash/IconCash';
import PropTypes from 'prop-types';

export const Checkout = ({ setFormValid, formik }) => {
  const [isMoney, setIsMoney] = useState(true);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let checkoutStyle = scss.checkout;
  let titleStyle = scss.checkout__title;
  let inputsContainerMainStyle = scss.checkout__inputsContainerMain;
  let inputsContainerStyle = scss.checkout__inputsContainer;
  let inputsContainer2Style = scss.checkout__inputsContainer2;
  let inputsContainer3Style = scss.checkout__inputsContainer3;
  let paymentContainerStyle = scss.checkout__paymentContainer;
  let paymentMethodsContainerStyle = scss.checkout__paymentMethodsContainer;

  if (isDesktop) {
    checkoutStyle += ` ${scss.checkoutDesktop}`;
    titleStyle += ` ${scss.checkoutDesktop__title}`;
    inputsContainerMainStyle += ` ${scss.checkoutDesktop__inputsContainerMain}`;
    inputsContainerStyle += ` ${scss.checkoutDesktop__inputsContainer}`;
    inputsContainer2Style += ` ${scss.checkoutDesktop__inputsContainer2}`;
    inputsContainer3Style += ` ${scss.checkoutDesktop__inputsContainer3}`;
    paymentContainerStyle += ` ${scss.checkoutDesktop__paymentContainer}`;
    paymentMethodsContainerStyle += ` ${scss.checkoutDesktop__paymentMethodsContainer}`;
  } else if (isTablet) {
    checkoutStyle += ` ${scss.checkoutTablet}`;
    titleStyle += ` ${scss.checkoutTablet__title}`;
    inputsContainerMainStyle += ` ${scss.checkoutTablet__inputsContainerMain}`;
    inputsContainerStyle += ` ${scss.checkoutTablet__inputsContainer}`;
    inputsContainer2Style += ` ${scss.checkoutTablet__inputsContainer2}`;
    inputsContainer3Style += ` ${scss.checkoutTablet__inputsContainer3}`;
    paymentContainerStyle += ` ${scss.checkoutTablet__paymentContainer}`;
    paymentMethodsContainerStyle += ` ${scss.checkoutTablet__paymentMethodsContainer}`;
  } else if (isMobile) {
    checkoutStyle += ` ${scss.checkoutMobile}`;
    titleStyle += ` ${scss.checkoutMobile__title}`;
    inputsContainerMainStyle += ` ${scss.checkoutMobile__inputsContainerMain}`;
    inputsContainerStyle += ` ${scss.checkoutMobile__inputsContainer}`;
    inputsContainer2Style += ` ${scss.checkoutMobile__inputsContainer2}`;
    inputsContainer3Style += ` ${scss.checkoutMobile__inputsContainer3}`;
    paymentContainerStyle += ` ${scss.checkoutMobile__paymentContainer}`;
  }

  useEffect(() => {
    const anyFieldTouched = Object.values(formik.touched).some(t => t);

    setFormValid(formik.isValid && anyFieldTouched);
    // eslint-disable-next-line
  }, [formik.isValid, formik.touched, setFormValid]);

  const handleRadioChange = () => {
    setIsMoney(!isMoney);
  };

  return (
    <div className={checkoutStyle}>
      <h2 className={titleStyle}>Checkout</h2>
      <div className={inputsContainerMainStyle}>
        <div className={inputsContainerStyle}>
          <h4 className={scss.checkout__checkoutDescription}>
            billing details
          </h4>
          <div className={inputsContainer2Style}>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.name && formik.errors.name ? scss.errorLabel : ''
              }`}
              htmlFor="name"
            >
              Name
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.name && formik.errors.name
                    ? scss.errorInput
                    : ''
                }`}
                type="text"
                id="name"
                placeholder="Alexei Ward"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className={scss.formikMessage}>{formik.errors.name}</div>
              ) : null}
            </label>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.email && formik.errors.email
                  ? scss.errorLabel
                  : ''
              }`}
              htmlFor="email"
            >
              Email Address
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.email && formik.errors.email
                    ? scss.errorInput
                    : ''
                }`}
                type="email"
                id="email"
                placeholder="alexei@mail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={scss.formikMessage}>{formik.errors.email}</div>
              ) : null}
            </label>
          </div>
          <div className={inputsContainer3Style}>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.phone && formik.errors.phone
                  ? scss.errorLabel
                  : ''
              }`}
              htmlFor="phone"
            >
              Phone Number
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.phone && formik.errors.phone
                    ? scss.errorInput
                    : ''
                }`}
                type="tel"
                id="phone"
                placeholder="+1 202-555-0136"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className={scss.formikMessage}>{formik.errors.phone}</div>
              ) : null}
            </label>
          </div>
        </div>
        <div className={inputsContainerStyle}>
          <h4 className={scss.checkout__checkoutDescription}>shipping info</h4>
          <label
            className={`${scss.checkout__label} ${
              formik.touched.address && formik.errors.address
                ? scss.errorLabel
                : ''
            }`}
            htmlFor="address"
          >
            Address
            <input
              className={`${scss.checkout__input} ${
                formik.touched.address && formik.errors.address
                  ? scss.errorInput
                  : ''
              }`}
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className={scss.formikMessage}>{formik.errors.address}</div>
            ) : null}
          </label>
          <div className={inputsContainer2Style}>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.zipCode && formik.errors.zipCode
                  ? scss.errorLabel
                  : ''
              }`}
              htmlFor="zipCode"
            >
              ZIP Code
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.zipCode && formik.errors.zipCode
                    ? scss.errorInput
                    : ''
                }`}
                type="text"
                id="zipCode"
                placeholder="10001"
                onChange={formik.handleChange}
                value={formik.values.zipCode}
                onBlur={formik.handleBlur}
              />
              {formik.touched.zipCode && formik.errors.zipCode ? (
                <div className={scss.formikMessage}>
                  {formik.errors.zipCode}
                </div>
              ) : null}
            </label>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.city && formik.errors.city ? scss.errorLabel : ''
              }`}
              htmlFor="city"
            >
              City
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.city && formik.errors.city
                    ? scss.errorInput
                    : ''
                }`}
                type="text"
                id="city"
                placeholder="New York"
                onChange={formik.handleChange}
                value={formik.values.city}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className={scss.formikMessage}>{formik.errors.city}</div>
              ) : null}
            </label>
          </div>
          <div className={inputsContainer3Style}>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.country && formik.errors.country
                  ? scss.errorLabel
                  : ''
              }`}
              htmlFor="country"
            >
              Country
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.country && formik.errors.country
                    ? scss.errorInput
                    : ''
                }`}
                type="text"
                id="country"
                placeholder="United States"
                onChange={formik.handleChange}
                value={formik.values.country}
                onBlur={formik.handleBlur}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className={scss.formikMessage}>
                  {formik.errors.country}
                </div>
              ) : null}
            </label>
          </div>
        </div>
      </div>
      <h4 className={scss.checkout__checkoutDescription}>payment details</h4>
      <div className={paymentContainerStyle}>
        <h4 className={scss.checkout__methodTitle}>Payment Method</h4>
        <div className={paymentMethodsContainerStyle}>
          <label
            className={`${scss.checkout__labelRadio} ${
              isMoney ? scss.checkout__labelRadioMoneyChecked : ''
            }`}
            htmlFor="eMoney"
          >
            <input
              className={scss.checkout__radioVisuallyHidden}
              type="radio"
              name="payment"
              value="eMoney"
              id="eMoney"
              checked={isMoney}
              onChange={handleRadioChange}
            />
            <div className={scss.checkout__radioPlaceholder}>
              <div className={scss.checkout__radioPlaceholderInside}></div>
            </div>
            e-Money
          </label>
          <label
            className={`${scss.checkout__labelRadio} ${
              !isMoney ? scss.checkout__labelRadioCashChecked : ''
            }`}
            htmlFor="cashOnDelivery"
          >
            <input
              className={scss.checkout__radioVisuallyHidden}
              type="radio"
              name="payment"
              value="cashOnDelivery"
              id="cashOnDelivery"
              checked={!isMoney}
              onChange={handleRadioChange}
            />
            <div className={scss.checkout__radioPlaceholder}>
              <div className={scss.checkout__radioPlaceholderInside}></div>
            </div>
            Cash on Delivery
          </label>
        </div>
      </div>
      {isMoney ? (
        <div className={inputsContainer2Style}>
          <label className={scss.checkout__label} htmlFor="eMoneyNumber">
            e-Money Number
            <input
              className={scss.checkout__input}
              type="text"
              id="eMoneyNumber"
              placeholder="238521993"
            />
          </label>
          <label className={scss.checkout__label} htmlFor="eMoneyPin">
            e-Money PIN
            <input
              className={scss.checkout__input}
              type="text"
              id="eMoneyPin"
              placeholder="6891"
            />
          </label>
        </div>
      ) : (
        <div className={scss.checkout__descriptionPayment}>
          <IconCash />
          <p className={scss.checkout__descriptionPaymentText}>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
};

Checkout.propTypes = {
  setFormValid: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
};
