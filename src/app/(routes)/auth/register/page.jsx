"use client";
import Container from "@/components/ui/container";
import { Heading } from "@/components/ui/headings";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidation } from "@/validation/register";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gender } from "@/generated/prisma";
import { useRegister } from "@/hooks/useUser";
import { toast } from "sonner";

function Page() {
  const registerForm = useForm({
    resolver: zodResolver(registerValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNo: "",
      age: "",
      gender: "",
      email: "",
    },
  });

  const { mutate: register, isPending } = useRegister();

  const onSubmit = (data) => {
    register(data, {
      onSuccess: () => {
        toast.success("Registration successful!");
      },
      onError: (error) => {
        toast.error("Registration failed. Please try again.");
      },
      onSettled: () => {
        registerForm.reset();
      },
    });
  };

  return (
    <Container className={"max-w-2xl flex flex-col justify-center gap-6"}>
      <div className="flex flex-col gap-2">
        <Heading size="h4">Registration</Heading>
        <Heading size="p" className={"text-muted-foreground"}>
          Please fill in the details below to create an account.
        </Heading>
      </div>
      <Form {...registerForm}>
        <form
          className="flex flex-col gap-4"
          onSubmit={registerForm.handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <FormField
              name="firstName"
              control={registerForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={"First Name"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={registerForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={"Last Name"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="gender"
              control={registerForm.control}
              render={({ field }) => (
                <FormItem>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className={"w-full"}>
                        <SelectValue placeholder="Select Gender">
                          {field.value}
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={Gender.MALE}>{Gender.MALE}</SelectItem>
                      <SelectItem value={Gender.FEMALE}>
                        {Gender.FEMALE}
                      </SelectItem>
                      <SelectItem value={Gender.OTHER}>
                        {Gender.OTHER}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="age"
              control={registerForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={"Age"} type={"tel"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="mobileNo"
              control={registerForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={"Mobile No"} type={"tel"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={registerForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={"Email"} type={"email"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className={"w-full"}
            isLoading={isPending}
            disabled={isPending}
          >
            Register
          </Button>
        </form>
      </Form>
    </Container>
  );
}

export default Page;
