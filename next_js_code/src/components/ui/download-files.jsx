"use client";
import { FiDownload, FiFileText } from "react-icons/fi";

export default function FilesCard() {
  const files = [
    { name: "Check Up Result.pdf", size: "123kb" },
    { name: "Medical Prescriptions.pdf", size: "123kb" },
    { name: "Check Up Result.pdf", size: "123kb" },
  ];

  return (
    <div className=" w-full h-full mr-5 max-w-[100%] ml-4 mt-4 bg-slate-100 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Files</h2>
        <button className="text-sm font-medium text-blue-600 hover:underline">
          DOWNLOAD
        </button>
      </div>

      {/* Files List */}
      <ul className="space-y-3">
        {files.map((file, index) => (
          <li
            key={index}
            className="group flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 transition"
          >
            <div className="flex items-center space-x-2">
              <FiFileText className="text-gray-500 text-lg" />
              <span className="text-sm font-medium text-blue-600 group-hover:underline cursor-pointer">
                {file.name}
              </span>
            </div>

            <div className="text-sm text-gray-500 flex items-center">
              {/* Default: Show file size; On hover: Show download icon */}
              <span className="block group-hover:hidden">{file.size}</span>
              <button className="hidden group-hover:block p-1 rounded-full hover:bg-blue-100">
                <FiDownload className="text-blue-600 text-lg" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

