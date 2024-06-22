import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import MemoOrganization from "@/icons/Organization";

const SelectOrganization = () => {
  return (
    <div>
      <div className="grid gap-3 px-4">
        <Select>
          <SelectTrigger
            id="model"
            className="items-start text-[#213F7D] flex [&_[data-description]]:hidden">
            <MemoOrganization className="h-5 w-5" />
            <SelectValue
              className="!text-[#213F7D]"
              placeholder="Switch Organization"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="genesis">
              <div className="flex items-start gap-3 text-[#213F7D]">
                <div className="grid gap-0.5">
                  <p>
                    Neural{" "}
                    <span className="font-medium text-[#213F7D]">Genesis</span>
                  </p>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="explorer">
              <div className="flex items-start gap-3 text-[#213F7D]">
                <div className="grid gap-0.5">
                  <p>
                    Neural{" "}
                    <span className="font-medium text-[#213F7D]">Explorer</span>
                  </p>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="quantum">
              <div className="flex items-start gap-3 text-[#213F7D]">
                <div className="grid gap-0.5">
                  <p>
                    Neural{" "}
                    <span className="font-medium text-[#213F7D]">Quantum</span>
                  </p>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectOrganization;
