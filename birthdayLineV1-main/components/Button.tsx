import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
    color: string;
    fontWeight?: string;
    children?: React.ReactNode;
    bgColor: string;
    onClick: () => void;
    radius: string;
    width: string;
    padding: string;
}

const ButtonComponent: React.FC<Props> = ({
    children,
    onClick,
    radius,
    fontWeight,
    bgColor,
    color,
    width,
    padding,
}) => {
    return (
        <Button
            onClick={onClick}
            backgroundColor={bgColor}
            fontWeight={fontWeight}
            color={color}
            borderRadius={radius}
            padding={padding}
            w={width}
        >
            {children}
        </Button>
    )
}

export default ButtonComponent;