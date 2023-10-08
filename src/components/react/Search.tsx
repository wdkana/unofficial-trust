import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import { domainResponse } from "@helpers/response";
import PopupResult from "@component/react/PopupResult";

import "react-toastify/dist/ReactToastify.css";

const searchInputSchema = z.string().min(3);
type SearchInput = z.infer<typeof searchInputSchema>;

const DEFAULT_INPUT_LABEL: string = "site url / keyword :";

const Search = () => {
  const [error, setError] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [lastSearchInput, setLastSearchInput] = useState<string | null>(null);

  const notify = (message: any) =>
    toast(message, {
      onOpen: () => setError(null),
      onClose: () => (searchInputRef.current!.value = ""),
    });

  const getTrustedData = async (searchInput: SearchInput): Promise<void> => {
    if (searchInput === lastSearchInput) return;

    setLastSearchInput(searchInput);

    const result = domainResponse(searchInput);
    notify(
      <PopupResult
        domain={result.domain}
        suggestedDomain={result.suggestedDomain}
        status={result.status}
      />
    );
  };

  const validateInput = () => {
    let searchInput = searchInputRef.current!.value;
    const validateSearchInput = searchInputSchema.safeParse(searchInput);

    !validateSearchInput.success
      ? setError(validateSearchInput.error.errors[0].message)
      : getTrustedData(validateSearchInput.data);
  };

  const handleSearchButton = (): void => {
    validateInput();
  };

  const handleEnterKeyboard = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.stopPropagation();

    if (event.key === "Enter") {
      event.preventDefault();
      validateInput();
    }
  };

  return (
    <>
      <div className="flex flex-col max-w-2xl mx-auto sm:px-4 px-8 items-center justify-center gap-4">
        <p className="pointer-events-none sm:p-2 p-1 sm:text-2xl text-md transition-all">
          {error ? error : DEFAULT_INPUT_LABEL}
        </p>
        <div className="w-full flex items-center gap-4">
          <div className="relative w-full">
            <label className="sr-only"> Search </label>
            <input
              type="text"
              className="sm:h-16 h-10 w-full rounded-full border-none bg-white text-black pe-10 sm:ps-7 ps-4 sm:text-3xl text-md shadow-sm"
              placeholder="type here..."
              name="keyword"
              ref={searchInputRef}
              onKeyDown={handleEnterKeyboard}
            />
            <button
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 sm:p-6 p-2 text-gray-600 transition hover:text-black"
              onClick={handleSearchButton}
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:hover:scale-150 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        newestOnTop
        closeOnClick
        rtl={false}
        hideProgressBar={false}
        draggable
        theme="light"
      />
    </>
  );
};

export default Search;
