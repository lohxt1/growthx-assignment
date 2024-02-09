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
  const [_image, setImage] = useState<Blob | MediaSource | null>(
    value?.name?.length > 0 ? value : null
  );

  const ref = useRef(null);

  const handleChange = (e: ChangeEvent<EventTargetWithFiles>) => {
    if (e.currentTarget.files) {
      let file = e.currentTarget.files[0];
      setImage(file);
    }
  };

  const handleRemove = (e: MouseEvent<EventTarget>) => {
    e.preventDefault();
    setImage(null);
  };

  const image = _image && URL.createObjectURL(_image);

  useEffect(() => {
    if (ref.current && _image) {
      var fileList = new DataTransfer();
      //@ts-expect-error
      fileList.items.add(_image);
      //@ts-expect-error
      ref.current.files = fileList.files;
    }
  }, []);

  return (
    <div
      className={`${className} border border-sh-five border-dashed rounded-xl flex justify-center items-center bg-bg-two relative`}
      key={id}
    >
      {image ? (
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
  const [_image] = useState<Blob | MediaSource | null>(
    value?.name?.length > 0 ? value : null
  );

  const image = _image && URL.createObjectURL(_image);

  const [seed] = useState(parseInt((Math.random() * 100).toString()));

  return (
    <div
      className={`${className} border border-sh-five border-dashed rounded-xl flex justify-center items-center bg-bg-two relative`}
      key={id}
    >
      <img
        src={image || `https://picsum.photos/id/${seed}/500/500?grayscale`}
        className="rounded-xl w-full h-full"
      />
    </div>
  );
};

export { ImagePicker, ImageStatic };
