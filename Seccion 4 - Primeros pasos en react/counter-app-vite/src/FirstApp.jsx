import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle = '', name}) => {
 
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle}</p>
      <p>{ name }</p>
    </>
  )
}

//propTypes 
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No hay ningun titulo',
  subTitle: 'Noy hay subtitulo',
  name: 'Alejandro'
}