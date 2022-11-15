import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GitHub_Author } from "../../../types/globalTypes";

const AuthorDisplayer = (props: GitHub_Author) => {
  const { avatarUrl, login, url } = props;
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-2">
      <Image
        src={avatarUrl || "/img/fallbackimg.png"}
        alt={`GitHub user ${login}'s avatar`}
        className="rounded-full m-2"
        width={48}
        height={48}
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row space-x-2 "
      >
        <FaExternalLinkAlt />
        <span className="align-top mx-2">{login || "Anon User"}</span>
      </a>
    </div>
  );
};

export default AuthorDisplayer;
