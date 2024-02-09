import { ElementRef, useEffect, useRef } from "react";

const Input = ({
  name,
  placeholder,
  className,
  value,
}: {
  name: string;
  placeholder: string;
  className?: string;
  value?: string;
}) => {
  const inputRef = useRef<ElementRef<"input">>(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.value = value || "";
      inputRef.current.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      });
    }
  }, []);

  return (
    <input
      ref={inputRef}
      name={name}
      type="text"
      placeholder={placeholder}
      className={`border-none text-tx-two max-h-[32px] bg-transparent focus:border-none focus-visible:outline-none ${className}`}
    />
  );
};

const Link = ({
  name,
  className,
  value,
}: {
  name: string;
  className?: string;
  value?: string;
}) => {
  const inputRef = useRef<ElementRef<"input">>(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.value = value || "";
      inputRef.current.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      });
    }
  }, []);

  return (
    <input
      ref={inputRef}
      name={name}
      type="text"
      placeholder={"🔗 Add Link"}
      className={`placeholder:text-bl-one border-none text-tx-one/50 max-h-[32px] bg-transparent focus:border-none focus-visible:outline-none text-sm ${className}`}
    />
  );
};

export { Link, Input };
