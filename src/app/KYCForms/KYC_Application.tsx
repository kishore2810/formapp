"use client";

import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BankAccountNo } from "./BankAccountNo";

type Inputs = {
  firstName: string;
  middleName: string;
  lastName: string;
  emiratesId: string;
  nationality: string;
  exampleRequired: string;
  gender: string;
  email: string;
  mobile: number;
  framework: string;
  employerName: string;
  monthlySalary: string;
  monthlyAllowance: string;
  annualIncome: string;
  banknum:string;
  from:string;
  to:string;
};

export function KYC_Application() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Card className="w-full max-w-[700px] mx-auto">
    <div className="flex justify-end mr-8 mb-4">
      <Image src="/logofinance.png" alt="LOGO" width={200} height={100} />
    </div>
  
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <div className="grid w-full items-center gap-4">
  
          {/* KYC Header */}
          <Card className="bg-[#c09c5c] pt-3 pb-3 mt-2 text-black">
            <CardHeader>
              <CardTitle className="h2">KYC APPLICATION</CardTitle>
              <CardDescription className="">CUSTOMER DETAILS</CardDescription>
            </CardHeader>
          </Card>
  
          {/* Name Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="First Name" {...register("firstName", { required: "First Name is required" })} />
              <div className="h-2">{errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}</div>
            </div>
  
            <div className="flex flex-col space-y-1">
              <Label htmlFor="middleName">Middle Name</Label>
              <Input id="middleName" placeholder="Middle Name" {...register("middleName")} />
              <div className="h-2"></div>
            </div>
  
            <div className="flex flex-col space-y-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Last Name" {...register("lastName", { required: "Last Name is required" })} />
              <div className="h-2">{errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}</div>
            </div>
          </div>
  
          {/* Emirates ID Section */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="emiratesId">Emirates Identification No</Label>
            <Input id="emiratesId" placeholder="Emirates ID" {...register("emiratesId", { required: "Emirates Identification No is required" })} />
            {errors.emiratesId && <span className="text-red-500">{errors.emiratesId.message}</span>}
          </div>
  
          {/* Nationality and Gender Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="nationality">Nationality</Label>
              <Input id="nationality" placeholder="Nationality" {...register("nationality", { required: "Nationality is required" })} />
              {errors.nationality && <span className="text-red-500">{errors.nationality.message}</span>}
            </div>
  
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={(value) => setValue("gender", value)}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
            </div>
          </div>
  
          {/* Mobile and Email Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="mobile">Mobile</Label>
              <Input id="mobile" placeholder="Mobile Number" {...register("mobile", { required: "Mobile number is required" })} />
              {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
            </div>
  
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email Address" {...register("email", { required: "Email is required" })} />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
          </div>
  
          {/* Type of Employment Section */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="employmentType" className="mb-1">Type of Employment</Label>
            <RadioGroup defaultValue="comfortable">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="default" />
                  <Label htmlFor="default">Salaried</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="comfortable" />
                  <Label htmlFor="comfortable">Self-Employed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="compact" />
                  <Label htmlFor="compact">Pension</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
  
          {/* Employer Name Section */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="employerName">Employer Name</Label>
            <Input id="employerName" placeholder="Employer Name" {...register("employerName")} />
            {errors.employerName && <span className="text-red-500">{errors.employerName.message}</span>}
          </div>
  
          {/* Salary/Allowance/Income Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="monthlySalary">Monthly Salary/Income:</Label>
              <Input id="monthlySalary" placeholder="Monthly Salary/Income" {...register("monthlySalary", { required: "Monthly Salary/Income is required" })} />
              <div className="h-5">{errors.monthlySalary && <span className="text-red-500">{errors.monthlySalary.message}</span>}</div>
            </div>
  
            <div className="flex flex-col space-y-1">
              <Label htmlFor="monthlyAllowance">Monthly Allowance:</Label>
              <Input id="monthlyAllowance" placeholder="Monthly Allowance" {...register("monthlyAllowance")} />
              <div className="h-5"></div>
            </div>
  
            <div className="flex flex-col space-y-1">
              <Label htmlFor="annualIncome">Annual Income:</Label>
              <Input id="annualIncome" placeholder="Annual Income" {...register("annualIncome", { required: "Annual Income is required" })} />
              <div className="h-5">{errors.annualIncome && <span className="text-red-500">{errors.annualIncome.message}</span>}</div>
            </div>
          </div>
  
          {/* Bank Details Section */}
          <Card className="bg-gray-950 text-white mt-2">
            <CardHeader>
              <CardTitle>Bank Details</CardTitle>
            </CardHeader>
          </Card>
  
          <div className="flex flex-col space-y-1">
            <Input id="banknum" placeholder="AE" {...register("banknum", { required: "No is required" })} />
            {errors.banknum && <span className="text-red-500">{errors.banknum.message}</span>}
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="from">From</Label>
              <Input id="from" placeholder="From" {...register("from", { required: "From is required" })} />
              {errors.from && <span className="text-red-500">{errors.from.message}</span>}
            </div>
  
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="to">To</Label>
              <Input id="to" placeholder="To" {...register("to", { required: "To is required" })} />
              {errors.to && <span className="text-red-500">{errors.to.message}</span>}
            </div>
          </div>
  
          {/* Consent Section */}
          <Card className="bg-gray-950 text-white mt-2">
            <CardHeader>
              <CardTitle>CONSENT (Permission upon signing this consent form)</CardTitle>
            </CardHeader>
          </Card>
  
          <span className="text-justify">
          By signing this form, you consent (permission) to Mawarid Finance PJSC to request for your statement of account
through the Central Bank of the United Arab Emirates, from your bank (as can be identified by the account
number IBAN) and also for your bank to provide this information through the Central Bank of the United Arab
Emirates, without taking additional consent
I/We, the undersigned, hereby confirm that, I/We have no objection to Mawarid Finance PJSC accessing my/our
credit information from AECB (Al Etihad Credit Bureau) at any given point of time. Mawarid Finance PJSC shall use
my credit information received from AECB for providing various services and facilities to me/us from time to time.
I confirm that the information given by me is complete, true and correct, and agree that Mawarid Finance PJSC has
the right to verify all the above, by any means it deems appropriate. I declare that in keeping with Mawarid
Finance’s Islamic status, I am not going to use any of Mawarid Products and, or service for any non-Shariah
compliant purpose.
          </span>
  
        </div>
      </CardContent>
  
      <CardFooter className="flex justify-between mt-4">
        <Button type="submit">Submit</Button>
      </CardFooter>
    </form>
  </Card>
  
  
  );
}

export default KYC_Application;
