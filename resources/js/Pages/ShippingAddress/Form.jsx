import AppLayout from "@/Layouts/AppLayout";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import Container from "@/Components/Container";
import Select from "@/Components/Select";
import { useState } from "react";
import Checkbox from "@/Components/Checkbox";

export default function Form({ location, shipping_address, page_setting }) {
  const { data, setData, processing, recentlySuccessful, post, errors } =
    useForm({
      address: shipping_address.address,
      province: shipping_address.province_id,
      city: shipping_address.city_id,
      subdistrict: shipping_address.subdistrict_id,
      is_default: shipping_address.is_default,
      _method: page_setting.method,
    });

  const [cities, setCities] = useState(location.cities ?? []);
  const [subdistricts, setSubdistricts] = useState(location.subdistricts ?? []);

  const submit = (e) => {
    e.preventDefault();
    post(page_setting.url);
  };

  const onProvinceChange = async (e) => {
    setData("province", e.target.value);
    const response = await axios.get(route("location.city", e.target.value));
    setCities(response.data);
  };

  const onCityChange = async (e) => {
    setData("city", e.target.value);
    const response = await axios.get(
      route("location.subdistrict", e.target.value)
    );
    setSubdistricts(response.data);
  };

  return (
    <div>
      <Head title="Tambah Alamat" />
      <Container>
        <div className=" py-8">
          <div className="max-w-xl rounded-lg bg-white p-6 shadow">
            <div
              onClick={() => window.history.back()}
              className="hover mb-4 inline-flex cursor-pointer items-center gap-2 text-lg font-semibold text-slate-700 transition duration-200 hover:text-sky-600"
            >
              ← Kembali
            </div>
            <form onSubmit={submit} className="space-y-6">
              <div>
                <InputLabel htmlFor="address" value="Alamat" />

                <textarea
                  id="address"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={data.address}
                  onChange={(e) => setData("address", e.target.value)}
                  required
                />

                <InputError className="mt-2" message={errors.address} />
              </div>

              <div>
                <InputLabel htmlFor="province" value="Provinsi" />

                <Select
                  id="province"
                  placeholder={"Pilih Provinsi"}
                  options={location.provinces}
                  value={data.province}
                  onChange={onProvinceChange}
                  required
                />

                <InputError className="mt-2" message={errors.province} />
              </div>
              {cities.length > 0 && (
                <div>
                  <InputLabel htmlFor="city" value="Kota" />
                  <Select
                    placeholder={"Pilih Kota"}
                    options={cities}
                    value={data.city}
                    onChange={onCityChange}
                    required
                  />
                  <InputError className="mt-2" message={errors.city} />
                </div>
              )}

              {subdistricts.length > 0 && (
                <div>
                  <InputLabel htmlFor="subdistrict" value="Kecamatan" />
                  <Select
                    placeholder={"Pilih Kecamatan"}
                    options={subdistricts}
                    value={data.subdistrict}
                    onChange={(e) => setData("subdistrict", e.target.value)}
                    required
                  />
                  <InputError className="mt-2" message={errors.subdistrict} />
                </div>
              )}

              <div>
                <label
                  htmlFor="is_default"
                  className="flex items-center gap-x-2"
                >
                  <Checkbox
                    id="is_default"
                    name="is_default"
                    value={data.is_default}
                    checked={data.is_default}
                    onChange={(e) => setData("is_default", e.target.checked)}
                  />
                  <span>Alamat Utama</span>
                </label>
              </div>

              <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Simpan</PrimaryButton>

                <Transition
                  show={recentlySuccessful}
                  enterFrom="opacity-0"
                  leaveTo="opacity-0"
                  className="transition ease-in-out"
                >
                  <p className="text-sm text-slate-600">Saved.</p>
                </Transition>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

Form.layout = (page) => (
  <AppLayout
    header={
      <h2 className="text-xl font-semibold leading-tight text-slate-800">
        Alamat Pengiriman
      </h2>
    }
    children={page}
  />
);
