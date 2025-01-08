

import Image from "next/image";
import KYC_Application from "./KYCForms/KYC_Application";

export default function Home() {
  return (
    <div className="items-center justify-items-center mt-6 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <KYC_Application/>
    </div>
  );
}
