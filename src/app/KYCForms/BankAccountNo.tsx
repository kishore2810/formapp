import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp";
  
  export function BankAccountNo() {
    return (
      <InputOTP maxLength={23}>
        <InputOTPGroup>
          {/* First set of slots with prefilled values */}
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1}  />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
          <InputOTPSlot index={8} />
          <InputOTPSlot index={9} />
          <InputOTPSlot index={10} />

        </InputOTPGroup>
  
      
  
  
      </InputOTP>
    );
  }
  