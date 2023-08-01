import Modal from "./Modal";
import PropTypes from 'prop-types'

export default function ModalSettings({title, root}) {
  return (
    <Modal title={title} root={root}>
        Modal de configuracion
    </Modal>
  )
}

ModalSettings.propTypes = {
    title: PropTypes,
    root: PropTypes
} 