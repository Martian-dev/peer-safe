import { useState } from "react";
import BaseButton from "../BaseButton";

const buttonStyle =
  "py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-full text-sm";

const FileTile = ({
  filename,
  downloadFunc,
  deleteFunc,
  ipfsHash,
}: {
  filename: string;
  downloadFunc: () => Promise<void>;
  deleteFunc: () => Promise<void>;
  ipfsHash: string;
}) => {
  const deleteKey = `deleting-${ipfsHash}`;
  const [downloadingFile, setDownloadingFile] = useState(false);
  const [deletingFile, setDeletingFile] = useState(
    sessionStorage.getItem(deleteKey) !== null
  );

  return (
    <div className="relative flex h-[8.5rem] w-56 backdrop-blur-sm before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:rounded-md before:bg-glass before:opacity-10 before:content-['']">
      {downloadingFile || deletingFile ? (
        <span className="z-10 flex flex-1 cursor-wait items-center justify-center self-stretch text-zinc-300">
          {downloadingFile ? "downloading..." : "deleting..."}
        </span>
      ) : (
        <div className="flex max-w-full flex-1 flex-col justify-between p-4">
          <span className="z-10 line-clamp-2 overflow-hidden text-ellipsis break-words">
            {filename}
          </span>
          <div className="z-10 flex gap-4">
            <BaseButton
              className={buttonStyle}
              onClick={async () => {
                setDownloadingFile(true);
                await downloadFunc();
                setDownloadingFile(false);
              }}
            >
              Download
            </BaseButton>
            <BaseButton
              className={buttonStyle}
              onClick={async () => {
                setDeletingFile(true);
                sessionStorage.setItem(deleteKey, "true");
                await deleteFunc();
                sessionStorage.removeItem(deleteKey);
                setDeletingFile(false);
              }}
            >
              Delete
            </BaseButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileTile;
