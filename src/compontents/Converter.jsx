import PropTypes from 'prop-types';

const Converter = ({value, color, warning, onInputChange}) => {
  const hexDictionary = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
  const hex2rgb = (value) => {
    const red = hexDictionary.indexOf(value[1]?.toLowerCase()) * 16 + hexDictionary.indexOf(value[2]?.toLowerCase());
    const green = hexDictionary.indexOf(value[3]?.toLowerCase()) * 16 + hexDictionary.indexOf(value[4]?.toLowerCase());
    const blue = hexDictionary.indexOf(value[5]?.toLowerCase()) * 16 + hexDictionary.indexOf(value[6]?.toLowerCase());
    return [red, green, blue];
  }

  const rgb = hex2rgb(color)

  const style = {
    backgroundColor: color,
  }

  return (
    <div className='Converter'>
      <input className='shape input' value={value} onInput={onInputChange} placeholder='#002366' maxLength='7'/>
      <div style={style} className='shape result'>
        {warning ? 'Ошибка!': `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}
        </div>
    </div>
  )
};

Converter.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  warning: PropTypes.bool,
  onInputChange: PropTypes.func
}

export default Converter;