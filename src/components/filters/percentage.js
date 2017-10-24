function percentage (value, decimals = 2, decimalSeparator = ',', symbolSpace = ' ') {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''

    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals
      ? stringified.slice(0, -1 - decimals)
      : stringified
    var _float = decimals
      ? decimalSeparator + stringified.slice(- decimals)
      : ''
    var sign = value < 0 ? '-' : ''
    return sign + _int +
      _float + symbolSpace + '%'
  }
  
  export default percentage