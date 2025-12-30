"use client";
import Button from "@/components/ui/Button";

import InputField from "@/components/ui/InputField";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import { useState, useEffect } from "react";
import { editProduct, ProductEdit } from "@/services/apiClient";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import SkeletonLoader from "@/components/Sheared/Skeleton";
import ImageUploadField from "../createLinkPage/ImageDropzone";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const EditProduct = ({ id }) => {
  const productId = id;
  const router = useRouter();

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [baseUrl, setBaseUrl] = useState("");
  const [imagePath, setImagePath] = useState("");

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      product_name: "",
      price: "",
      desc: "",
      currency: "",
      image: null,
    },
  });

  // Fetch product + currency data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ProductEdit(productId);
        const currencyData = res?.data?.data?.currency_data || [];
        const productData = res?.data?.data?.product;
        const data = res?.data?.data;
        setBaseUrl(data?.base_url || "");
        setImagePath(data?.image_path || "");

        const options = currencyData.map((c) => ({
          value: c.id,
          label: `${c.name} (${c.symbol})`,
        }));
        setCurrencyOptions(options);

        // --- Reset form fields except currency ---
        if (productData) {
          reset({
            product_name: productData.product_name || "",
            price: productData.price || "",
            desc: productData.desc || "",
            currency: "", // set separately
            image: productData.image
              ? {
                  preview: productData.image,
                  file: null,
                }
              : null,
          });
          console.log(productData);

          // --- Set currency separately for react-select ---
          const selectedCurrency = options.find(
            (o) =>
              o.label.includes(productData.currency_name) ||
              o.value === productData.currency
          );
          if (selectedCurrency) {
            setValue("currency", selectedCurrency.value);
          }
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId, reset, setValue]);

  // Submit handler
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("product_name", data.product_name);
    formData.append("price", data.price);
    formData.append("desc", data.desc || "");
    formData.append("currency", data.currency);
    formData.append("target", productId);

    if (data.image?.file) {
      formData.append("image", data.image.file);
    }

    try {
      const loadingToastId = toast.loading("Submitting product...");

      const response = await editProduct(formData);

      if (response?.data?.message?.success?.length) {
        response.data.message.success.forEach((msg) => {
          toast.success(msg, { id: loadingToastId });
        });
      } else {
        toast.success("Product Update successfully!", { id: loadingToastId });
      }
      router.push("/dashboard/products");
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

  // Loading skeleton
  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h4 className="text-2xl font-bold text-secondery/80 mb-4">
        Edit Product
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
                  baseUrl={baseUrl}
                  imagePath={imagePath}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          {/* Right Side: Basic Info */}
          <div className="space-y-4">
            <InputField
              label="Product Name"
              type="text"
              placeholder="Enter Product Name..."
              {...register("product_name", { required: true })}
            />

            <div>
              <label className="block text-sm font-medium text-text/80 mb-2">
                Currency <span className="text-red-500">*</span>
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

            <InputField
              label="Price"
              type="number"
              placeholder="Enter Amount..."
              {...register("price", { required: true })}
            />
          </div>
        </div>

        {/* Bottom Side: Description */}
        <InputField
          label="Description"
          type="textarea"
          placeholder="Write Here..."
          {...register("desc")}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full flex justify-center" size="lg">
          {isSubmitting ? (
            <>
              <Loader2 className="size-6 animate-spin" />
            </>
          ) : (
            "Update"
          )}
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
