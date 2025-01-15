'use client'
import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";

export default function CategoryForm({ handleSubmit, type, item }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [name, setName] = useState(item ? item.name : '')
    const [image, setImage] = useState(item ? item.image : '')
    const values = { name, image }

    const onSubmit = () => {
        handleSubmit(values)
        setName('')
        setImage('')
    }
    return (
        <>
            <Button onPress={onOpen}>{type} Category</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{type} Categories</ModalHeader>
                            <ModalBody>
                                <Input placeholder="Enter Category Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                <Input placeholder="Enter Image Url" value={image} onChange={(e) => { setImage(e.target.value) }} />
                            </ModalBody>
                            {JSON.stringify(item)}
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={onSubmit}>
                                    {type}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
