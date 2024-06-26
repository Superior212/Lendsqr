import { Label } from "@/components/ui/label";

export default function GeneralDetails() {
  return (
    <div className="grid gap-4 bg-white text-[#213F7D] rounded-md p-5 ">
      <h3 className="text-[15px] font-[500]">Personal Information</h3>

      <div className="grid grid-cols-5 text-start gap-x-3 gap-y-6 work-sans text-[#545F7D]">
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="fullname" className="font-400 text-[12px] uppercase">
            Full Name
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            Grace Effiom
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label className="font-400 text-[12px] uppercase">Phone Number</Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            07060780922
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="email" className="font-400  text-[12px] uppercase">
            Email Address
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            grace@gmail.com
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="bvn" className="font-400  text-[12px] uppercase">
            Bvn
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            07060780922
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="gender" className="font-400  text-[12px] uppercase">
            Gender
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            Female
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label
            htmlFor="marital-status"
            className="font-400  text-[12px] uppercase">
            Marital Status
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            Single
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="children" className="font-400  text-[12px] uppercase">
            Children
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            None
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label
            htmlFor="residence"
            className="font-400  text-[12px] uppercase">
            Type of Residence
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            Parent’s Apartment
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-200 my-3" />
      <h3 className="text-[15px] font-[500]">Education and Employment</h3>
      <div className="grid grid-cols-4 text-start gap-x-3 gap-y-6 work-sans text-[#545F7D]">
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="fullname" className="font-400  text-[12px] uppercase">
            level of education
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            B.Sc
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label className="font-400  text-[12px] uppercase">
            employment status
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            Employed
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="email" className="font-400  text-[12px] uppercase">
            sector of employment
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            FinTech
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="bvn" className="font-400  text-[12px] uppercase">
            Duration of employment
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            2 years
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="gender" className="font-400  text-[12px] uppercase">
            office email
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            grace@lendsqr.com
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label
            htmlFor="marital-status"
            className="font-400  text-[12px] uppercase">
            Monthly income
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            ₦200,000.00- ₦400,000.00
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="children" className="font-400  text-[12px] uppercase">
            loan repayment
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            40,000
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-200 my-3" />
      <h3 className="text-[15px] font-[500]">Socials</h3>
      <div className="grid grid-cols-4 text-start gap-x-3 gap-y-6 work-sans text-[#545F7D]">
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="fullname" className="font-400  text-[12px] uppercase">
            Twitter
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            @grace_effiom
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label className="font-400  text-[12px] uppercase">Facebook</Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            Grace Effiom
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="email" className="font-400  text-[12px] uppercase">
            Instagram
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            @grace_effiom
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-200 my-3" />
      <h3 className="text-[15px] font-[500]">Guarantor</h3>
      <div className="grid grid-cols-4 text-start gap-x-3 gap-y-6 work-sans text-[#545F7D]">
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="fullname" className="font-400  text-[12px] uppercase">
            full Name
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            Debby Ogana
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label className="font-400  text-[12px] uppercase">
            Phone Number
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            07060780922
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="email" className="font-400  text-[12px] uppercase">
            Email Address
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            debby@gmail.com
          </p>
        </div>
        <div className="flex flex-col items-start space-y-1 text-start">
          <Label htmlFor="email" className="font-400  text-[12px] uppercase">
            Relationship
          </Label>
          <p className="border-none text-base font-[500] text-[#545F7D]">
            Sister
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-200 my-3" />
    </div>
  );
}
