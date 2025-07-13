import { IconPhoto, IconX } from "@tabler/icons-react";
import InputError from "@/Components/InputError";
import { useState } from "react";

export default function UploadImage({ setData, errors }) {
  const [imagePreview, setImagePreview] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData("picture", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setData("picture", null);
    setImagePreview(null);
  };

  return (
    <div className="mb-6 w-full max-w-xl">
      {imagePreview ? (
        <div className="relative overflow-hidden rounded-xl shadow">
          <img
            src={imagePreview}
            alt="Preview"
            className="aspect-square w-full object-cover"
          />
          <button
            onClick={clearImage}
            type="button"
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
          >
            <IconX className="h-4 w-4" />
          </button>
          {errors?.picture && (
            <div className="mt-2">
              <InputError message={errors.picture} />
            </div>
          )}
        </div>
      ) : (
        <label htmlFor="picture" className="block cursor-pointer">
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center transition hover:border-blue-400 hover:bg-blue-50">
            <IconPhoto className="h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-600">
              Upload Gambar Produk
            </p>
            <p className="text-xs text-gray-400">1080 x 1080 (1:1)</p>
          </div>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={onFileChange}
            className="sr-only"
          />
        </label>
      )}
    </div>
  );
}
