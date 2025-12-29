// "use client";

// import Image from "next/image";
// import { Upload, Mail, Trash2, X } from "lucide-react";
// import Button from "@/components/ui/Button";
// import InputField from "@/components/ui/InputField";
// import { useEffect, useRef, useState } from "react";
// import profile from "@assets/profile-default.webp";
// import toast, { Toaster } from "react-hot-toast";
// import { deleteAPI, getUserProfileAPI } from "@/services/apiClient";
// import SkeletonLoader from "@/components/Sheared/Skeleton";

// const ProfilePage = () => {
//   const fileRef = useRef(null);
//   const [avatarPreview, setAvatarPreview] = useState(profile);
//   const [profileData, setProfileData] = useState(null);
//   console.log(profileData);
//   const [loading, setLoading] = useState(true);
//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   const [deleting, setDeleting] = useState(false);

//   const handleAvatarChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     console.log(e.target.files);

//     const previewUrl = URL.createObjectURL(file);
//     setAvatarPreview(previewUrl);
//   };

//   const fetchProfile = async () => {
//     try {
//       const res = await getUserProfileAPI();
//       const user = res?.data?.data?.user;
//       setProfileData(user);
//     } catch (err) {
//       const messages = err?.response?.data?.message?.error;

//       if (Array.isArray(messages)) {
//         messages.forEach((msg) => {
//           toast.error(msg, { position: "top-right" });
//         });
//       } else if (messages) {
//         toast.error(messages, { position: "top-right" });
//       } else {
//         toast.error("Failed to verify OTP. Please try again.", {
//           position: "top-right",
//         });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile()
//   }, [])

//   const handleDelete = async () => {
//     setDeleting(true);
//     try {
//       const res = await deleteAPI();
//       toast.success(res?.data?.message || "Profile deleted successfully!");
//       setShowModal(false);
//     }  catch (err) {
//       const messages = err?.response?.data?.message?.error;

//       if (Array.isArray(messages)) {
//         messages.forEach((msg) => {
//           toast.error(msg, { position: "top-right" });
//         });
//       } else if (messages) {
//         toast.error(messages, { position: "top-right" });
//       } else {
//         toast.error("Failed to verify OTP. Please try again.", {
//           position: "top-right",
//         });
//       }
//     } finally {
//       setDeleting(false);
//     }
//   };

//   if (loading) {
//     return <SkeletonLoader />
//   }
//   return (
//     <div className="max-w-6xl mx-auto px-4 ">
//       <Toaster position="top-right" />
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//         <h4>User Profile</h4>
//         <Button
//           onClick={() => setShowModal(true)}
//           rightIcon={<Trash2 size={20} />}
//           className="bg-red-600!"
//         >
//           Delete Profile
//         </Button>
//       </div>

//       <div className="space-y-6">
//         <div className="bg-white rounded-2xl  overflow-hidden border border-text/10">
//           {/* Cover */}
//           <div className="relative h-48 bg-linear-to-r from-primary to-primary">
//             {/* Avatar */}
//             <div className="absolute -bottom-14 left-8">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
//                   <Image
//                     src={avatarPreview}
//                     alt="Profile"
//                     width={128}
//                     height={128}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>

//                 {/* Upload Button */}
//                 <button
//                   type="button"
//                   onClick={() => fileRef.current.click()}
//                   className="absolute bottom-1 right-1 bg-slate-900 p-2 rounded-full text-white border-2 border-white hover:bg-slate-700 transition cursor-pointer"
//                 >
//                   <Upload size={14} />
//                 </button>

//                 {/* Hidden Input */}
//                 <input
//                   type="file"
//                   accept="image/*"
//                   ref={fileRef}
//                   hidden
//                   onChange={handleAvatarChange}
//                 />
//               </div>
//             </div>

//             {/* Info */}
//             <div className="absolute bottom-6 left-44">
//               <h4 className="text-xl font-bold text-white! ">App Devs</h4>
//               <div className="flex items-center text-indigo-100 text-sm mt-1">
//                 <Mail size={14} className="mr-2" />
//                 user@appdevs.net
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="pt-20 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[{ label: "First Name*", defaultValue: "App", name: "firstName" },
//             { label: "Last Name*", defaultValue: "Devs", name: "lastName" }].map(
//               (item) => (
//                 <InputField
//                   key={item.name}
//                   label={item.label}
//                   name={item.name}
//                   defaultValue={item.defaultValue}
//                   required
//                 />
//               )
//             )}

//             <div className="flex flex-col gap-1 w-full">
//               <label className="block text-sm font-medium text-text/80 mb-1">
//                 Country <span className="text-red-500">*</span>
//               </label>
//               <select className="w-full bg-white border border-[#e5e5e5] rounded-[5px] h-[45px] px-[15px] text-[14px] font-medium text-[#425466] outline-none focus:border-primary">
//                 <option>Bangladesh</option>
//               </select>
//             </div>

