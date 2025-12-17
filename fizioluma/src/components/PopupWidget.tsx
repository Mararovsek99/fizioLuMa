"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";

interface FormInputs {
  name: string;
  email: string;
  message: string;
  apikey: string;
  subject: string;
  from_name: string;
  botcheck?: boolean;
}

interface PopupWidgetProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export function PopupWidget({ open, setOpen }: PopupWidgetProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormInputs>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");
  const userName = useWatch({ control, name: "name", defaultValue: "Nekdo" });

  const closeHandler = () => {
    setOpen(false);
  };

  const submitForm = async (
    data: FormInputs,
    e: React.BaseSyntheticEvent | undefined
  ) => {
    const fullData = {
      ...data,
      subject: `${userName} želi rezervirati termin`,
      from_name: "FizioLuma Obrazec",
      apikey: "5f660508-d5d5-45f4-927a-be6e851bf405",
    };

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(fullData, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e?.target.reset();
          reset();

          setTimeout(() => {
            closeHandler();
            setIsSuccess(false);
          }, 3000);
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Napaka na odjemalcu. Prosimo, poskusite znova.");
        console.error(error);
      });
  };

  return (
    <Disclosure as="div" defaultOpen={open}>
      {() => (
        <>
          {/* OVERLAY ZA ZATEMNITEV OZADJA */}
          <Transition
            show={open}
            as="div"
            className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
            enterFrom="opacity-0"
            leaveTo="opacity-0"
            onClick={closeHandler}
          />

          <DisclosureButton
            onClick={() => setOpen(!open)}
            className={`fixed z-40 flex items-center justify-center transition duration-300 bg-themecolor shadow-lg right-5 bottom-5 focus:outline-none hover:bg-themecolor focus:bg-themecolor ease 
                        w-14 h-14 rounded-full 
                        sm:w-auto sm:h-auto sm:px-6 sm:py-3 sm:rounded-md`}
          >
            <span className="sm:hidden flex items-center justify-center w-full h-full">
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-6 h-6 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
                as={"div"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Transition>
            </span>

            <span className="hidden sm:block text-white font-medium">
              {open ? "Zapri" : "REZERVIRAJ TERMIN"}
            </span>
          </DisclosureButton>

          <Transition
            show={open}
            className={`fixed z-50 transition duration-200 transform ease 
                        bottom-0 top-0 right-0 left-0 
                        sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 
                        sm:max-w-[600px] sm:max-h-[90vh]`}
            enterFrom="opacity-0 translate-y-5 sm:translate-y-10"
            leaveTo="opacity-0 translate-y-5 sm:translate-y-10"
            as="div"
          >
            <DisclosurePanel
              static
              className="flex flex-col overflow-hidden h-full w-full sm:w-full sm:min-h-[550px] sm:h-auto border border-gray-300 bg-white shadow-2xl rounded-lg"
            >
              <div className="flex flex-row items-center justify-between h-32 p-6 bg-themecolor">
                <div>
                  <h3 className="text-2xl text-white font-semibold">
                    Rezervacija termina
                  </h3>
                  <p className="text-white opacity-90">
                    Običajno odgovorim v nekaj urah
                  </p>
                </div>
                <button
                  onClick={closeHandler}
                  className="p-2 text-white transition duration-150 rounded-full hover:bg-white/20 focus:outline-none"
                  aria-label="Zapri obrazec"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="flex-grow h-full p-8 overflow-auto bg-white ">
                {!isSubmitSuccessful && (
                  <form
                    onSubmit={(e) =>
                      handleSubmit((data, event) => submitForm(data, event))(e)
                    }
                    noValidate
                  >
                    <input
                      type="hidden"
                      value="5f660508-d5d5-45f4-927a-be6e851bf405"
                      {...register("apikey")}
                    />
                    <input
                      type="hidden"
                      value={`${userName} želi rezervirati termin`}
                      {...register("subject")}
                    />
                    <input
                      type="hidden"
                      value="FizioLuma Obrazec"
                      {...register("from_name")}
                    />
                    <input
                      type="checkbox"
                      className="hidden"
                      style={{ display: "none" }}
                      {...register("botcheck")}
                    />

                    <div className="mb-4">
                      <label
                        htmlFor="full_name"
                        className="block mb-2 text-lg text-gray-700 font-medium"
                      >
                        Ime Priimek:
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        placeholder="Janez Novak"
                        {...register("name", {
                          required: "Ime in priimek je obvezno",
                          maxLength: 80,
                        })}
                        className={`w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                          errors.name
                            ? "border-red-500 focus:border-red-500 ring-red-100"
                            : "border-gray-300 focus:border-themecolor ring-themecolor/30"
                        }`}
                      />
                      {errors.name && (
                        <div className="mt-1 text-sm text-red-500 invalid-feedback">
                          {errors.name.message as string}
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-lg text-gray-700 font-medium"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Vnesite svoj email",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Vnesite veljaven e-poštni naslov",
                          },
                        })}
                        placeholder="janeznovak@gmail.com"
                        className={`w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 ring-red-100"
                            : "border-gray-300 focus:border-themecolor ring-themecolor/30"
                        }`}
                      />

                      {errors.email && (
                        <div className="mt-1 text-sm text-red-500 invalid-feedback">
                          {errors.email.message as string}
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-lg text-gray-700 font-medium"
                      >
                        Sporočilo:
                      </label>

                      <textarea
                        rows={5}
                        id="message"
                        {...register("message", {
                          required: "Vnesite svoje sporočilo",
                        })}
                        placeholder="Želim se naročiti na prvi termin in imam težave z ..."
                        className={`w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-50 border rounded-lg h-36 focus:outline-none focus:ring-2 transition-all duration-200 ${
                          errors.message
                            ? "border-red-500 focus:border-red-500 ring-red-100"
                            : "border-gray-300 focus:border-themecolor ring-themecolor/30"
                        }`}
                        required
                      ></textarea>
                      {errors.message && (
                        <div className="mt-1 text-sm text-red-500 invalid-feedback">
                          {errors.message.message as string}
                        </div>
                      )}
                    </div>
                    <div className="mb-3 mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 text-white font-semibold bg-themecolor rounded-lg focus:bg-themecolor focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110"
                      >
                        {isSubmitting ? (
                          <svg
                            className="w-5 h-5 mx-auto text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          "Pošlji sporočilo"
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {isSubmitSuccessful && isSuccess && (
                  <div className="flex flex-col items-center justify-center h-full text-center rounded-md p-4">
                    <svg
                      width="60"
                      height="60"
                      className="text-green-500"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                    <h3 className="py-5 text-2xl text-green-500 font-semibold">
                      Sporočilo je bilo uspešno poslano!
                    </h3>
                    <p className="text-gray-700 md:px-3">{Message}</p>
                    <button
                      className="mt-6 text-themecolor focus:outline-none font-semibold hover:text-themecolor/80"
                      onClick={() => reset()}
                    >
                      Nazaj na obrazec
                    </button>
                  </div>
                )}

                {isSubmitSuccessful && !isSuccess && (
                  <div className="flex flex-col items-center justify-center h-full text-center rounded-md p-4">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 97 97"
                      className="text-red-500"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>

                    <h3 className="text-xl text-red-500 py-7 font-semibold">
                      Ups, nekaj je šlo narobe!
                    </h3>
                    <p className="text-gray-700 md:px-3">{Message}</p>
                    <button
                      className="mt-6 text-themecolor focus:outline-none font-semibold hover:text-themecolor/80"
                      onClick={() => reset()}
                    >
                      Poskusi ponovno
                    </button>
                  </div>
                )}
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
