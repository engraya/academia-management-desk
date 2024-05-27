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
import { addStudent } from "@/lib/actions";
export const AddUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
        Add Student
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <form action={addStudent}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add Student
                </ModalHeader>
                <ModalBody>
                  <Input label="Name" name="name" variant="bordered" />
                  <Input label="Admission Year" name="admissionYear" variant="bordered" />
                  <Input label="Student Class" name="studentClass" variant="bordered" />
                  <Input label="Gender" name="gender" variant="bordered" />
                  <Input label="Age" name="age" variant="bordered" />
                  <Input label="Date of Birth" name="dateOfBirth" variant="bordered" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit" onPress={onClose}>
                  Add Student
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
          </form>

        </Modal>
      </>
    </div>
  );
};
