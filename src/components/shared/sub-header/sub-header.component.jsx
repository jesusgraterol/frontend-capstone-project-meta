import './sub-header.css';
import PropTypes from 'prop-types';

function SubHeader({ name }) {

  return (
    <header className='sub-header'>
      <h1>{name}</h1>
    </header>
  )
}
SubHeader.propTypes = {
  name: PropTypes.string.isRequired
}


export default SubHeader;
