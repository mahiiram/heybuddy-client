import AppleSignin from 'react-apple-signin-auth';

/** Apple Signin button */
const MyAppleSigninButton = ({ ...rest }) => (
  <AppleSignin
    /** Auth options passed to AppleID.auth.init() */
    authOptions={{
      clientId: 'com.example.web',
      scope: 'email name',
      redirectURI: 'https://example.com',
      state: '',
      nonce: 'nonce',
      usePopup: true,
    }}
    /** General props */
    uiType="light"
    /** className */
    className="apple-auth-btn"
    /** Allows to change the button's children, eg: for changing the button text */
    buttonExtraChildren= "Sign in with Apple"
    /** Checkout README.md for further customization props. */
    /** Spread rest props if needed */
    iconProp={{ style:{width: "403px",
        height: "62px",
        fontsize:"30px"
        }}}
    {...rest}
  />
);

export default MyAppleSigninButton;