import AppLayout from "@/Layouts/AppLayout";
import { Head, router, useForm } from "@inertiajs/react";
import Container from "@/Components/Container";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react";
import TextInput from "@/Components/TextInput";
import { IconSquareRoundedPlusFilled, IconTrash } from "@tabler/icons-react";
import { NumericFormat } from "react-number-format";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import UploadImage from "@/Components/UploadImage";
import Select from "@/Components/Select";

export default function Form({ categories, product, page_settings }) {
  const { data, setData, errors, post, processing, reset } = useForm({
    category_id: product.category_id || 0,
    picture: "",
    name: product.name || "",
    weight: product.weight || 0,
    slug: product.slug || "",
    description: product.description || "",
    price: product.price || 0,
    _method: page_settings.method,
  });

  const [inputFields, setInputFields] = useState(
    product.variations?.length > 0
      ? product.variations
      : [
          {
            attribute_1: "",
            attribute_2: "",
            price: "",
            stock: "",
            weight: data.weight,
          },
        ]
  );

  const submit = (e) => {
    e.preventDefault();
    router.post(
      page_settings.url,
      {
        ...data,
        variations: inputFields,
      },
      {
        preserveScroll: true,
        onSuccess: () => {
          reset();
          setInputFields([
            {
              attribute_1: "",
              attribute_2: "",
              price: "",
              stock: "",
              weight: 0,
            },
          ]);
        },
      }
    );
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        attribute_1: "",
        attribute_2: "",
        price: 0,
        stock: 0,
        weight: 0,
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const onChange = (e) => setData(e.target.name, e.target.value);

  return (
    <div>
      <Head title="Kelola Produk" />
      <Container>
        <div className="mt-10 rounded-xl bg-white p-6 shadow-sm sm:p-8">
          <form onSubmit={submit} className="space-y-6">
            <UploadImage errors={errors} setData={setData} />

            <div>
              <InputLabel htmlFor="name" value="Nama Produk" />
              <TextInput
                name="name"
                value={data.name}
                onChange={onChange}
                className="mt-1 block w-full"
              />
              <InputError message={errors.name} />
            </div>

            {/* Harga */}
            <div>
              <InputLabel htmlFor="price" value="Harga Produk" />
              <NumericFormat
                className="mt-1 block w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
                name="price"
                prefix="Rp "
                thousandSeparator
                allowNegative={false}
                decimalScale={0}
                value={data.price}
                onValueChange={(values) => {
                  setData("price", values.floatValue);
                }}
              />
              <InputError message={errors.price} />
            </div>

            {/* Berat */}
            <div>
              <InputLabel htmlFor="weight" value="Berat Produk" />
              <TextInput
                type="number"
                name="weight"
                placeholder="Contoh: 200"
                value={data.weight}
                onChange={onChange}
                className="mt-1 block w-full"
              />
              <InputError message={errors.weight} />
            </div>

            {/* Kategori */}
            <div>
              <InputLabel htmlFor="category_id" value="Kategori" />
              <Select
                name="category_id"
                options={categories}
                value={data.category_id}
                onChange={onChange}
                className="mt-1 block w-full"
              />
              <InputError message={errors.category_id} />
            </div>

            {/* Deskripsi */}
            <div>
              <InputLabel htmlFor="description" value="Deskripsi" />
              <textarea
                name="description"
                rows="4"
                value={data.description}
                onChange={onChange}
                className="mt-1 block w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
              <InputError message={errors.description} />
            </div>

            {/* Variasi */}
            <div className="rounded-md border border-slate-200 p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-700">
                  Variasi Produk
                </h3>
                <button
                  type="button"
                  onClick={handleAddFields}
                  className="flex items-center gap-1 rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                >
                  <IconSquareRoundedPlusFilled size={16} />
                  Tambah
                </button>
              </div>

              <div className="space-y-3">
                {inputFields.map((field, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-3 sm:grid-cols-6"
                  >
                    <TextInput
                      name="attribute_1"
                      placeholder="Warna"
                      value={field.attribute_1}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <TextInput
                      name="attribute_2"
                      placeholder="Ukuran"
                      value={field.attribute_2}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <TextInput
                      name="price"
                      type="number"
                      placeholder="Harga"
                      value={field.price}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <TextInput
                      name="stock"
                      type="number"
                      placeholder="Stok"
                      value={field.stock}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <TextInput
                      name="weight"
                      type="number"
                      placeholder="Berat"
                      value={field.weight}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                      className="flex h-10 w-full items-center justify-center rounded-md bg-rose-100 text-rose-600 hover:bg-rose-200"
                    >
                      <IconTrash className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol Submit */}
            <div>
              <PrimaryButton
                route={route("products.list")}
                className="w-full justify-center rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                disabled={processing}
              >
                Simpan Produk
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

Form.layout = (page) => (
  <AppLayout
    header={
      <div className="flex justify-center py-4">
        <h2 className="text-2xl font-semibold text-slate-800 drop-shadow-sm">
          {page.props.page_settings.title}
        </h2>
      </div>
    }
    children={page}
  />
);
