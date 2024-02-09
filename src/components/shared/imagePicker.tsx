import { Image } from "lucide-react";
import { ChangeEvent, MouseEvent, useState } from "react";

interface EventTargetWithFiles extends EventTarget {
  files: FileList | null;
}

const ImagePicker = ({ id, value }: { id: string; value: any }) => {
  const [_image, setImage] = useState<Blob | MediaSource | null>(
    value?.name?.length > 0 ? value : null
  );

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

  return (
    <div
      className={`w-[40px] h-[40px] border border-sh-five border-dashed rounded-xl flex justify-center items-center bg-bg-two relative`}
      key={id}
    >
      {image ? (
        <>
          <img src={image} className="h-[40px] w-[40px] rounded-xl" />
          <div
            className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 bg-re-one/30 flex justify-center items-center cursor-pointer text-tx-one"
            onClick={handleRemove}
          >
            Remove
          </div>
        </>
      ) : (
        <>
          <label htmlFor={id} className="cursor-pointer">
            <Image width={18} height={18} />
          </label>
        </>
      )}
      <input
        hidden
        id={id}
        name={id}
        // value={_image}
        type="file"
        onChange={handleChange}
        accept="image/*"
      />
    </div>
  );
};

const ImagePickerBig = ({ id, value }: { id: string; value: any }) => {
  const [_image, setImage] = useState<Blob | MediaSource | null>(
    value?.name?.length > 0 ? value : null
  );

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

  return (
    <div
      className="w-full h-[400px] p-4 border border-sh-five border-dashed rounded-xl flex justify-center items-center bg-bg-two relative"
      key={id}
    >
      {image ? (
        <>
          <img src={image} />
          <div
            className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 bg-re-one/30 flex justify-center items-center cursor-pointer text-tx-one"
            onClick={handleRemove}
          >
            Remove
          </div>
        </>
      ) : (
        <>
          <label htmlFor={id} className="cursor-pointer">
            <Image className="w-[100px] h-[100px]" />
          </label>
        </>
      )}
      <input
        hidden
        id={id}
        name={id}
        type="file"
        onChange={handleChange}
        accept="image/*"
      />
    </div>
  );
};

export { ImagePicker, ImagePickerBig };
