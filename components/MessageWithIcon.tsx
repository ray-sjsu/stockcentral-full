import React from "react";
import { CiCircleInfo } from "react-icons/ci";

type MessageWithIconProps = {
  message: string | undefined;
  icon?: React.ReactNode;
  className?: string;
};

const MessageWithIcon = ({
  message,
  icon = <CiCircleInfo />,
  className = "flex-row",
}: MessageWithIconProps) => {

  return (
    <>
      {!!message ? (
        <div className={`flex ${className} items-center justify-center gap-2`}>
          {icon}
          <p className="text-2xl">{message}</p>
        </div>
      ) : null}
    </>
  );
};

export default MessageWithIcon;
