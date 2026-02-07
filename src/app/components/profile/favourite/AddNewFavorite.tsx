"use client";
import React, { useState } from "react";
import Modal from "@/app/components/ui/Modal" // import your generic Modal
import { notify } from "@/utils/toastHelper";

interface CreateCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}

const CreateCollectionModal: React.FC<CreateCollectionModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [title, setTitle] = useState("");
  const maxLength = 50;

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(title.trim() === "") {
      notify("Title cannot be empty", "error");
      return;
    }

    if (title.trim()) {
      onCreate(title.trim());
      setTitle("");
      notify("Collection created successfully!", "success");
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[400px] p-6 z-[100] bg-primary rounded-lg">
      <h2 className="text-lg font-semibold mb-4">
        Create New Collection
      </h2>

      <div className="mb-6">
        <label className="block text-sm mb-2">Title</label>
        <div className="flex items-center justify-between border rounded px-3 py-2 bg-secondary">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={maxLength}
            className="flex-1 outline-none bg-transparent text-sm"
            placeholder="Enter collection name..."
          />
          <span className="text-gray-400 text-sm">
            {maxLength - title.length}
          </span>
        </div>
      </div>

      <form className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded hover:opacity-80 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={handleCreate}
          className="px-4 py-2 rounded bg-green-500 text-white cursor-pointer hover:bg-green-600"
        >
          Create
        </button>
      </form>
    </Modal>
  );
};

export default CreateCollectionModal;
