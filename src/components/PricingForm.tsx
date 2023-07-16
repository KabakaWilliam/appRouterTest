"use client";
import { PropertyPricingValidator } from "@/lib/validators/PropertyPricing";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/src/lib/utils.ts";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";
import { Button } from "./ui/Button";

type FormData = z.infer<typeof PropertyPricingValidator>;

interface PricingFormProps extends React.HTMLAttributes<HTMLFormElement> {}
const PricingForm = ({ className, ...props }: PricingFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(PropertyPricingValidator),
    // defaultValues:{

    // }
  });

  const { mutate: makeReservation, isLoading } = useMutation({
    mutationFn: async (props: FormData) => {
      console.log("hello");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status == 409) {
          return toast({
            title: "Checkin Date in past",
            description: "Please choose a date in the present",
            variant: "destructive",
          });
        }
        return toast({
          title: "Something went wrong",
          description: "Couldn't reserve the place",
          variant: "destructive",
        });
      }
    },
    onSuccess: () => {
      toast({
        description: "Booked",
      });
    },
  });

  return (
    <form
      className={cn(``, className)}
      onSubmit={handleSubmit((e) => makeReservation(e))}
      {...props}
    >
      <div className="w-[322px] h-12 bg-yellow-400"></div>
      <div className="w-[322px] h-6"></div>
      <div className="w-[322px] h-[112px] border rounded-[12px] border-[#B0B0B0]"></div>
      <div className="w-[322px] h-4"></div>
      <Button
        className="w-[322px] bg-[#E01461] h-12 text-white text-[16px] rounded-[12px]"
        isLoading={isLoading}
      >
        Reserve
      </Button>
      <div className="w-[322px] h-4"></div>
    </form>
  );
};

export default PricingForm;
