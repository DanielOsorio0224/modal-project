import Modal from "./Modal";
import PropTypes from 'prop-types'

export default function ModalAccount({title,root}) {
  return (
    <Modal title={title} root={root}>
        Modal de cuenta
    </Modal>
  )
}

ModalAccount.propTypes = {
    title: PropTypes,
    root: PropTypes
}