//             <InputField
//               label="Mobile"
//               name="mobile"
//               placeholder="Enter Number..."
//               type="text"
//             />

//             <div className="md:col-span-2">
//               <InputField label="Company Name" name="company" defaultValue="ABC LTD" />
//             </div>

//             {["Address", "City", "State", "Zip Code"].map((field) => (
//               <InputField
//                 key={field}
//                 label={field}
//                 name={field.toLowerCase().replace(" ", "_")}
//               />
//             ))}
//           </div>

//           <div className="p-8 pt-0">
//             <Button className="w-full">Update Profile</Button>
//           </div>
//         </div>
//       </div>

//       {/* Delete Confirmation Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 w-full max-w-sm relative">
//             <button
//               className="absolute top-4 right-4"
//               onClick={() => setShowModal(false)}
//             >
//               <X size={18} />
//             </button>
//             <h4 className="text-lg font-semibold text-center mb-4">
//               Are you sure you want to delete your profile?
//             </h4>
//             <div className="flex justify-center gap-4">
//               <Button
//                 className="bg-red-600!"
//                 onClick={handleDelete}
//                 disabled={deleting}
//               >
//                 {deleting ? "Deleting..." : "Confirm Delete"}
//               </Button>
//               <Button onClick={() => setShowModal(false)}>Cancel</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;

// "use client";

// import Image from "next/image";
// import { Upload, Mail, Trash2, X, Loader2 } from "lucide-react";
// import Button from "@/components/ui/Button";
// import InputField from "@/components/ui/InputField";
// import { useEffect, useRef, useState, useMemo } from "react";
// import profile from "@assets/profile-default.webp";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   deleteAPI,
//   getUserProfileAPI,
//   updateProfileAPI,
// } from "@/services/apiClient";
// import SkeletonLoader from "@/components/Sheared/Skeleton";
// import { Controller, useForm } from "react-hook-form";
// import Select from "react-select";
// import { reactSelectStyles } from "@/style/selectStyles";
// import countryList from "react-select-country-list";

// const ProfilePage = () => {
//   /* ================= IMAGE STATES ================= */
//  const countryOptions = useMemo(() => countryList().getData(), []);

//   // 🔹 default image (from backend)
//   const [defaultProfileImage, setDefaultProfileImage] = useState(profile);

//   // 🔹 final image shown in UI
//   const [avatarPreview, setAvatarPreview] = useState(profile);

//   // 🔹 uploaded file
//   const [imageFile, setImageFile] = useState(null);
//   const fileRef = useRef(null);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [deleting, setDeleting] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//         control,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   /* ================= IMAGE ================= */
//   const handleAvatarChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     setImageFile(file);
//     setAvatarPreview(URL.createObjectURL(file));
//   };

//   /* ================= FETCH PROFILE ================= */
//   const fetchProfile = async () => {
//     try {
//       const res = await getUserProfileAPI();
//       const data = res?.data?.data;
//       const user = data?.user;

//       /* ====== CHANGE 1: default image from backend ====== */
//       const defaultImgUrl = `${data.base_ur}/${data.default_image}`;
//       setDefaultProfileImage(defaultImgUrl);

//       /* ====== CHANGE 2: profile image logic ====== */
//       if (user?.image) {
//         // user has image → show profile image
//         setAvatarPreview(`${data.base_ur}/${data.image_path}/${user.image}`);
//       } else {
//         // user has no image → show default image
//         setAvatarPreview(defaultImgUrl);
//       }

//       reset({
//         first_name: user?.first_name || "",
//         last_name: user?.last_name || "",
//         company: user?.address?.company_name || "",
//         mobile: user?.mobile || "",
//         country: "Bangladesh",
//         city: user.address?.city || "",
//         state: user.address?.state || "",
//         zip_code: user.address?.zip_code || "",
//         address: user.address?.address || "",
//       });

//     } catch (err) {
//       toast.error("Failed to load profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);
//   useEffect(() => {}, [defaultProfileImage]);

//   /* ================= SUBMIT ================= */
//   const onSubmit = async (data) => {
//     const formData = new FormData();

//     formData.append("first_name", data.first_name);
//     formData.append("last_name", data.last_name);
//     formData.append("company_name", data.company || "");
//     formData.append("phone", data.mobile || "");
//     formData.append("country", "Bangladesh");
//     formData.append("city", data.city || "");
//     formData.append("state", data.state || "");
//     formData.append("zip_code", data.zip_code || "");
//     formData.append("address", data.address || "");

//     if (imageFile) {
//       formData.append("image", imageFile);
//     }

