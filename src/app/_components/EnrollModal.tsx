"use client";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Turnstile } from "@marsidev/react-turnstile";
import { frontendApi } from "@/api/api";
import useBodyScrollLock from "@/hook/useScrollLock";


const FormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  phone_code: z.string(),
  phone_number: z.string().min(6, "Phone number must be minimum of 6 digits"),
  address: z.string().min(2, "Address is required"),
  email: z.string().email("Invalid email address"),
});

type TFormSchema = z.infer<typeof FormSchema>;

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SITE_KEY = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY || "";

export default function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
  const captchaToken = useRef<string | null>(null);
 useBodyScrollLock(isOpen)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: { phone_code: "+91" },
  });

  const onSubmit = async (data: TFormSchema) => {
    if (!captchaToken.current) {
      toast.error("Please complete the captcha");
      return;
    }

    try {
      const response = await frontendApi.EnquiryForm({
        ...data,
        recaptcha_token: captchaToken.current,
      });

      if (response?.status) {
        toast.success("Your enquiry was submitted successfully!");
        captchaToken.current = null;
        reset();
        onClose();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[99999] " onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-[#0f0f0f] overflow-hidden p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <Dialog.Title className="text-xl font-semibold text-white">
                  Enroll Now
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-xl text-white/60 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  register={register("name")}
                  error={errors.name?.message}
                />

                <Input
                  placeholder="Phone Number"
                  register={register("phone_number")}
                  error={errors.phone_number?.message}
                />

                <Input
                  placeholder="Address"
                  register={register("address")}
                  error={errors.address?.message}
                />

                <Input
                  placeholder="Email"
                  register={register("email")}
                  error={errors.email?.message}
                />

                <Turnstile
                  siteKey={SITE_KEY}
                  onSuccess={(token) => (captchaToken.current = token)}
                  onExpire={() => (captchaToken.current = null)}
                  onError={(e) => {
                    console.error(e);
                    toast.error("Captcha failed");
                  }}
                  className="mt-4"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-[#F3C070] to-[#cfa34f] py-3 font-semibold text-black hover:opacity-90 disabled:opacity-60"
                >
                  Submit Enrollment
                </button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

import { UseFormRegisterReturn } from "react-hook-form";

function Input({
  placeholder,
  register,
  error,
}: {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}) {
  return (
    <div>
      <input
        {...register}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder-white/40"
      />
      {error && (
        <p className="mt-1 text-[0.7rem] text-red-400">*{error}</p>
      )}
    </div>
  );
}
