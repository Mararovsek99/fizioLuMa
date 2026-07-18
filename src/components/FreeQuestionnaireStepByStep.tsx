"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

type QuestionnaireInputs = {
  painLocation: string;
  duration: string;
  painLevel: number;
  aggravates: string[];
  injured: string;
  goal: string;
  name: string;
  phone?: string;
  email?: string;
  botcheck?: boolean;
};

const steps = [
  "painLocation",
  "duration",
  "painLevel",
  "aggravates",
  "injured",
  "goal",
  "contact",
] as const;

type Step = (typeof steps)[number];

const optionClass =
  "text-black flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 transition hover:border-themecolor";

export function FreeQuestionnaire() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<QuestionnaireInputs>({
    mode: "onTouched",
    defaultValues: {
      painLevel: 5,
      aggravates: [],
    },
  });

  const [stepIndex, setStepIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const currentStep: Step = steps[stepIndex];
  const painLevel = watch("painLevel", 5);
  const phone = watch("phone", "");
  const email = watch("email", "");

  const nextStep = async () => {
    let valid = true;

    if (currentStep === "contact") {
      valid = await trigger(["name", "phone", "email"]);

      if (!phone?.trim() && !email?.trim()) {
        valid = false;
        setMessage("Vnesite telefonsko številko ali e-poštni naslov.");
        setStatus("error");
      }
    } else {
      valid = await trigger(currentStep);
    }

    if (!valid) return;

    setMessage("");
    setStatus("idle");
    setStepIndex((current) => Math.min(current + 1, steps.length - 1));
  };

  const previousStep = () => {
    setMessage("");
    setStatus("idle");
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const submitForm = async (data: QuestionnaireInputs) => {
    setStatus("idle");
    setMessage("");

    if (!data.phone?.trim() && !data.email?.trim()) {
      setStatus("error");
      setMessage("Vnesite telefonsko številko ali e-poštni naslov.");
      return;
    }

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Manjka NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      }

      const questionnaire = [
        `Kje boli: ${data.painLocation}`,
        `Kako dolgo: ${data.duration}`,
        `Moč bolečine: ${data.painLevel}/10`,
        `Kaj poslabša težavo: ${data.aggravates.join(", ")}`,
        `Poškodba: ${data.injured}`,
        `Želeni cilj: ${data.goal}`,
      ].join("\n");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          phone: data.phone || "Ni navedeno",
          email: data.email || "Ni navedeno",
          message: questionnaire,
          botcheck: data.botcheck || "",
          subject: `${data.name} je izpolnil/a brezplačni vprašalnik`,
          from_name: "FizioLuma Vprašalnik",
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("Strežnik ni vrnil veljavnega odgovora.");
      }

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Vprašalnika ni bilo mogoče poslati.",
        );
      }

      setStatus("success");
      setMessage(
        "Hvala. Vaš vprašalnik smo prejeli in vam bomo odgovorili v najkrajšem možnem času.",
      );
      reset();
      setStepIndex(0);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Prišlo je do napake. Poskusite znova.",
      );
    }
  };

  return (
    <section id="freequestionnare" className="bg-gray-50 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-themecolor">
            Brezplačno in brez obveznosti
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Povejte nam, kaj vas boli
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Kratek vprašalnik vam vzame le nekaj minut. Oddaja ni rezervacija
            termina in vas ne zavezuje k plačilu.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
          noValidate
        >
          <input
            type="checkbox"
            className="hidden"
            tabIndex={-1}
            {...register("botcheck")}
          />

          <div className="mb-7">
            <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
              <span>
                Vprašanje {stepIndex + 1} od {steps.length}
              </span>
              <span>
                {Math.round(((stepIndex + 1) / steps.length) * 100)} %
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-themecolor transition-all duration-300"
                style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {status === "success" ? (
            <div className="py-8 text-center">
              <h3 className="text-2xl font-semibold text-green-600">
                Vprašalnik je bil uspešno poslan
              </h3>
              <p className="mt-3 text-gray-600">{message}</p>
            </div>
          ) : (
            <>
              {currentStep === "painLocation" && (
                <Question
                  title="Kje vas boli?"
                  error={errors.painLocation?.message}
                >
                  <RadioOptions
                    name="painLocation"
                    options={[
                      "Vrat",
                      "Rama",
                      "Hrbet",
                      "Koleno",
                      "Kolk",
                      "Gleženj",
                      "Drugo",
                    ]}
                    register={register}
                  />
                </Question>
              )}

              {currentStep === "duration" && (
                <Question
                  title="Kako dolgo imate težave?"
                  error={errors.duration?.message}
                >
                  <RadioOptions
                    name="duration"
                    options={[
                      "Manj kot teden",
                      "1–4 tedne",
                      "Več kot mesec",
                      "Več kot 3 mesece",
                    ]}
                    register={register}
                  />
                </Question>
              )}

              {currentStep === "painLevel" && (
                <Question title={`Kako močna je bolečina? ${painLevel}/10`}>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    {...register("painLevel", { valueAsNumber: true })}
                    className="w-full accent-themecolor"
                  />
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>0 – brez bolečine</span>
                    <span>10 – najhujša bolečina</span>
                  </div>
                </Question>
              )}

              {currentStep === "aggravates" && (
                <Question
                  title="Kaj težavo poslabša?"
                  error={errors.aggravates?.message as string}
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Hoja", "Sedenje", "Šport", "Dvigovanje", "Drugo"].map(
                      (option) => (
                        <label key={option} className={optionClass}>
                          <input
                            type="checkbox"
                            value={option}
                            {...register("aggravates", {
                              required: "Izberite vsaj eno možnost",
                            })}
                            className="h-4 w-4 accent-themecolor"
                          />
                          <span>{option}</span>
                        </label>
                      ),
                    )}
                  </div>
                </Question>
              )}

              {currentStep === "injured" && (
                <Question
                  title="Ste se poškodovali?"
                  error={errors.injured?.message}
                >
                  <RadioOptions
                    name="injured"
                    options={["Da", "Ne"]}
                    register={register}
                  />
                </Question>
              )}

              {currentStep === "goal" && (
                <Question
                  title="Kaj želite doseči?"
                  error={errors.goal?.message}
                >
                  <RadioOptions
                    name="goal"
                    options={[
                      "Brez bolečin",
                      "Nazaj k športu",
                      "Lažje gibanje",
                      "Drugo",
                    ]}
                    register={register}
                  />
                </Question>
              )}

              {currentStep === "contact" && (
                <Question title="Kako vas lahko kontaktiramo?">
                  <div className="space-y-4">
                    <Field
                      label="Ime in priimek"
                      error={errors.name?.message}
                      input={
                        <input
                          type="text"
                          placeholder="Janez Novak"
                          {...register("name", {
                            required: "Vnesite ime in priimek",
                          })}
                          className="text-black w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:border-themecolor focus:ring-2 focus:ring-themecolor/20"
                        />
                      }
                    />
                    <Field
                      label="Telefonska številka"
                      input={
                        <input
                          type="tel"
                          placeholder="041 123 456"
                          {...register("phone")}
                          className="text-black w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:border-themecolor focus:ring-2 focus:ring-themecolor/20"
                        />
                      }
                    />
                    <Field
                      label="E-poštni naslov"
                      error={errors.email?.message}
                      input={
                        <input
                          type="email"
                          placeholder="ime@email.com"
                          {...register("email", {
                            pattern: {
                              value: /^\S+@\S+\.\S+$/i,
                              message: "Vnesite veljaven e-poštni naslov",
                            },
                          })}
                          className="text-black w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:border-themecolor focus:ring-2 focus:ring-themecolor/20"
                        />
                      }
                    />
                    <p className="text-sm text-gray-500">
                      Vnesite telefonsko številko ali e-poštni naslov.
                    </p>
                  </div>
                </Question>
              )}

              {message && status === "error" && (
                <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {message}
                </div>
              )}

              <div className="mt-8 flex gap-3">
                {stepIndex > 0 && (
                  <button
                    type="button"
                    onClick={previousStep}
                    className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    Nazaj
                  </button>
                )}

                {currentStep !== "contact" ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto rounded-lg bg-themecolor px-6 py-3 font-semibold text-white transition hover:brightness-110"
                  >
                    Naprej
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto flex-1 rounded-lg bg-themecolor px-5 py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Pošiljanje ..." : "Pošljite vprašalnik"}
                  </button>
                )}
              </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                Oddaja je brezplačna in brez obveznosti. Ne pomeni rezervacije
                ali naročila storitve.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Question({
  title,
  error,
  children,
}: {
  title: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="min-h-[260px]">
      <legend className="mb-5 text-xl font-semibold text-gray-900">
        {title}
      </legend>
      {children}
      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
    </fieldset>
  );
}

function RadioOptions({
  name,
  options,
  register,
}: {
  name: "painLocation" | "duration" | "injured" | "goal";
  options: string[];
  register: ReturnType<typeof useForm<QuestionnaireInputs>>["register"];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <label key={option} className={optionClass}>
          <input
            type="radio"
            value={option}
            {...register(name, { required: "Izberite eno možnost" })}
            className="h-4 w-4 accent-themecolor"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-medium text-gray-700">{label}</span>
      {input}
      {error && (
        <span className="mt-1 block text-sm text-red-500">{error}</span>
      )}
    </label>
  );
}