//     try {
//       const toastId = toast.loading("Updating profile...");
//       await updateProfileAPI(formData);
//       toast.success("Profile updated successfully", { id: toastId });
//       fetchProfile();
//     } catch (err) {
//       const errors = err?.response?.data?.message?.error;
//       if (Array.isArray(errors)) {
//         errors.forEach((e) => toast.error(e));
//       } else {
//         toast.error("Update failed");
//       }
//     }
//   };

//   /* ================= DELETE ================= */
//   const handleDelete = async () => {
//     setDeleting(true);
//     try {
//       await deleteAPI();
//       toast.success("Profile deleted successfully");
//       setShowModal(false);
//     } catch {
//       toast.error("Delete failed");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   if (loading) return <SkeletonLoader />;

//   return (
//     <div className="max-w-6xl mx-auto px-4">
//       <Toaster position="top-right" />

//       {/* Header */}
//       <div className="flex justify-between mb-6">
//         <h4>User Profile</h4>
//         <Button
//           onClick={() => setShowModal(true)}
//           rightIcon={<Trash2 size={18} />}
//           className="bg-red-600!"
//         >
//           Delete Profile
//         </Button>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="bg-white overflow-hidden rounded-xl border border-text/10">
//           {/* COVER */}
//           <div className="relative h-48  bg-primary">
//             <div className="absolute -bottom-14 left-8">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
//                   <Image
//                     src={avatarPreview}
//                     width={128}
//                     height={128}
//                     alt="profile"
//                     className="object-cover"
//                   />
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => fileRef.current.click()}
//                   className="absolute bottom-1 right-1 bg-black p-2 rounded-full text-white"
//                 >
//                   <Upload size={14} />
//                 </button>

//                 <input
//                   type="file"
//                   hidden
//                   accept="image/*"
//                   ref={fileRef}
//                   onChange={handleAvatarChange}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* FORM */}
//           <div className="pt-20 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <InputField
//               label="First Name*"
//               {...register("first_name", { required: true })}
//             />
//             <InputField
//               label="Last Name*"
//               {...register("last_name", { required: true })}
//             />

//             <InputField label="Mobile" {...register("mobile")} />


//           {/* Country */}
//           <div>
//             <label className="text-sm font-medium text-slate-700 mb-1 block">
//               Country *
//             </label>
//             <Controller
//               name="country"
//               control={control}
//               rules={{ required: "Country is required" }}
//               render={({ field }) => (
//                 <Select
//                   {...field}
//                   options={countryOptions}
//                   placeholder="Select Country"
//                     instanceId="currency-select"
//                   styles={reactSelectStyles}
//                   isSearchable
//                 />
//               )}
//             />
//             {errors.country && (
//               <p className="text-red-500! text-xs">{errors.country.message}</p>
//             )}
//           </div>

//             <InputField label="Company" {...register("company")} />

//             <InputField label="City" {...register("city")} />
//             <InputField label="State" {...register("state")} />
//             <InputField label="Zip Code" {...register("zip_code")} />

//             <div className="md:col-span-2">
//               <InputField label="Address" {...register("address")} />
//             </div>
//           </div>

//           <div className="p-8 pt-0">
//             <Button type="submit" className="w-full">
//               {isSubmitting ? (
//                 <Loader2 className="animate-spin" />
//               ) : (
//                 "Update Profile"
//               )}
//             </Button>
//           </div>
//         </div>
//       </form>

//       {/* DELETE MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-xl">
//             <h4 className="mb-4">Delete your profile?</h4>
//             <div className="flex gap-4">
//               <Button
//                 className="bg-red-600!"
//                 onClick={handleDelete}
//                 disabled={deleting}
//               >
//                 {deleting ? "Deleting..." : "Confirm"}
//               </Button>
//               <Button onClick={() => setShowModal(false)}>Cancel</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;



"use client";

