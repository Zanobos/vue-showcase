function currency (value, currency = '€' , decimals = 2, decimalSeparator = ',', intSeparator = '.', symbolSpace = ' ') {
    const digitsRE = /(\d{3})(?=\d)/g
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''

    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals
      ? stringified.slice(0, -1 - decimals)
      : stringified
    var i = _int.length % 3
    var head = i > 0
      ? (_int.slice(0, i) + (_int.length > 3 ? intSeparator : ''))
      : ''
    var _float = decimals
      ? decimalSeparator + stringified.slice(- decimals)
      : ''
    var sign = value < 0 ? '-' : ''
    return sign + head +
      _int.slice(i).replace(digitsRE, '$1' + intSeparator) +
      _float + symbolSpace + currency
  }
  
  export default currency