"use client";
import Button from "@/components/ui/Button";
import ImageUploadField from "../createLinkPage/ImageDropzone";
import InputField from "@/components/ui/InputField";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import { useState, useEffect } from "react";
import { createProduct, getProduct } from "@/services/apiClient";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const ProductCreate = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { isSubmitting }, control } = useForm();
const router = useRouter();

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await getProduct();
        const currencyData = res?.data?.data?.currency_data || [];

        const options = currencyData.map((c) => ({
          value: c.id,
          label: `${c.name} (${c.symbol})`,
        }));

        setCurrencyOptions(options);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    console.log(formData);
    formData.append("product_name", data.product_name);
    formData.append("price", data.price);
    formData.append("desc", data.desc || "");
    formData.append("currency", data.currency);

    if (data.image?.file) {
      formData.append("image", data.image.file);
    }

    try {
      const loadingToastId = toast.loading("Submitting product...");

      const response = await createProduct(formData);

      if (response?.data?.message?.success?.length) {
        response.data.message.success.forEach((msg) => {
          toast.success(msg, { id: loadingToastId });
        });
      } else {
        toast.success("Product created successfully!", { id: loadingToastId });
      }
      router.push('/dashboard/products')
    } catch (error) {
      if (error?.response?.data?.message?.error?.length) {
        error.response.data.message.error.forEach((msg) => {
          toast.error(msg, { duration: 5000 });
        });
      } else {
        toast.error(error.message || "Failed to create product.", {
          duration: 5000,
        });
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h4 className="text-2xl font-bold text-secondery/80 mb-4">
        Product Create
      </h4>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Image Upload */}
          <div className="flex flex-col">
            <Controller
              name="image"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <ImageUploadField
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          {/* Right Side: Basic Info */}
          <div className="space-y-4">
            <div>
              <InputField
                label={"Product Name"}
                type="text"
                placeholder={"Enter Product Name..."}
                {...register("product_name", { required: true })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text/80 mb-2">
                Currency{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>

              <Controller
                name="currency"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    {...field}
                    options={currencyOptions}
                    instanceId="currency-select"
                    placeholder={loading ? "Loading..." : "Select Currency"}
                    styles={reactSelectStyles}
                    isSearchable
                    isLoading={loading}
                    value={
                      currencyOptions.find(
                        (option) => option.value === field.value
                      ) || null
                    }
                    onChange={(val) => field.onChange(val?.value || "")}
                  />
                )}
              />
            </div>

            <div>
              <InputField
                label={"Price"}
                type="number"
                placeholder={"Enter Amount..."}
                {...register("price", { required: true })}
              />
            </div>
          </div>
        </div>

        {/* Bottom Side: Description */}
        <div>
          <InputField
            label={"Description"}
            type="textarea"
            placeholder={"Write Here..."}
            {...register("desc")}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full flex justify-center" size="lg">
        
          {isSubmitting ? (
              <>
                <Loader2 className="size-6 animate-spin" />
              </>
            ) : (
              "Submit"
            )}
        </Button>
      </form>
    </div>
  );
};

export default ProductCreate;