import Image from "next/image";
import { Upload, Mail, Trash2, X, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { useEffect, useRef, useState, useMemo } from "react";
import profile from "@assets/profile-default.webp";
import toast from "react-hot-toast";
import {
  deleteAPI,
  getUserProfileAPI,
  updateProfileAPI,
} from "@/services/apiClient";
import SkeletonLoader from "@/components/Sheared/Skeleton";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import countryList from "react-select-country-list";

const ProfilePage = () => {
  /* ================= IMAGE STATES ================= */
  const countryOptions = useMemo(() => countryList().getData(), []);
  const bangladeshOption = countryOptions.find(c => c.label === "Bangladesh");

  const [defaultProfileImage, setDefaultProfileImage] = useState(profile);
  const [avatarPreview, setAvatarPreview] = useState(profile);
  const [imageFile, setImageFile] = useState(null);
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  /* ================= IMAGE ================= */
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  /* ================= HELPER ================= */
  const getCountryOption = (countryName) => {
    return countryOptions.find(
      (c) =>
        c.label.toLowerCase() === countryName?.toLowerCase() ||
        c.value.toLowerCase() === countryName?.toLowerCase()
    );
  };

  /* ================= FETCH PROFILE ================= */
  const fetchProfile = async () => {
    try {
      const res = await getUserProfileAPI();
      const data = res?.data?.data;
      const user = data?.user;
      setUser(user)
      console.log(user);
      const defaultImgUrl = `${data.base_ur}/${data.default_image}`;
      setDefaultProfileImage(defaultImgUrl);

      if (user?.image) {
        setAvatarPreview(`${data.base_ur}/${data.image_path}/${user.image}`);
      } else {
        setAvatarPreview(defaultImgUrl);
      }

      reset({
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        company: user?.address?.company_name || "",
        mobile: user?.mobile || "",
        country: getCountryOption(user?.address?.country || "Bangladesh"),
        city: user?.address?.city || "",
        state: user?.address?.state || "",
        zip_code: user?.address?.zip_code || "",
        address: user?.address?.address || "",
      });
    } catch (err) {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  /* ================= SUBMIT ================= */
  const onSubmit = async (data) => {
    console.log(data.country?.label);
    const formData = new FormData();

    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("company_name", data.company || "");
    formData.append("phone", data.mobile || "");
    formData.append("country", data.country?.label || "");
    formData.append("city", data.city || "");
    formData.append("state", data.state || "");
    formData.append("zip_code", data.zip_code || "");
    formData.append("address", data.address || "");

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const toastId = toast.loading("Updating profile...");
      await updateProfileAPI(formData);
      toast.success("Profile updated successfully", { id: toastId });
      fetchProfile();
    } catch (err) {
      const errors = err?.response?.data?.message?.error;
      if (Array.isArray(errors)) {
        errors.forEach((e) => toast.error(e));
      } else {
        toast.error("Update failed");
      }
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteAPI();
      toast.success("Profile deleted successfully");
      setShowModal(false);
    } catch {
      toast.error("Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <SkeletonLoader />;

  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <h4>User Profile</h4>
        <Button
          onClick={() => setShowModal(true)}
          rightIcon={<Trash2 size={18} />}
          className="bg-red-600!"
        >
          Delete Profile
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white overflow-hidden rounded-xl border border-text/10">
          {/* COVER */}
          <div className="relative h-48  bg-primary/90">
            <div className="absolute -bottom-14 left-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src={avatarPreview}
                    width={128}
                    height={128}
                    alt="profile"
                    className="object-cover"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => fileRef.current.click()}
                  className="absolute bottom-1 right-1 cursor-pointer bg-black p-2 rounded-full text-white"
                >
                  <Upload size={14} />
                </button>

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  ref={fileRef}
                  onChange={handleAvatarChange}
                />
              </div>
            </div>
                     {/* Info */}
            <div className="absolute bottom-6 left-44">
              <h4 className="text-xl font-bold text-white! ">{user.first_name + user.last_name}</h4>
              <div className="flex items-center text-indigo-100 text-sm mt-1">
                <Mail size={14} className="mr-2" />
               {user.email}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="pt-20 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="First Name*"
              {...register("first_name", { required: true })}
            />
            <InputField
              label="Last Name*"
              {...register("last_name", { required: true })}
            />
            <InputField label="Mobile" {...register("mobile")} />

            {/* Country select */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">
                Country *
              </label>
              <Controller
  name="country"
  control={control}
  defaultValue={bangladeshOption} 
  render={({ field }) => (
    <Select
      {...field}
      options={countryOptions}
      placeholder="Select Country"
      instanceId="country-select"
      styles={reactSelectStyles}
      isSearchable
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      onChange={(val) => field.onChange(val)}
    />
  )}
/>
              {errors.country && (
                <p className="text-red-500! text-xs">{errors.country.message}</p>
              )}
            </div>

            <InputField label="Company" {...register("company")} />
            <InputField label="City" {...register("city")} />
            <InputField label="State" {...register("state")} />
            <InputField label="Zip Code" {...register("zip_code")} />
            <div className="md:col-span-2">
              <InputField label="Address" {...register("address")} />
            </div>
          </div>

          <div className="p-8 pt-0">
            <Button type="submit" className="w-full">
              {isSubmitting ? <Loader2 className="animate-spin" /> : "Update Profile"}
            </Button>
          </div>
        </div>
      </form>

      {/* DELETE MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl">
            <h4 className="mb-4">Delete your profile?</h4>
            <div className="flex gap-4">
              <Button
                className="bg-red-600!"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Confirm"}
              </Button>
              <Button onClick={() => setShowModal(false)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
