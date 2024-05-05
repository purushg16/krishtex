import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import AccountLinkStack from "./AccountLinkStack";
import { MenuIcon } from "lucide-react";

const AccountMenuModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        as={IconButton}
        aria-label="menu"
        icon={<Icon as={MenuIcon} />}
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalHeader> Account Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <AccountLinkStack />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AccountMenuModal;
