import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

export const AddAlumni = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Add Alumni
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add Alumni
                </ModalHeader>
                <ModalBody>
                  <Input label="Name" variant="bordered" />
                  <Input label="Gender" variant="bordered" />
                  <Input label="Date Of Birth" variant="bordered" />
                  <Input label="State" variant="bordered" />
                  <Input label="Phone Number" variant="bordered" />
                  <Input label="Email" variant="bordered" />
                  <Input label="Admission Year" variant="bordered" />
                  <Input label="Graduation Year" variant="bordered" />
                  <Input label="Profession" variant="bordered" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Add Alumni
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
