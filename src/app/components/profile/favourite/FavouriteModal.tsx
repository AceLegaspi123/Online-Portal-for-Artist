"use client";
import React from "react";
import Modal from "@/app/components/ui/Modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AddNewFavorite from "./AddNewFavorite";

interface FavouritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FavouritesModal: React.FC<FavouritesModalProps> = ({ isOpen, onClose }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [collectionTitle, setCollectionTitle] = useState("");

  console.log("Collection Title:", collectionTitle);
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[980px] w-full p-4 bg-primary rounded-lg">
      <div>
         <h2 className="text-xl font-semibold mb-2">Favourites</h2>

      </div>
     
      <p className="text-sm  mb-4">
        Create, rename, and delete your Collections. Click and drag to rearrange them.
      </p>

      <div className="space-y-3">
        <div className="flex justify-between items-center border p-2 rounded">
          <span>All 🔒</span>
          <span className="text-gray-500 text-sm">3 deviations</span>
        </div>
        <div className="flex justify-between items-center border p-2 rounded">
          <span>Featured 🔒</span>
          <span className="text-gray-500 text-sm">3 deviations</span>
        </div>
        <div className="flex justify-between items-center border p-2 rounded">
          <span>Sketch</span>
          <span className="text-gray-500 text-sm">0 deviations</span>
        </div>
      </div>

      <button onClick={() => setShowAddModal(true)} className="mt-4 w-full border rounded p-2 text-blue-600 hover:bg-blue-50">
        + New Collection
      </button>

      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Done
        </button>
      </div>

      {showAddModal && (
        <AddNewFavorite
          isOpen={showAddModal}
            onClose={() => setShowAddModal(false)}
            onCreate={(title) => {
                setCollectionTitle(title)
                setShowAddModal(false);
            }}
        />
      )}
    </Modal>
  );
};

export default FavouritesModal;
