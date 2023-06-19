import PropTypes from 'prop-types'

export function Button({text = "mi botoncito"}) {
  return <button>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}