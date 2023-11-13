import { useEffect, useRef, useState } from "react";
import { TextContainerProps } from "./TextContainer.props";
import { Text, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const TextContainer = ({ lineClamp, text }: TextContainerProps) => {
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollHeight > textRef.current.clientHeight &&
        setIsShowBtn(true);
    }
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="lg"
        centered
      >
        <Text>{text}</Text>
      </Modal>
      <Text lineClamp={lineClamp} ref={textRef}>
        {text}
      </Text>
      {isShowBtn && (
        <Button variant="transparent" onClick={open}>
          Показать полностью
        </Button>
      )}
    </>
  );
};
