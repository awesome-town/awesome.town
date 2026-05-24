"use client";

import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xdajleok");

  if (state.succeeded) {
    return (
      <div className="self-stretch rounded-[4px] border border-rule bg-eggshell-deep px-8 py-10 md:max-w-[560px]">
        <p className="font-display text-2xl font-medium leading-[1.2] tracking-[-0.4px] text-ink md:text-3xl">
          Thanks. I&apos;ll be in touch.
        </p>
        <p className="mt-3 text-base leading-[1.55] text-ink-soft">
          You should hear back within a couple of days. Usually faster.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 self-stretch md:max-w-[560px]"
      noValidate
    >
      <Field name="name" label="Name" type="text" required errors={state.errors} />
      <Field name="email" label="Email" type="email" required errors={state.errors} />
      <Field name="message" label="Message" multiline required errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="self-start rounded-[4px] bg-burnt px-7 py-4 font-mono text-xs font-medium uppercase tracking-[1.4px] text-eggshell transition-colors hover:bg-burnt-deep disabled:opacity-60"
      >
        {state.submitting ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  multiline = false,
  errors,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  errors: ReturnType<typeof useForm>[0]["errors"];
}) {
  const fieldId = `contact-${name}`;
  const sharedClass =
    "rounded-[4px] border border-rule bg-transparent px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldId}
        className="font-mono text-[11px] font-medium uppercase tracking-[1.6px] text-ink-soft"
      >
        {label}
        {required && <span className="ml-1 text-burnt">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={fieldId}
          name={name}
          required={required}
          rows={5}
          className={`${sharedClass} resize-y`}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          required={required}
          className={sharedClass}
        />
      )}
      <ValidationError
        prefix={label}
        field={name}
        errors={errors}
        className="font-mono text-[11px] uppercase tracking-[1.4px] text-burnt"
      />
    </div>
  );
}
