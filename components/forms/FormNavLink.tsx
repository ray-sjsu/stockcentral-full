import Link from "next/link";
import React from "react";

type SignNavLinkProps = {
  message: string;
  href: string;
  buttonMessage: string;
};

const FormNavLink = ({ message, href, buttonMessage }: SignNavLinkProps) => {
  return (
    <p className="text-center text-sm text-gray-600 mt-2">
      {message}
      <Link className="text-blue-500 hover:underline" href={href}>
        {buttonMessage}
      </Link>
    </p>
  );
};

export default FormNavLink;
