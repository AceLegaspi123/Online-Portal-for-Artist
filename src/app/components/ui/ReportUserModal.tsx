"use client";

import { useState } from "react";

interface ReportUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  violationLogId: string;
  reportedUserId: string;
  reporterId: string;
}

const ReportUserModal = ({
  isOpen,
  onClose,
  violationLogId,
  reportedUserId,
  reporterId,
}: ReportUserModalProps) => {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reportData = {
      VIOLATION_LOG_ID: violationLogId,
      REPORTED_USER_ID: reportedUserId,
      REPORTER_ID: reporterId,
      REASON: reason,
      DESCRIPTION: description,
      STATUS: "PENDING",
    };

    console.log("User Report Submitted:", reportData);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-lg rounded-2xl bg-primary p-6 shadow-xl">
        
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Report User
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Reasons */}
          <div>
            <label className="mb-1 block text-sm text-zinc-300">
              Reason
            </label>
            <select
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full rounded-lg bg-secondary px-3 py-2 text-white outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Select a violation
              </option>
              <option value="Harassment or Hate Speech">
                Harassment or Hate Speech
              </option>
              <option value="Impersonation">
                Impersonation
              </option>
              <option value="Scam or Fraud">
                Scam or Fraud
              </option>
              <option value="Inappropriate Behavior">
                Inappropriate Behavior
              </option>
              <option value="Spam">
                Spam
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block text-sm text-zinc-300">
              Description
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue or behavior in detail..."
              className="h-28 w-full resize-none rounded-lg bg-secondary px-3 py-2 text-white outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-secondary px-4 py-2 text-sm text-white hover:opacity-100 opacity-80 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 cursor-pointer"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportUserModal;
