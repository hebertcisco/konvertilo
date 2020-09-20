import React from "react"
class CapitalizedText extends React.Component {
  render() {
    return jsUcfirst(this.props.text)
  }
}
function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export default CapitalizedText
