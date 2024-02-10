import { Image } from "lucide-react";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";

interface EventTargetWithFiles extends EventTarget {
  files: FileList | null;
}

const ImagePicker = ({
  id,
  value,
  className,
}: {
  id: string;
  value: any;
  className: string;
}) => {
  const [_image, setImage] = useState<string | null>(
    value?.length > 0 ? value : null
  );
  const [isURLValid, toggleURLValid] = useState(false);

  const ref = useRef(null);

  const handleChange = (e: ChangeEvent<EventTargetWithFiles>) => {
    if (e.currentTarget.files) {
      let file = e.currentTarget.files[0];
      let _file = URL.createObjectURL(file);
      toggleURLValid(true);
      setImage(_file);
    }
  };

  const handleRemove = (e: MouseEvent<EventTarget>) => {
    e.preventDefault();
    setImage(null);
  };

  const image = _image;

  const initImage = async () => {
    if (ref.current && _image) {
      var fileList = new DataTransfer();

      const _file = await fetch(_image)
        .then((response) => response.blob())
        .then((blob) => {
          toggleURLValid(true);
          const file = new File([blob], "filename", { type: "image/*" });
          return file;
        })
        .catch((error) => {
          console.error("blob fetch error", error);
        });

      //@ts-expect-error
      fileList.items.add(_file);
      //@ts-expect-error
      ref.current.files = fileList.files;
    }
  };

  useEffect(() => {
    initImage();
  }, []);

  return (
    <div
      className={`${className} border border-sh-five border-dashed rounded-xl flex justify-center items-center bg-bg-two relative`}
      key={id}
    >
      {image && isURLValid ? (
        <>
          <img src={image} className="rounded-xl w-full h-full" />
          <div
            className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 bg-re-one/30 flex justify-center items-center cursor-pointer text-tx-one"
            onClick={handleRemove}
          >
            Remove
          </div>
        </>
      ) : (
        <>
          <label
            htmlFor={id}
            className="cursor-pointer w-full max-w-[200px] h-full p-2"
          >
            <Image className="w-full h-full" />
          </label>
        </>
      )}
      <input
        ref={ref}
        hidden
        id={id}
        name={id}
        // defaultValue={[_image]}
        type="file"
        onChange={handleChange}
        accept="image/*"
      />
    </div>
  );
};

const ImageStatic = ({
  id,
  value,
  className,
}: {
  id: string;
  value: any;
  className: string;
}) => {
  const [_image] = useState<string | null>(value?.length > 0 ? value : null);

  const [isURLValid, toggleURLValid] = useState(false);

  const image = _image;

  const [seed] = useState(parseInt((Math.random() * 100).toString()));

  useEffect(() => {
    image &&
      fetch(image)
        .then((response) => response.blob())
        .then(() => {
          toggleURLValid(true);
        });
  }, []);

  return (
    <div
      className={`${className} border border-sh-five border-dashed rounded-xl flex justify-center items-center bg-bg-two relative`}
      key={id}
    >
      {
        <img
          src={
            isURLValid && image
              ? image
              : `https://picsum.photos/id/${seed}/500/500?grayscale`
          }
          className="rounded-xl w-full h-full"
        />
      }
    </div>
  );
};

export { ImagePicker, ImageStatic };
